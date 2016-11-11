//blog beginning yet again

var express = require('express');
var morgan = require('morgan');
var path = require('path');
var crypto = require('crypto');
//to send json obsect as the req body in express
var bodyParser = require('body-parser');

// to connect to dbase
var Pool = require('pg').Pool;
//create a configuration
var config = {
    user:'sandeep69',
    database:'sandeep69',
    host : 'db.imad.hasura-app.io',
    port:'5432',
    password: process.env.DB_PASSWORD
};


var app = express();
app.use(morgan('combined'));
app.use(bodyParser.json()); //to use json on req body


function createTemplate(data){
var title = data.title;
var heading = data.heading;
var date = data.date;
var content = data.content;

var htmlTemplate= `<html>

    <head>
        <title> ${title}</title>
        <link rel="stylesheet" href="/ui/style.css/">
    </head>
    <body>
        
        <div class="container">
            <div>
                <a href="/" id="home"> Home</a>
                <hr/>
            </div>
            <div>
                <h2 id="myHeader"> ${heading}</h2>
            </div>
            <div>
                <h3>Date: ${date.toDateString()}</h3>
            </div>
            <div>
                ${content}
            </div>
            <p id="check">Susan</p>
            <hr/>
            <input type="text" id="comment" placeholder="Comment"></input>
            <input type="submit" value="Submit" id="commentB"></input>
            <ul id="commentList">
            </ul>
        </div>
        <script type="text/javascript" src="/ui/app.js">
        </script>
    </body>
</html>`;
return htmlTemplate;
}

//create a dbase pool globally before you make a query
var pool = new Pool(config);

app.get ('/test-db', function (req,res) {

    pool.query('SELECT * FROM test', function(err,result){ 
        if (err) {
            res.status(500).send(err.toString());
        } else {
            res.send(JSON.stringify(result.rows));
        }
    });
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/main.js', function (req, res) {
     res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

var counter=0;
app.get('/counter', function (req, res) {
    counter++;
     res.send(counter.toString());
});

var names=[];
app.get('/name_list', function (req, res) {
    var user = req.query.name;
    names.push(user);
     res.send(JSON.stringify(names));
     
});

app.get('/ui/app.js', function (req, res) {
     res.sendFile(path.join(__dirname, 'ui', 'app.js'));
});

function hash(input,salt){
    var hashed = crypto.pbkdf2Sync(input,salt,10000, 512, 'sha512');
    return (["pbkdf2Sync","10000", salt,hashed.toString('hex')].join('$'));
}

app.get('/hash/:input', function(req,res) {
    var hashedString = hash(req.params.input,'Hi-I-am-Susan');
    res.send(hashedString);
});

//function to create a new user- we use a post instead of a get for additional security
app.post ('/create-user', function(req,res){
    //get username and password from the req.body
    var username = req.body.username;
    var password = req.body.password;
    
    //generate a random salt
    var salt = crypto.RandomBytes(128).toString('hex');
    var dbString = hash(password,salt);
    
    //insert username and pw to the user database
    pool.query ('INSERT INTO "user" (username,password) VALUES($1,$2)',[username,dbString], function(err,result) {
        if (err){
            res.status(500).send(err.toString());
        } else {
            res.send("User successfully created"+ username);
        }
   });
});

//trying to insert
app.get('/insert', function (req, res) {
    var an ='article-one';
    var date = '2016-03-03';
    var comment= 'dsfasdf';
    
      pool.query("INSERT INTO comments (article, date, comment) VALUES ($1,$2,$3)",[an,date,comment], function(err,result){
      if (err) {
          res.status(500).send(err.toString());
      } else {
          
            res.send("Inserting into the database");
      
      }
  
});
});

var comments={'article-one':[], 'article-two':[], 'article-three':[]};

app.get('/:an/comment_list', function (req, res) {
    var an = req.params.an;
    var feedback = req.query.comment;
    var date = new Date();
    date = date.toDateString();
  
    pool.query("INSERT INTO comments (article, date, comment) VALUES ($1,$2,$3)", [an,date,feedback],function(err,result){
      if (err) {
          res.status(500).send(err.toString());
      } else {
            pool.query("SELECT* FROM comments WHERE article= $1", [an],function(err,result){
                if(err) {
                    res.status(500).send(err.toString());
                } else if (result.rows.length === 0){
                  res.status(404).send("Article not found");
                }
                else {
                     var CommentList = result.rows;
                     res.send(JSON.stringify(CommentList));
                }
            });
      }
    });  
    
 //   comments[an].push(feedback);
//    res.send(JSON.stringify(comments[an]));
     

});


app.get('/article/:articleName', function (req, res) {

  var articleName = req.params.articleName;    

  pool.query("SELECT * FROM article WHERE title=$1", [articleName], function(err,result){
      if (err) {
          res.status(500).send(err.toString());
      } else {
          if (result.rows.length === 0){
              res.status(404).send("Article not found");
          }
          else {
             var articleData = result.rows[0];
             res.send(createTemplate(articleData));
          }
      }
  });
  
});







var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
