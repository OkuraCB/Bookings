import {
  Controller,
  UseGuards,
  Get,
  Req,
  Delete,
  Param,
  Body,
  Post,
  Patch,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { getRequest } from 'src/common/getRequest';
import { UsersService } from './users.service';
import { Serialize } from 'src/interceptors/serialize.interceptor';
import { UserDto } from './dto/expose/user.dto';
import { CreateUserDto } from './dto/body/createUser.dto';

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

  @Post()
  @Serialize(UserDto)
  async add(@Body() body: CreateUserDto) {
    return this.userService.add(body);
  }

  @Patch('/:id')
  @Serialize(UserDto)
  async edit(@Param('id') id: number, @Body() body: CreateUserDto) {
    return this.userService.edit(id, body);
  }
}
