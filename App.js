import React,{useState} from 'react';
import './App.css';
import Form from './components/form';
import Titles from './components/titles';
import  Task from './components/add';
import  List from './components/list';

function App() {
  const [inputText,setInputText]= useState('');
  const [dateValue,setDateValue]= useState('');
  const [toDos,setToDos]= useState([]);
  const [dateSort,setDateSort]= useState('');
  const [filtered,setFiltered]= useState([]);
  


  return (
    <div className="App">
     <header className="container">
        <h1>To Do List </h1>
        <Form filtered={filtered} setFiltered={setFiltered} dateSort={dateSort} setDateSort={setDateSort} setToDos= {setToDos} toDos= {toDos} dateValue={dateValue} />
        <Titles />
        <List setToDos= {setToDos} toDos= {toDos} dateValue={dateValue} />
        <Task setFiltered={setFiltered} dateValue={dateValue} setDateValue={setDateValue} inputText={inputText} toDos= {toDos} setToDos= {setToDos} setInputText={setInputText}/>
        
    </header>
    </div>
  );
}

export default App;
