import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { AutenticacionService } from './autenticacion.service';
import { CreateUserDto } from '../usuarios/dto/create-user.dto';
import { LoginUserDto } from '.dto/login-user.dto';

@Controller('auth')
export class AutenticacionController {
  constructor(private readonly autenticacionService: AutenticacionService) {}

  @Post('signup')
  signup(@Body() createUserDto: CreateUserDto) {
    return this.autenticacionService.signup(createUserDto);
  }

  @Post('login')
  async login(@Body() loginUserDto: LoginUserDto) {
    const user = await this.autenticacionService.validateUser(
      loginUserDto.username,
      loginUserDto.password,
    );
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }
    return this.autenticacionService.login(user);
  }

  @Post('logout')
  logout() {
    return { message: 'Logout successful' };
  }
}
