import React, { useContext } from 'react'
import "./Navbar.css"
import Box from '@mui/material/Box';
import { Input, Typography } from '@mui/material'
import { Searchcontext } from '../../context/searchcontext';
export const Navbar = () => {

  const {istext,handletext,data} = useContext(Searchcontext)

  return (

    <>
 
    <Box
      sx={{
        width: "100vw",
        height: 55,
        borderRadius:"0.6vw",
        display:"flex",
        backgroundColor:  '#64244b',
        '&:hover': {
          backgroundColor: '#561d40',
         
        },
      }}
    >
        <Typography padding= "0.8vh" fontWeight="760" color="white" fontSize="38px" variant="h3" component="h1" marginLeft="5vw" >
  Vocab
</Typography>

   <Input

   className='input'

   sx={{

    position:"fixed",
    top:"1.7vh"
    

   }}
    type="text" 

   placeholder="Search word"

   autoFocus="true"  

    value={istext} onChange={(e)=>{

    handletext(e.target.value)

   }} >

   </Input>

    </Box>
    
    </>
  )
}
