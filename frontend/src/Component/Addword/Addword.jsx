import { Box, Button, Input } from '@mui/material'
import React, { useState } from 'react'
import { Typography } from '@mui/material'
import { useSelector,useDispatch } from 'react-redux'
import { postdata } from '../../Redux/actions'

const Addword = (props) => {
    const [input,setinput] = useState("")
   
    const dispatch = useDispatch()

  return (

   <>

  <Box sx={{

    width:"40vw",
    height:"30vh",
    backgroundColor:"whitesmoke",
    position:"fixed",
    top:"27vh",
    left:"25%",
    borderRadius:"0.5vw"

  }}>
        
        <Typography padding= "2.5vh" fontWeight="760"  fontSize="1.8vw" variant="h5" component="h1" marginLeft="3vw" marginTop="1vh" >
   Add to Dictionary
</Typography>
<Input sx={{

    marginLeft:"4vw",
    width:"24vw"
}}
 placeholder='Add Word' type="text"

value={input}

onChange={(e)=>{

    setinput(e.target.value)

}}
></Input>

<br/>

<Button

sx={{

    color:"#64244b",
    marginLeft:"16vw",
    marginTop:"5vh"

}}
 onClick={()=>{

     props.handleadd(false)

}}>CANCEL</Button>

<Button

sx={{
    color:"#64244b",
    marginLeft:"3vw",
    marginTop:"5vh"

}}


onClick={()=>{

    (input.length>0)?dispatch(postdata(input)):alert("Plsase Add word")

}}>ADD
</Button>

  </Box>

   </>
   
  )
}

export default Addword