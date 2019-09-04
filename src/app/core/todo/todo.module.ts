import { Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoController } from './todo.controller';
import { DatabaseModule  } from '../../shared/database/database.module';
import { todoProviders } from '../../shared/database/providers/todo.providers';

@Module({
  imports:[
    DatabaseModule,
  ],
  providers: [
    TodoService,
    ...todoProviders,
  ],
  controllers: [
    TodoController,
  ],
})
export class TodoModule {}
