import { Box, Button, Input } from '@mui/material'
import React, { useState } from 'react'
import { Typography } from '@mui/material'
import { useSelector,useDispatch } from 'react-redux'
import { postdata } from '../../Redux/actions'

const Addword = (props) => {
    const [input,setinput] = useState("") // this will handle and store  input value
   
    const dispatch = useDispatch() // this will use to dispatch action to redux reducer

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

    (input.length>0)?dispatch(postdata(input)):alert("Plsase Add word") // checking input value is empty or not if it is empty
                                                                        // than alert will call and say following message
                                                                        // if input value will be here than dispatch will call it takes two argument  
                                                                        // action and payload, with the help of this we are able to post request to server add the word  

}}>ADD
</Button>

  </Box>

   </>
   
  )
}

export default Addword