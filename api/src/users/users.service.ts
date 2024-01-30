import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

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
}
