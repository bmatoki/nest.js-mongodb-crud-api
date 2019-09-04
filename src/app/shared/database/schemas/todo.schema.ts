import * as mongoose from 'mongoose';

export const todoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'name is required'],
    validate: {
      validator: p => /^[a-zA-Z ]+$/i.test(p),
      message: 'Invalid name format',
    },
  },
  todo: {
    type: String,
    required: [true, 'todo is required'],
    validate: {
      validator: p => /^[a-zA-Z ]+$/i.test(p),
      message: 'Invalid todo format',
    },
  },
});
