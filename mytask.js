import React from 'react';



const MyTask = ({todo, toDos, setToDos, task, text}) => {
    const deleteHandler = () => {
      setToDos(toDos.filter((el) => el.id !== todo.id));
    };

    const checkHandler = () => {
      setToDos(toDos.map(el=> {
         if (el.id===todo.id){
           return{
             ...el, completed: !el.completed
           }
         }
         return el;
         
      }))
    };

    return (
        <div>
           <li className="flextask item">
                <i onClick={checkHandler} className={`far fa-circle ${todo.completed ? "fas fa-check-circle": "far fa-circle" }`} action="complete" ></i>
                <p className={`task ${todo.completed ? "doneTask" : '' }`}>{task}</p>
                <i onClick={deleteHandler} className="far fa-trash-alt" action="delete" ></i>
                <p className={`date ${todo.completed ? "doneTask" : '' }`}>{text}</p> 
            </li>
        </div>
    );
}

export default MyTask; 