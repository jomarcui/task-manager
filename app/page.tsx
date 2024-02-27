import { fetchTasks } from './_actions/TaskActions';

type ISearchQuery = {
  page: string;
};

type HomeProps = {
  searchParams?: { [key: string]: string | string[] | undefined };
};

export default async function Home({ searchParams }: HomeProps) {
  // get the current page number
  const { page } = searchParams as ISearchQuery;
  const pageNumber = page && !isNaN(Number(page)) ? Number(page) : 1;
  const { data: tasks } = await fetchTasks(pageNumber);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>TEST</div>
      {tasks.map((_, index) => (
        <div key={index}>test</div>
      ))}
    </main>
  );
}
