import React, { useState } from 'react'
import { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import Addword from '../Component/Addword/Addword'
import Wordbody from '../Component/Wordbody/Wordbody'
import Wordlist from '../Component/Wordlist/Wordlist'
import { getdata, postdata } from '../Redux/actions'

const Home = () => {
  const [displaywordbody,setdisplayword] = useState(false)

  const [displayaddbody,setdisplayadd] = useState(false)

  const [name,setname] = useState("")

    const {store} = useSelector((store)=>store)

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
    
    }
    {

      (displayaddbody)?<Addword handleadd={handleadd}></Addword>:""
    
    }

    </div>

  )
  
}

export default Home