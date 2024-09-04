import React, { useEffect, useState } from 'react'
import { Avatar, Box, Button, Icon, IconButton, Input, List, ListItem, ListItemAvatar, ListItemText, TextField, Typography } from '@mui/material'
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore'
import { db } from '../COnfig/Config'
import DeleteIcon from '@mui/icons-material/Delete';
import { Edit } from '@mui/icons-material'


const Dashboard = () => {

  const [todo, setTodo] = useState('')
  const [todoList, setTodoList] = useState([])
  const [refresh, setRefresh] = useState(false)
  
  const handleAddTodo =async () => {
   try {
    if(todo.trim() == ''){
      alert('Please enter a Value')
    }
    else{

      const addTodo =await addDoc(collection(db, "users"), {todo})
      console.log(addTodo)
      setTodo('')
      setRefresh(!refresh)
    }} catch (error) {
    console.log(error)
  }    
  }

  useEffect(()=>{
    getTodo()
  },[refresh])

  const getTodo = async () => {
    const querySnapshot = await getDocs(collection(db, "users"));
    let arr=[]
    querySnapshot.forEach((doc) => {
      arr.push({...doc.data(), id:doc.id})
      setTodoList(arr)
    });
    console.log(todoList)

  }

  const deleteTodo = (id) => {
    const deleteTodoList = deleteDoc(doc(db, "users", id))
    setRefresh(!refresh)
  }

  const handleUpdateTodo =async (id) => {

    let updateValue = prompt('Enter your Update Value')

    let updateObj = {
      todo: updateValue
    }

    const EditTodo =await updateDoc(doc(db, "users", id), updateObj)

    setRefresh(!refresh)
  }
  return (
    <div className='App'>
      <Box sx={{display: 'flex', }}>
      <TextField value={todo} onChange={(e) => setTodo(e.target.value)} type='text' label="Enter your value" variant="outlined"/>
      <Button onClick={handleAddTodo} variant='contained'>Add</Button>
      </Box>
      <Box>
      <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            Todo List with FireStore Database
          </Typography>
            <List>
              
                {
                  todoList.map((item, index) => {
                    return (
                      <ListItem key={index}>
                  <ListItemText primary={item.todo} sx={{mr: 3}}/>
                  <IconButton>
                    <DeleteIcon onClick={() => deleteTodo(item.id)}/>
                  </IconButton>
                    <IconButton>
                      <Edit onClick={() => handleUpdateTodo(item.id)}/>
                    </IconButton>
                  
                  </ListItem>
                    )
                  })
                }
            </List>
      </Box>
    </div>
  )
}

export default Dashboard