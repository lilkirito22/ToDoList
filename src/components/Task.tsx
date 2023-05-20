import { ITask } from '../App'
import styles from './Task.module.css'
import { Trash  } from '@phosphor-icons/react'
import{BsFillCheckCircleFill} from 'react-icons/bs'


interface Props{
    task:ITask

    onDelete: (taskId:string) => void
    onComplete: (taskId:string) => void
    
}

export function Tasks({task,onDelete,onComplete}:Props){

    
    

    return(
            <div className={styles.task}>
                <button className={styles.checkContainer} onClick={()=>{
                    onComplete(task.id)
                }} >
                    {task.completed ? <BsFillCheckCircleFill/> :  <div />}
                </button>

                <p className={task.completed ? styles.textCompleted : ""} >{task.title}</p>

                <button  onClick={()=>{
                    onDelete(task.id);
                }}  className={styles.deleteButton}>

                    <Trash size={20} />

                </button>

            </div>
        )

}