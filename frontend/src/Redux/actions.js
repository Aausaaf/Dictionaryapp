import axios from 'axios'



export const GET  = "GET"
export const POST = "POST"



 export const get  = (payload) => ({   // action return object for getting data 
  type:GET,
  payload
})

export const post  = (payload) => ({       // action return object for posting data 
    type:GET,
    payload
  })
  

 



export const getdata = () =>  (dispatch) => {     // action return function fetching data from server

    axios.get(`https://serverappes.herokuapp.com/getdata`).then((res)=>{

        //console.log(res.data)
       
         dispatch(get(res.data))

    }).catch((err)=>{

        console.log(err)

    })
}






 
export const postdata = (data) => (dispatch) => {      // action return function posting or adding data on server

    axios.post(`https://serverappes.herokuapp.com/postdata`,{

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



