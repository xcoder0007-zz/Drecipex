 mongoose = require('mongoose')
 Schema = mongoose.Schema,

   // recipes Schema 

    recipesSchema = new Schema({

       title:{
           type: String,
           required : true

       },

       Ingredients:{
           type : String,
           required : true
       },
       Directions:{
           type:String,
           required: true
       }

   })

 recipes = module.exports = mongoose.model('recipes',recipesSchema)


// getRecipes 
module.exports.getRecipes = function(callback,limit){

recipes.find(callback).limit(limit)
 

}