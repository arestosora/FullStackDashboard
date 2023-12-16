/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginUserDto } from './dto/auth.dto';
import { UserService } from 'src/user/user.service';
import { compare } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { IAuth } from './interfaces/auth.interfaces';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class AuthService implements IAuth {
    constructor(private userService: UserService, private jwtService: JwtService, private prisma: PrismaService) { }

    public async login(dto: LoginUserDto) {
        const user = await this.validateUser(dto);
        const payload = {
            username: user.email,
            sub: {
                name: user.name
            }
        }

        return {
            user, backendTokens: {
                accessToken: await this.jwtService.signAsync(payload, {
                    expiresIn: '5h',
                    secret: process.env.JwtSecretKey,
                })
            },

            logs: {
                log: await this.prisma.logs.create({
                    data: {
                        LoginLog: `${user.name}`
                    }
                })
            }
        }
    }


    private async validateUser(dto: LoginUserDto) {
        const user = await this.userService.findByEmail(dto.email);

        if (user && (await compare(dto.password, user.password))) {
            const { password, ...result } = user;
            return result;
        }
        throw new UnauthorizedException();
    }
}