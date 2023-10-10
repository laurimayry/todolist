import React, { useState, useRef} from 'react';
import Header from './components/Header';
import  Container  from '@mui/material/Container';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';
import  Button  from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

import { Link, Outlet } from 'react-router-dom';
import  dayjs  from 'dayjs';

import  {LocalizationProvider}  from '@mui/x-date-pickers/LocalizationProvider';
import  {AdapterDayjs}  from '@mui/x-date-pickers/AdapterDayjs'
import  {DatePicker}  from '@mui/x-date-pickers/DatePicker';

  

function App() {

  
  const [todo, setTodo] = React.useState({
    description: '',
    date: '',
    priority: ''
  });
  const [todos, setTodos] = React.useState([]);
  const gridRef = useRef();
  

  

  const[columnDefs] = useState([
    {field: 'description', sortable: true, filter: true, floatingFilter: true},
    {field: 'priority', sortable: true, filter: true, floatingFilter: true, 
    cellStyle: params => params.value == "high" ? { color: 'red'} : {color: 'black'}
  },
    {field: 'date', sortable: true, filter: true, floatingFilter: true}
    
  ]);
  

  const addTodo = () => {
    const formattedDate = dayjs(todo.date).format('MM/DD/YYYY');

    setTodos([...todos, {...todo, date: formattedDate}]);
    setTodo({description: '', date: '', priority: ''});
  }

  const deleteTodo = () => {
    if(gridRef.current.getSelectedNodes().length > 0){
    const row = gridRef.current.getSelectedNodes()[0].id;
    setTodos(todos.filter((item, index) => row != index));
    }
    else{
      alert('Select at least one row');
    }
  }

  return (
    <Container>

      <div className="App">
        <nav>
          <Link to={"/todolist/"}>Home</Link>
          <Link to={"/todolist/about"}>About</Link>
          <Link to={"/todolist/contact"}>Contact</Link>
        </nav>
          <Outlet />
      </div>


      
      <Header/>
      <Stack direction= 'row'
            spacing= {2}
            alignItems= 'center'
            justifyContent= 'center'>

        <TextField
          label='Description'
          value = {todo.description} 
          onChange={e => setTodo({...todo, description: e.target.value})}
        />

        <TextField 
        label='Priority'
        value={todo.priority}
        onChange = {e => setTodo({...todo, priority: e.target.value})} 
        />

        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          value={todo.date}
          onChange={(date) => setTodo({...todo, date})}
        />
        </LocalizationProvider>

        <Button variant='contained' onClick={addTodo}>Add Todo</Button>
        <Button variant='contained' color='error' onClick={deleteTodo}>Delete</Button>
      </Stack>

      <Stack alignItems= 'center'
            justifyContent= 'center'>
      <div className='ag-theme-material 'style={{width: 600, height: 500}} >
        <AgGridReact 
          ref={gridRef}
          onGridReady={params => gridRef.current = params.api}
          rowSelection='single'
          columnDefs={columnDefs}
          rowData={todos}
          animateRows={true}
          
       />
      </div>
      </Stack>
    </Container>
  );
}


export default App;
