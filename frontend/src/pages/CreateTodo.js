import React from 'react'

import { useState } from 'react'

import { useNavigate } from 'react-router-dom'

import axios from "axios"

export const CreateTodo = () => {
    const [title,setTitle] =useState("")

    const navigate = useNavigate()


    const handleSubmit = async (e) =>{
        e.preventDefault()
        const body ={
          title:title
        }
        const resp = await axios.post("/createTodo",body)
        console.log(resp)
        navigate("/getalltodos")
        setTitle("")
    }


  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
            <button>Add Todo</button>
        </form>
    </div>
  )
}
