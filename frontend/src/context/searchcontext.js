import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import axios from 'axios'
export const  Searchcontext = createContext() 

export function Searchcontexts({children}){

  const [istext,settext] = useState("") 
  const {store} = useSelector((store)=>store)
  const [data,setdata] = useState(store)

  function handletext(t)
  {

      settext(t)
      axios.get(`http://localhost:8080/search/${t}`).then((res)=>{
        if(res.data)
        {
          setdata(res.data)
        }
      })
      if(data.length == 0)
      {
        setdata(store)
      }

    // let datas =   store.filter((ele)=>{
 
    //     return ele.name.includes(t)     // filter store data according to search input

    //   })

    //  setdata(datas)
  }
  return (<>

   <Searchcontext.Provider value={{istext,handletext,data}}>

       {children}

   </Searchcontext.Provider>
   
  </>)
}

