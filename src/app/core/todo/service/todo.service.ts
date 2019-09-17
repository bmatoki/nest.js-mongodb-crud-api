import { Injectable,Inject  } from '@nestjs/common';
import { Model  } from 'mongoose';
import { Todo } from '../../../shared/interfaces/todo.mongo.interface';

@Injectable()
export class TodoService {

  constructor(@Inject('TODO_MODEL') private readonly todoModel: Model<Todo>){}

  async create(payload: Todo): Promise<Todo> {
    const createdCat = new this.todoModel(payload);
    return await createdCat.save();
  }

  async findAll(): Promise<Todo[]> {
    return await this.todoModel.find().exec();
  }

  async remove(id: string): Promise<Todo> {
    return await this.todoModel.deleteOne({ _id: id });
  }

  async update(id: string,payload: Todo): Promise<Todo> {
    return await this.todoModel.updateOne({ _id:id }, payload);
  }

}
