import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateUserDto } from './dto/body/createUser.dto';
import { UserDto } from './dto/expose/user.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async list() {
    const users = await this.prisma.user.findMany();
    return users;
  }

  async delete(id: number) {
    const deletedUser = await this.prisma.user.delete({ where: { id: id } });

    return deletedUser.id;
  }

  async add(body: CreateUserDto) {
    const newUser = await this.prisma.user.create({ data: body });

    return newUser;
  }

  async edit(id: number, body: CreateUserDto) {
    const editedUser = await this.prisma.user.update({
      where: { id },
      data: body,
    });

    return editedUser;
  }
}
