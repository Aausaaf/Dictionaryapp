import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { Typography } from '@mui/material'
import Box from '@mui/material/Box';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import { useContext } from 'react';
import { Searchcontext } from '../../context/searchcontext';

const Wordlist = (props) => {

    const {store} = useSelector((store)=>store)

    const dispatch = useDispatch()

    const {data} = useContext(Searchcontext)

    const datas= (data.length==0)?store:data

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
        borderBottomLeftRadius:"0.8vw",
        borderBottomRightRadius:"0.8vw"
        
      }}
     
      >

    <Typography padding= "2.5vh" fontWeight="760"  fontSize="25" variant="h5" component="h1" marginLeft="4vw" >

  Word List

</Typography>
  

   <Box height="70vh" className='sch'>
       
   {
        datas.map((ele)=>{

            return <Box

            key={ele._id}

                sx={{

                    width:"97vw",
                    minHeight: "14vh",
                    backgroundColor:   'white',
                    border:"0.1vh solid #d4dde2" ,
                    borderRadius:"0.4vw",
                    marginLeft:"1vw",
                    marginBottom:"0.6vh"

                  }}
                  onClick={()=>{

                    props.handlename(ele)
                    props.handledisplay(true)
                    props.handleadd(false)
                    
                  }}
                  >

                   <Typography width="90%" padding= "2vh" fontWeight="545"  fontSize="25px" variant="h5" component="h1" marginLeft="3vw" >
             
              {ele.name}

            </Typography>

            <Typography  width="90%"  fontWeight="490"  fontSize="19px" variant="p" component="p" marginLeft="4.2vw" marginTop="-1.4vh" >
            
             ({ele.text}) {ele.shortDefinitions}

            </Typography>

               </Box>
        })
    }
     <Fab

     sx={{

        position:"Fixed",
        top:"85vh",
        right:"3vw",
        backgroundColor:"#64244b",
        '&:hover': {
            backgroundColor: '#561d40',
           
          }

     }} 
     
     onClick={()=>{

        props.handleadd(true)

        
     }}

      color="primary" aria-label="add">

        <AddIcon />

      </Fab>

   </Box>

    </Box>

    </>
  )
}

export default Wordlist