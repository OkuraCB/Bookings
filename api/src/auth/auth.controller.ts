import {
  Controller,
  Post,
  Body,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { CreateUserDto } from '../users/dto/body/createUser.dto';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/body/login.dto';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { UserDto } from 'src/users/dto/expose/user.dto';
import { Serialize } from 'src/interceptors/serialize.interceptor';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  @Serialize(UserDto)
  async signUp(@Body() user: CreateUserDto) {
    return await this.authService.create(user);
  }

  @UseGuards(LocalAuthGuard)
  @Post('signin')
  async signIn(@Body() user: LoginDto) {
    return await this.authService.login(user);
  }
}
