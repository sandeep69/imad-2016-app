var express = require('express');
var morgan = require('morgan');
var path = require('path');

//to connect to the data base
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

//create dbase pool globally before a query is made
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

var comments={'article-one':[], 'article-two':[], 'article-three':[]};
app.get('/:an/comment_list', function (req, res) {
    var an = req.params.an;
    var feedback = req.query.comment;
    comments[an].push(feedback);
     res.send(JSON.stringify(comments[an]));
     
});

app.get('/article/:articleName', function (req, res) {

  var articleName = req.params.articleName;    

  pool.query("SELECT * FROM article WHERE title='" + articleName +"'", function(err,result){
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
