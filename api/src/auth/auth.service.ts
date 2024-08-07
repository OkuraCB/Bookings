import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Prisma } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from '../users/dto/body/createUser.dto';
import { LoginDto } from './dto/body/login.dto';
import { JwtService } from '@nestjs/jwt';
import { UserDto } from 'src/users/dto/expose/user.dto';
import { In, Repository } from 'typeorm';
import { Tokens } from './tokens.entity';
import { Users } from 'src/users/users.entity';

@Injectable()
export class AuthService {
  constructor(
    @Inject('TOKEN_REPOSITORY') private tokenRepo: Repository<Tokens>,
    @Inject('USERS_REPOSITORY') private userRepo: Repository<Users>,
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async validatePassword(pss: string, password: string) {
    return bcrypt.compare(pss, password);
  }

  async create(user: CreateUserDto) {
    const { name, email, password } = user;

    const salt = await bcrypt.genSalt();
    const hashed = await bcrypt.hash(password, salt);

    const newUser: Prisma.UserCreateInput = {
      name: name,
      email: email,
      password: hashed,
    };

    return await this.prisma.user.create({ data: { ...newUser } });
  }

  async login(user: LoginDto) {
    const { email, password } = user;

    const find = await this.prisma.user.findUnique({ where: { email: email } });

    if (!find) {
      throw new UnauthorizedException('Invalid username or password');
    }

    const passCheck = await this.validatePassword(password, find.password);

    if (!passCheck) {
      throw new UnauthorizedException();
    }

    const payload = { sub: find.id, username: find.name };
    const accessToken = await this.jwtService.sign(payload);

    const newToken = await this.prisma.token.create({
      data: { token: accessToken, active: true, userId: payload.sub },
    });

    if (!newToken) throw new Error('error');

    return { access_token: accessToken };
  }

  async validateUser(email: string, password: string) {
    const user = await this.prisma.user.findUnique({
      where: { email: email },
    });
    if (user && this.validatePassword(password, user.password)) {
      return user as UserDto;
    }
    return null;
  }
}
