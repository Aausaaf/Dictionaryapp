import { Box, Button } from '@mui/material'
import { borderRadius } from '@mui/system'
import { Typography } from '@mui/material'
import React from 'react'

const Wordbody = (props) => {

  return (

    <>

    <Box

    className='sch'

     sx={{

        width: "100%",
        height: "91vh",
        backgroundColor:  'white',
        borderRadius:"1.3vw",
        overflow:"scroll",
        borderBottomLeftRadius:"1vw",
        borderBottomRightRadius:"1vw"

      }}>

       <Button

       sx={{
        fontSize:"36px",
        backgroundColor:"white",
        color:"#181012",
        borderRadius:"1vw",
        marginLeft:"86.5%",
        marginRight:"0vw",
       
        
       }}

       onClick={()=>{

        props.handledisplay(false) // hide wordbody component when user click on ×

      }}

       >×</Button>
            
       <Typography color="#21191b"  fontWeight="760"  fontSize="30px" variant="h5" component="h1" marginLeft="4vw" marginTop="-3vh" >
  Resourse
</Typography>
<Typography color="#747a7f"  fontWeight="500"  fontSize="20px" variant="h5" component="h1" marginLeft="4vw" marginTop="2vh" >
 {props.name.name}
</Typography>
<Typography color="#747a7f"  fontWeight="500"  fontSize="20px" variant="h5" component="h1" marginLeft="4vw" marginTop="1.5vh" >
 {props.name.etymologies}
</Typography>
<Typography color="#21191b"  fontWeight="760"  fontSize="24px" variant="h5" component="h1" marginLeft="4vw" marginTop="5vh" >
  Short Definition : 
</Typography>
<Typography color="#2b2426"  fontWeight="500"  fontSize="20px" variant="h5" component="h1" marginLeft="4vw" marginTop="1vh" >
{props.name.shortDefinitions}
</Typography>
<Typography color="#21191b"  fontWeight="760"  fontSize="24px" variant="h5" component="h1" marginLeft="4vw" marginTop="5vh" >
  Definition : 
</Typography>
<Typography color="#2b2426"  fontWeight="500"  fontSize="20px" variant="h5" component="h1" marginLeft="4vw" marginTop="1vh" >
{props.name.definitions}
</Typography>

<Typography color="#21191b"  fontWeight="760"  fontSize="24px" variant="h5" component="h1" marginLeft="4vw" marginTop="5vh" >
  Phrases : 
</Typography>
  {

    props.name.phrases.map((ele)=>{

        return <Typography type={ele.id} color="#2b2426"  fontWeight="500"  fontSize="20px" variant="h5" component="h1" marginLeft="4vw" marginTop="1vh" >
       
        {ele.text}

        </Typography>
    })
 
 }

        </Box>
    </>
  )
}

export default Wordbody