import { Repository } from '../RepositoryService/RepositoryService';
import { Task, ITaskService } from './ITaskService';

export class TaskService implements ITaskService {
  private repository: Repository<Task>;

  constructor() {
    this.repository = new Repository<Task>('tasks');
  }

  async searchTask(
    filter: Partial<Task>,
    page: number = 1,
    limit: number = 10
  ): Promise<{ data: Task[]; totalCount: number }> {
    return this.repository.find(filter, page, limit);
  }
}
