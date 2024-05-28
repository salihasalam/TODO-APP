import React from 'react'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
const Todo = ({deletetask,iscompleted,completed,index,id,taskname,editTask}) => {
  return (
    <div className="flex gap-2 mt-2 text-white">
<h1 className={`
${completed?"line-through text-green-600 ":"text-white "}
`} >
    <span>{index+1}.</span>{taskname}
</h1>
<DeleteOutlineOutlinedIcon onClick={()=>{deletetask(id)}}/>
<CheckCircleOutlineOutlinedIcon onClick={()=>{iscompleted(id)}}/>
<EditOutlinedIcon onClick={()=>{editTask(id)}}/>
    </div>
  )
}

export default Todo
