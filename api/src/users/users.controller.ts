import { Controller, UseGuards, Get, Req, Delete, Param } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { getRequest } from 'src/common/getRequest';
import { UsersService } from './users.service';
import { Serialize } from 'src/interceptors/serialize.interceptor';
import { UserDto } from './dto/expose/user.dto';

@UseGuards(JwtAuthGuard)
@Controller('users')
export class UsersController {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  @Get('whoami')
  async whoami(@Req() req: Request) {
    return getRequest(req, this.jwtService);
  }

  @Get()
  @Serialize(UserDto)
  async list() {
    return this.userService.list();
  }

  @Delete('/:id')
  async delete(@Param('id') id: number) {
    return this.userService.delete(id);
  }
}
