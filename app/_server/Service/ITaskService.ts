export type Task = {
  description: string;
  name: string;
};

export interface ITaskService {
  searchTask(
    filter: Partial<Task>
  ): Promise<{ data: Task[]; totalCount: number }>;
}
