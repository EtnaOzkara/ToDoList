import React from "react";
import MyTask from "./mytask";


const List = ({toDos, setToDos}) => {
    return (
        <div>
           <ul id="list"> 
           {toDos.map( todo => (
               <MyTask setToDos= {setToDos} toDos= {toDos} todo={todo} key={todo.id} task={todo.task} text={todo.text} id={todo.id}/>
           ))}
            </ul>
            
        </div>
    );
}

export default List; 