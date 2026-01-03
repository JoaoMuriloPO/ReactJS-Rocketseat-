import useLocalStorage from "use-local-storage";
import {type Task, TASKS_KEY, TaskState } from '../models/task';
import { delay } from '../helpers/utils';
import React from 'react';


export default function useTask(){
    const [tasksData] = useLocalStorage<Task[]>(TASKS_KEY,[]);
    const [tasks, setTasks] = React.useState<Task[]>([])
    const [isLoadingTasks, setIsloadingTasks] = React.useState(true)

    async function fatchTasks(){
      if(isLoadingTasks){
        await delay(2000)
        setIsloadingTasks(false);
      }

      setTasks(tasksData)
    }

    React.useEffect(() => {
      fatchTasks()
    },[tasksData])


    return {
      tasks,
      createdTasksCount: tasks.filter(
        (task) => task.state === TaskState.Created
      ).length,
      concludedTasksCount: tasks.filter((task) => task.concluded).length,
      isLoadingTasks,
    };
        

    
}