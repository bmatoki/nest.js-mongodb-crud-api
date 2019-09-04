import { Connection } from 'mongoose';
import { todoSchema } from '../schemas/todo.schema';

export const todoProviders = [
  {
    provide: 'TODO_MODEL',
    useFactory: (connection: Connection) => connection.model('todo', todoSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
