import { Controller, UseGuards, Get, Req } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { getRequest } from 'src/common/getRequest';

@UseGuards(JwtAuthGuard)
@Controller('users')
export class UsersController {
  constructor(private jwtService: JwtService) {}

  @Get('test')
  async testGet(@Req() req: Request) {
    return getRequest(req, this.jwtService);
  }
}
