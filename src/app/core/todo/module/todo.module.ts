import { Module } from '@nestjs/common';
import { TodoService } from '../service/todo.service';
import { TodoController } from '../controller/todo.controller';
import { DatabaseModule  } from '../../../shared/database/modules/database.module';
import { todoProviders } from '../../../shared/database/providers/todo.providers';

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
