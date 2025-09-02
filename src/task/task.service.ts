import { Injectable } from '@nestjs/common';
import { TaskDto } from './task.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class TaskService {
  constructor(private prisma: PrismaService) {}
  private tasks = [
    {
      id: 1,
      title: 'First Task',
      description: 'This is the first task',
      isDone: false,
    },
    {
      id: 2,
      title: 'Second Task',
      description: 'This is the second task',
      isDone: false,
    },
  ];

  getTasks() {
    return this.prisma.task.findMany();
  }
  async create(dto: TaskDto) {
    return this.prisma.task.create({
      data: {
        title: dto.name,
        isDone: false,
      },
    });

    this.tasks.push({
      id: this.tasks.length + 1,
      title: dto.name,
      description: dto.description,
      isDone: false,
    });

    return this.tasks;
  }
  updateTask(id: string) {
    const task = this.prisma.task.update({
      where: { id: Number(id) },
      data: { isDone: true },
    });
    return task;

    // const task = this.tasks.find((task) => task.id === Number(id));
    // if (task) {
    //   task.isDone = !task.isDone;
    // }
    // return task;
  }
}
