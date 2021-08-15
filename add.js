import React from "react";

const Task = (props) => {
    const inputTextHandler = (e) =>{      
        props.setInputText(e.target.value);
    };

    const inputDateHandler = (e) => {
        props.setDateValue(e.target.value);
        
    }; 

    const addToDoHandler = (e) => {
        console.log(props.inputText)
        props.setToDos([
            ...props.toDos, {task: props.inputText, text: props.dateValue, completed:false, id: Math.random(),}
        ]);
        
        console.log(props.dateValue);
        props.setInputText("");
        props.setDateValue("");
        
    };
    

    return (
         <div className="flex add-item">
    
            <button  onClick={addToDoHandler} className="button flex">Add</button>
            <input  value={props.inputText} onChange={inputTextHandler} className= "input flex" type="text" id="input" placeholder="Add a task"/>
            <input value={props.dateValue} onChange={inputDateHandler} className= "date flex" type="date" id="duedate" placeholder="Enter Due Date"/>

        </div>
    );
}

export default Task;