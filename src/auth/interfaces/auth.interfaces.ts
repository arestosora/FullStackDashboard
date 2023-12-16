import { LoginUserDto } from "../dto/auth.dto";

export interface IAuth {
    login(dto: LoginUserDto): Promise<any>
}