import PlusIcon from "../assets/icons/plus.svg?react"
import TaskItem from "./task-item";
import Button from "../components/button";
import useTask from "../hooks/use.task";
import useTasks from "../hooks/use-tasks";
import { TaskState, type Task } from "../models/task";

export default function TaskList(){

  const { tasks, isLoadingTasks } = useTasks();
   const { prepareTask } = useTask();


  function handleNewTask(){
    prepareTask()
  }

    return (
      <>
        <section>
          <Button
            icon={PlusIcon}
            className="w-full"
            onClick={handleNewTask}
            disabled={
              tasks.some((task) => task.state === TaskState.Creating) ||
              isLoadingTasks
            }
          >
            Nova Tarefa
          </Button>
        </section>
        <section className="space-y-2">
          {!isLoadingTasks &&
            tasks.map((tasks) => <TaskItem key={tasks.id} task={tasks} />)}
          {isLoadingTasks && (
            <>
              <TaskItem task={{} as Task} loading />
              <TaskItem task={{} as Task} loading />
              <TaskItem task={{} as Task} loading />
            </>
          )}
        </section>
      </>
    );
}