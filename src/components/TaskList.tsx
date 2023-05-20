import styles from'./TaskList.module.css';
import {Tasks} from './Task';
import { ITask } from '../App';
import WithoutTasks from '../assets/Clipboard.svg'


interface Props{
    tasks: ITask[];
    onDelete: (taskid: string) => void;
    onComplete: (taskid: string) => void;
    
}

export function TaskList({tasks, onDelete, onComplete }:Props){

    

    const tasksNumbers = tasks.length
    const completedTasks = tasks.filter((task) => task.completed).length
    
    return(
        <section className={styles.taskList} >

            <header className={styles.header}>
            <div>

            <p>Tarefas Criadas</p>

            <span>{tasksNumbers}</span>

            </div>
            
            <div>
            <p className={styles.tasksDone}>Concluidas</p>

            <span>{completedTasks} de {tasksNumbers}</span> 


            </div>
              
             



            </header>


            <div className={styles.list}>
                {tasks.map((task) =>(

                        <Tasks key={task.id} 
                        task={task} 
                        onDelete={onDelete}
                        onComplete = {onComplete}
                          
                          />
                ))}


                {tasks.length <= 0 &&(
                    <section className={styles.empty}>
                        
                        <img className={styles.withoutTasks} src={WithoutTasks} alt="nothing" />
                        <div>
                        <p> Voce ainda nao tem tarefas cadastradas</p>
                        <span>Crie tarefas e organize seus itens a fazer</span>                   
                            </div>

                    </section>
                )}
                
                

            </div>




        </section>
    )
}
