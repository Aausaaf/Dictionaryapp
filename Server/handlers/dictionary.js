const { default: axios } = require("axios")

const { Dictionary } = require("../Database/dictionary")


const getdata = async(req,res) => {   // creating get request fuction when user request with get method this function will handle 

  try {

    let data = await Dictionary.find()

        res.status(200).send(data)

  } catch (err) {

    res.status(500).json(err)

  }
}

const postdata = async(req,res) => {  // creating post request when user request with post method this function will handle this

    let {text} = req.body
    
    const t = {

        headers :{
           
            app_id :"4c3ca3e6",
            app_key :"17bbc5487b3e228a8ade54441f5c1ae7"
        }
    }
   
   axios.get(`https://od-api.oxforddictionaries.com/api/v2/entries/en-us/${text}`,t).then((ress)=>{  
       // fetching data from end pont that is oxford dictionary api with the help of axios
        if(ress.data)
        {
             
             uploaddata(ress.data)
           
        }
        
    }).catch((err)=>{

        console.log(err)

        res.send(err)
    })

const uploaddata = async(data) => {

    console.log(data)
    
   let datas = {

      name:data.word,
      etymologies:data.results[0].lexicalEntries[0].entries[0].etymologies[0],
      shortDefinitions:data.results[0].lexicalEntries[0].entries[0].senses[0].shortDefinitions[0],
      definitions:data.results[0].lexicalEntries[0].entries[0].senses[0].definitions[0],
      phrases:data.results[0].lexicalEntries[0].phrases,
      text:(data.results[0].lexicalEntries[0].lexicalCategory.text)?data.results[0].lexicalEntries[0].lexicalCategory.text:" "

    }


    const newword = await Dictionary.create(datas) // adding data in mongodb database 

    res.status(200).send({message:"new word has Successfully added",word:newword})
}

  


   }
   
   
   const serachdata = async(req,res) => {
        let regex = new RegExp(req.params.name,'i')
     let data =    await Dictionary.find({name:regex})
     res.send(data)
   }
   
 
 




module.exports = {

    getdata,
    postdata,
    serachdata
    
}