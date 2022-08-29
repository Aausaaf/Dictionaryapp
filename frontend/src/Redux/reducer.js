import { GET, POST } from "./actions";


export const reducer = (store=[],{type,payload}) => {     // when action dispatch from component reducer call and according to
                                                          //  action type with the help of switch case we have case in case we do logical operation and we updating store data
    switch(type){
        case GET:{
            return {
                store : [...payload]
            }
        }
        case POST: {
            return {
                store:[...payload]
            }
        }
       
        default:{
            return{
                store
            }
        }
    }
}