import { Inject, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateRepresentativeDto } from './dto/body/createRepresentative.dto';
import { Representatives } from './representative.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RepresentativeService {
  constructor(
    @Inject('REPRESENTATIVE_REPOSITORY')
    private representativeRepo: Repository<Representatives>,
    private prisma: PrismaService,
  ) {}

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
    const newRepresentative = await this.prisma.representative.create({
      data: body,
    });

    return newRepresentative;
  }

  async edit(id: number, body: CreateRepresentativeDto) {
    const editedRepresentative = await this.prisma.representative.update({
      where: { id },
      data: body,
    });

    return editedRepresentative;
  }

  async findByCustomer(customer: string) {
    const representatives = await this.prisma.representative.findMany({
      where: { customer },
    });

    return representatives;
  }
}
