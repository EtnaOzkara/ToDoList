import React from "react";

const Form = ({filtered, setFiltered, dateSort, setDateSort, todo, toDos, setToDos, task, text}) => {

const alphSort = (e) => {  
    setToDos(toDos.sort((a,b)=> a.task.localeCompare(b.task)));
    setFiltered(...toDos);   
};

const timeSort = (e) => {   
    setToDos(toDos.sort((a,b)=> a.text.localeCompare(b.text)));
    setFiltered(toDos);
    }; 

 const sortAccDate = (e) => {  
        setDateSort(e.target.value);
        setToDos(toDos.filter((el) => el.text === e.target.value));
        setFiltered(toDos);
       
    }; 

 const dispAll = (e) => {  
        setToDos(filtered);
        setDateSort("");
    }; 

    return (
        <div className="container buttons flexButtons">
           <button onClick={alphSort} className="btnone buttons">Alphabetical</button>
            <button onClick={timeSort} className="btntwo buttons">According to Date</button>
            <button onClick={dispAll} className="btnthree buttons">Display All</button>
            <input value={dateSort} onChange={sortAccDate}  className= "selectDate buttons" type="date" id="duedate"  placeholder="Enter Due Date"/>
        </div>
    );
}

export default Form;