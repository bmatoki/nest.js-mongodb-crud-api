import { Document } from 'mongoose';

export interface Todo extends Document {
  readonly name: string;
  readonly todo: string;
}
