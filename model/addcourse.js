const mongo=require("mongoose");

const addcourse=mongo.Schema({
    coursetitle:{
        type:String,
        require:true
    },
    companyname:{
        type:String,
        require:true
    },
    price:{
        type:String,
        require:true
    },
    timing:{
    type:String,
    require:true
    },
  catogary:{
        type:String,
        require:true
    },
    city:{
        type:String,
        require:true
    },

    instractorname:{
        type:String,
        require:true
    },
    discription:{
        type:String,
        require:true
    },
    Requirements:{
        type:String,
        require:true
    },
    img:{
        type:String,
        require:true
    },
    accountID:{
        type:String,
        require:true
    },
    learn:{
        type:String,
        require:true
    },
    content:{
        type:String,
        require:true
    }
})
module.exports=mongo.model("addcourse",addcourse)