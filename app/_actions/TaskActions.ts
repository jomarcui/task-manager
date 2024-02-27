'use server';

import { TaskService } from '../_server/Service/TaskService';

export const fetchTasks = async (pageNumber: number) => {
  const taskService = new TaskService();
  return await taskService.searchTask({}, pageNumber, 10);
};
