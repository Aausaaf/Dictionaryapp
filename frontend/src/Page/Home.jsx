import React, { useState } from 'react'
import { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import Addword from '../Component/Addword/Addword'
import Wordbody from '../Component/Wordbody/Wordbody'
import Wordlist from '../Component/Wordlist/Wordlist'
import { getdata, postdata } from '../Redux/actions'

const Home = () => {
  const [displaywordbody,setdisplayword] = useState(false) // handle wordbody display or hide

  const [displayaddbody,setdisplayadd] = useState(false)  // handle wordadd display or hide

  const [name,setname] = useState("")

    const {store} = useSelector((store)=>store)  // get store data from redux store

    const dispatch = useDispatch()
  
    const handledisplay = (t) => {

      setdisplayword(t)

    }
    const handleadd = (t) => {

      setdisplayadd(t)

    }

    const handlename = (t) => {

      setname(t)

    }

    useEffect(()=>{

      dispatch(getdata())



    },[])
  return (

    <div>
     {

      (displaywordbody)?<Wordbody  handledisplay={handledisplay} name={name}></Wordbody>: <Wordlist displaywordbody={displaywordbody} handledisplay={handledisplay} handlename={handlename} handleadd={handleadd} ></Wordlist>
       // conditional rendring if name value is false than wordlist component will render or visible
       // if it is true than wordbody will visible
    }
    {

      (displayaddbody)?<Addword handleadd={handleadd}></Addword>:""
      // if displayaddbody will true Addword will render or visible on display
      // if it is false it will not visible or render on display
    
    }

    </div>

  )
  
}

export default Home