import {useState,useEffect } from "react";
import Todo from "./components/Todo";

const localdata=()=>{
  let list=localStorage.getItem("data")
  if(list)
    {
      return JSON.parse(list)
    }
    else{
      return[]
    }
}

function App() {

  const [newtask,setnewtask]=useState(" ")
const [todolist,settodolist]=useState(localdata())

  const onchange=(event)=>{
setnewtask(event.target.value)
  }
  const addtask=(e)=>{
e.preventDefault()
if(newtask===" ")
  {
    alert("ENTER ANY TASK")
  }
else
{
let task={
  id:todolist.length===0?1:todolist[todolist.length-1].id+1,
  taskname:newtask,
  completed:false
}
let newtodolist=[...todolist,task]
settodolist(newtodolist)
setnewtask(" ")
  }
}
const deletetask=(id)=>{
let newtodolist=todolist.filter((item)=>{
  return item.id!==id           
})
settodolist(newtodolist)
}
const iscompleted=(id)=>{
  settodolist(todolist.map((item)=>{
    if(item.id===id)
      {
        return{...item,completed:true}
      }
      else
      {
        return item
      }
  }))
}
const editTask=(id)=>{
let changetask=todolist.find((item)=>{
return item.id===id
})
let newtodolist=todolist.filter((item)=>{
  return item.id!==id
})
setnewtask(changetask.taskname)
settodolist(newtodolist)
}

useEffect(()=>{
  localStorage.setItem("data",JSON.stringify(todolist))
  },[todolist])

  return (
    <div className="text-2xl text-blue-900 bg-black text-white w-full min-h-screen flex flex-col items-center justify-center gap-4">
    <form className="flex gap-2">
   <input type="text" placeholder=" enter your task"className="text-black border-none outline-none" onChange={onchange} value={newtask}/>
   <button onClick={addtask} className="bg-yellow-300 px-2 text-black rounded-xl">ADD</button>
   </form>
<div>
  {
    todolist.map((item,index)=>{
      return(
        <Todo
        deletetask={deletetask}
        index={index}
        id={item.id}
        taskname={item.taskname}
        iscompleted={iscompleted}
        completed={item.completed}
        editTask={editTask}
        key={item.id}
        />
      )
    })
  }
</div>


    </div>
  );
}

export default App;


