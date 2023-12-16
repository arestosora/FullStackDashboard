/* eslint-disable @typescript-eslint/no-unused-vars */
import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from 'src/user/dto/user.dto';
import { UserService } from 'src/user/user.service';
import { LoginUserDto } from './dto/auth.dto';
import { AuthService } from './auth.service';


@Controller('auth')
export class AuthController {
    constructor(private userService: UserService, private authService: AuthService) { }

    @Post('register')
    public async registerUser(@Body() dto: CreateUserDto) {
        return this.userService.create(dto);
    }

    @Post('login')
    public async login(@Body() dto: LoginUserDto) {
        return await this.authService.login(dto)
    }

}
