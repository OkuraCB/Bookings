import { Inject, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreatePeopleDto } from './dto/body/createPeople.dto';
import { People } from '@prisma/client';
import { Repository } from 'typeorm';

@Injectable()
export class PeopleService {
  constructor(
    @Inject('PEOPLE_REPOSITORY') private peopleRepo: Repository<People>,
    private prisma: PrismaService,
  ) {}

  async list() {
    const people = await this.prisma.people.findMany();
    return people;
  }

  async delete(id: number) {
    const deletedPerson = await this.prisma.people.delete({
      where: { id: id },
    });

    return deletedPerson.id;
  }

  async add(body: CreatePeopleDto) {
    const newPerson = await this.prisma.people.create({ data: body });

    return newPerson;
  }

  async edit(id: number, body: CreatePeopleDto) {
    const editedPerson = await this.prisma.people.update({
      where: { id },
      data: body,
    });

    return editedPerson;
  }
}
