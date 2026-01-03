import Container from "../components/container";
import TaskList from "../cor-components/task-list";
import TasksSummary from "../cor-components/tasks-summary";

export default function PageHome() {
  return (
    <Container as="article" className="space-y-3">
      <header className="flex items-center justify-between">
        <TasksSummary />
      </header>
      <TaskList />
    </Container>
  );
}