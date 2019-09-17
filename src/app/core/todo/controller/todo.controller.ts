import { Controller,Get,Post,Put,Body,Logger,Delete,ValidationPipe  } from '@nestjs/common';
import { TodoService } from '../service/todo.service';
import { TodoDTO } from '../dto/todo.dto';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post()
  async saveTodo(@Body('payload') payload) {
    try {
      Logger.log('Controller: TODO function saveTodo POST: started');
      await this.todoService.create(payload);
      return {
        success:true,
        msg:'Added successfully',
      };
    } catch (error) {
      Logger.log(`Controller: TODO function saveTodo POST: Error ${error}`);
      return {
        success:false,
        msg:error,
      };
    } finally {
      Logger.log('Controller: TODO function saveTodo POST: ended');
    }
  }

  @Get()
  async getAllTodo() {
    try {
      Logger.log('Controller: TODO function getAllTodos get: started');
      const getAll = await this.todoService.findAll();
      return {
        success:true,
        msg:getAll,
      };
    } catch (error) {
      Logger.log(`Controller: TODO function getAllTodos get: Error ${error}`);
      return {
        success:false,
        msg:error,
      };
    } finally {
      Logger.log('Controller: TODO function getAllTodos get: ended');
    }
  }

  @Put()
  async updateTodo(@Body('payload') payload,@Body('id') id) {
    try {
      Logger.log('Controller: TODO function updateTodo put: started');
      await this.todoService.update(id,payload);
      return {
        success:true,
        msg:'Todo updated',
      };
    } catch (error) {
      Logger.log(`Controller: TODO function updateTodo put: Error ${error}`);
      return {
        success:false,
        msg:error,
      };
    } finally {
      Logger.log('Controller: TODO function updateTodo put: ended');
    }
  }

  @Delete()
  async deleteTodo(@Body('id') id) {
    try {
      Logger.log('Controller: TODO function deleteTodo delete: started');
      await this.todoService.remove(id);
      return {
        success:true,
        msg:'Todo deleted',
      };
    } catch (error) {
      Logger.log(`Controller: TODO function deleteTodo delete: Error ${error}`);
      return {
        success:false,
        msg:error,
      };
    } finally {
      Logger.log('Controller: TODO function deleteTodo delete: ended');
    }
  }

}
