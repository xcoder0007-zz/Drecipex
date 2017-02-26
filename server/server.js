 express = require('express');
 mongoose = require('mongoose')
 path = require('path');
 config = require('../webpack.config')
 webpack = require('webpack')
 webpackDevMiddleware = require('webpack-dev-middleware')
 webpackHotMiddleware = require('webpack-hot-middleware')
 app = express();
 compiler = webpack(config)
 router = express.Router();              // get an instance of the express Router
 dbConfig = require('./db')
 recipesModule = require('./modules/recipes.module')


// Connect to DB 
mongoose.connect(dbConfig.config)


app.use('/', router);
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
app.use(webpackHotMiddleware(compiler))


app.use(express.static('./dist'));

router.get('/', function (req, res) {
  res.sendFile(path.resolve('client/index.html'));

});


router.get('/recipes', function (req, res) {

recipesModule.getRecipes(function(err,recipes){
 
 if(err){throw err}

res.json(recipes)

})




});


 port = 3000;

app.listen(port, function (error) {
  if (error) throw error;
  console.log("Express server listening on port", port);
});
