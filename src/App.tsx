import { useEffect, useState } from 'react'
import { Header } from './components/Header';
import { TaskList } from './components/TaskList';

const LOCAL_STORAGE_KEY = "todo:savedTasks"


export interface ITask{
  id: string;
  title: string;
  completed: boolean;
}


import './styles/Global.css'



function App() {
  const [tasks, setTasks  ] = useState<ITask[]>([]);

  function loadSavedTasks(){
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if(saved) {
      setTasks(JSON.parse(saved));
    }
  }

  useEffect(() => {
    loadSavedTasks()
  },[])

  function setTasksAndSave(newTasks: ITask[]){
    setTasks(newTasks);
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks));

  }

  function addTask(taskTitle: string){
    setTasksAndSave([
      ...tasks,{
        id: crypto.randomUUID(),
        title: taskTitle,
        completed: false

      }
    ])

  }

  function deleteTaskById(taskId: string){
    const newTasks = tasks.filter((task) => task.id !== taskId)
    setTasksAndSave(newTasks)
  }

  function toggleTaskCompletedById(taskId: string){
    const newTasks = tasks.map((task) => {
      if(task.id === taskId){
        return{
          ...task,
          completed:!task.completed
        };
      }
      return task
    })
    setTasksAndSave(newTasks)
  }
  
  return (
    
      <div>

        <Header onAddTask={addTask} />

        <TaskList 
          tasks={tasks}
          onDelete={deleteTaskById}
          onComplete={toggleTaskCompletedById}
        />

        
        
      </div>


     
    
  )
}

export default App
