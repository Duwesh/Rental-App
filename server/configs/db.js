const mongoose = require("mongoose");


const CONNECTION_URL =
  "mongodb+srv://Dk123:Dk123@cluster0.6cihs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";


module.exports =  () =>{
    return mongoose.connect(CONNECTION_URL);

} 
