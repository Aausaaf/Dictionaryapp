import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'
import { useSelector,useDispatch } from 'react-redux'

export const  Searchcontext = createContext() 

export function Searchcontexts({children}){

  const [istext,settext] = useState("")
  const {store} = useSelector((store)=>store)
  const [data,setdata] = useState(store)

  function handletext(t)
  {

      settext(t)

    let datas =   store.filter((ele)=>{

        return ele.name.includes(t)

      })

      setdata(datas)
  }
  return (<>

   <Searchcontext.Provider value={{istext,handletext,data}}>

       {children}

   </Searchcontext.Provider>
   
  </>)
}

