import faker from 'faker';
import { TodoTask, TaskStatus } from '../db/entities/todo-task.entity';

export const createTodoTask = async (save = true) => {
  const t = new TodoTask();
  t.uuid = faker.datatype.uuid();
  t.description = faker.name.findName();
  t.name = faker.name.findName();
  t.status = faker.helpers.randomize([
    TaskStatus.Pending,
    TaskStatus.Completed,
  ]);

  if (save) {
    return await t.save();
  }
  return t;
};

export const createManyTodoTasks = async (times: number) => {
  const tasks: TodoTask[] = [];
  for (let i = 0; i < times; i++) {
    const task = await createTodoTask();
    tasks.push(task);
  }
  return tasks;
};
