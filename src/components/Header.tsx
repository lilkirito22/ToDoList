import {PlusCircle} from '@phosphor-icons/react'
import styles from'./Header.module.css';


import ToDoLogo from '../assets/Logo.svg'
import { ChangeEvent, FormEvent, useState } from 'react';

interface Props{
    onAddTask: (taskTitle: string) => void;
}


export function Header({onAddTask}: Props){

    const [title, setTitle] = useState("");

    function handleSubmit(event: FormEvent){
        event.preventDefault();

        onAddTask(title);

        setTitle("");
                

    }

    const isNewTaskEmpty = title.length === 0

    function OnChangeTitle(event: ChangeEvent<HTMLInputElement>) {
        setTitle(event.target.value);
    }

    

    return (
        <header className={styles.header}>

            <img src={ToDoLogo} alt="logo do ToDo" />

            <form action="" className={styles.newTaskForm} onSubmit={handleSubmit} >

                <input type="text"
                
                placeholder='Adicione uma nova tarefa' 
                onChange={OnChangeTitle}
                value={title}
                required
                
                />

                <button disabled={isNewTaskEmpty} className={styles.button}>Criar <PlusCircle size={20} /> </button>


            </form>
        </header>
        

    );
}