var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//connect to db
mongoose.connect('mongodb://test-bayon:123bayon@ds135399.mlab.com:35399/todo-bayon',{useNewUrlParser: true});
//new db schema
var todoSchema = new mongoose.Schema({item: String});
// new Model
var TodoModel = mongoose.model('Todo',todoSchema);
//urlencoded 
var urlencoded = bodyParser.urlencoded({extended: false});

module.exports = function(app) {
    // ALLOW CORS 
    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
      });
    // GET
    app.get('/todo',function(req,res){
        //res.send('yep you are here at app get...todo...');
        TodoModel.find({},function(err,data){
            if(err) throw err; 
            res.render('todos',{todos: data});
        });

    });
    app.get('/api/todo',function(req,res){
        //res.send('yep you are here at app get...todo...');
        TodoModel.find({},function(err,data){
            if(err) throw err; 
            //res.render('todos',{todos: data});
            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify({ todos: data }));
        });

    });
    //POST
    app.post('/todo',urlencoded, function(req,res){
        var newTodo = TodoModel(req.body).save(function(err,data){
            if(err) throw err;
                res.json(data);
        }); 
    });

    // DELETE
    app.delete('/todo/:item',function(req,res){
        TodoModel.find({item:req.params.item.replace(/\-/g," ")}).remove(function(err,data){
            if(err) throw err;
            res.json(data);
        });
    });

}

