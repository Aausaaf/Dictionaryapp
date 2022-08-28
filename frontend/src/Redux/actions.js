import axios from 'axios'



export const GET  = "GET"
export const POST = "POST"



 export const get  = (payload) => ({
  type:GET,
  payload
})

export const post  = (payload) => ({
    type:GET,
    payload
  })
  

 



export const getdata = () =>  (dispatch) => {

    axios.get(`http://localhost:8080/getdata`).then((res)=>{

        //console.log(res.data)
       
         dispatch(get(res.data))

    }).catch((err)=>{

        console.log(err)

    })
}






 
export const postdata = (data) => (dispatch) => {

    axios.post(`http://localhost:8080/postdata`,{

      text:data

    })
    .then((res)=>{

      if(res.data)
      {
          console.log(res.data)

          dispatch(getdata())

          alert(res.data.message)

         window.location.reload()
      }
      else
      {

          alert("Some Error")

      }
    }).catch((err)=>{

      console.log(err)

      alert(err.message)
      
    })
 }



