import { useState } from "react"

import axios from "axios"


export const AllTodos = async () => {

  const [user,setUser] = useState([])

  const resp = await axios.get("/getAllTodos")

  console.log(resp.data)

  if(resp.data.user.length >0){
    setUser(resp)
  }

  console.log(user)


  return (
    <div>
      <input type="text"/>
      <button>Add Task</button>
    </div>
  )
}
