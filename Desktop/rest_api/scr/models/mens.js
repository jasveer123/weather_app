const mongooose = require("mongoose")

const reportschema= new mongooose.Schema({
    "reportDetails":{
    userID: {
        type:String
    },
    marketID:{
        type: String
    },
    marketName: {
        type:String
    },
    cmdtyID:{
        type : String
    } ,
    marketType: {
        type: String,
    },
    cmdtyName:{
        type: String,
    } ,
    priceUnit:{
        type: String,
    } ,
    convFctr:{
        type: Number,    
    } ,
    price: {
        type: Number,

    },
}


})

const MenRanking = new mongooose.model("MenRanking",reportschema)

module.exports = MenRanking;