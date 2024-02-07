import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateRepresentativeDto } from './dto/body/createRepresentative.dto';

@Injectable()
export class RepresentativeService {
  constructor(private prisma: PrismaService) {}

  async list() {
    const representatives = await this.prisma.representative.findMany();
    return representatives;
  }

  async delete(id: number) {
    const deletedRepresentative = await this.prisma.representative.delete({
      where: { id: id },
    });

    return deletedRepresentative.id;
  }

  async add(body: CreateRepresentativeDto) {
    const newRepresentative = await this.prisma.people.create({ data: body });

    return newRepresentative;
  }

  async edit(id: number, body: CreateRepresentativeDto) {
    const editedRepresentative = await this.prisma.people.update({
      where: { id },
      data: body,
    });

    return editedRepresentative;
  }
}
