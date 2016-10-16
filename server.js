var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var article = {
    'article-one': {
                    title:"Article One - Susan",
                    heading:"Article One",
                    date:"24 September 2016",
                    content:`<p>This is the first article. I am so excited. This is pretty cool. This is the first article. I am so excited. This is pretty cool. This is the first article. I am so excited. This is pretty cool. This is the first article. I am so excited. This is pretty cool. This is the first article. I am so excited. This is pretty cool. This is the first article. I am so excited. This is pretty cool</p>
                                <p>This is the first article. I am so excited. This is pretty cool. This is the first article. I am so excited. This is pretty cool. This is the first article. I am so excited. This is pretty cool. This is the first article. I am so excited. This is pretty cool. This is the first article. I am so excited. This is pretty cool. This is the first article. I am so excited. This is pretty cool</p>
                                <p>This is the first article. I am so excited. This is pretty cool. This is the first article. I am so excited. This is pretty cool. This is the first article. I am so excited. This is pretty cool. This is the first article. I am so excited. This is pretty cool. This is the first article. I am so excited. This is pretty cool. This is the first article. I am so excited. This is pretty cool</p>`
                    
                },
    'article-two': {
                    title:"Article two - Susan",
                    heading:"Article two",
                    date:"24 September 2016",
                    content:`<p>This is the second article. I am so excited. This is pretty cool. This is the second article. I am so excited. This is pretty cool. This is the second article. I am so excited. This is pretty cool. This is the first article. I am so excited. This is pretty cool. This is the first article. I am so excited. This is pretty cool. This is the second article. I am so excited. This is pretty cool</p>
                                <p>This is the second article. I am so excited. This is pretty cool. This is the second article. I am so excited. This is pretty cool. This is the first article. I am so excited. This is pretty cool. This is the second article. I am so excited. This is pretty cool. This is the first article. I am so excited. This is pretty cool. This is the second article. I am so excited. This is pretty cool</p>
                                <p>This is the second article. I am so excited. This is pretty cool. This is the first article. I am so excited. This is pretty cool. This is the second article. I am so excited. This is pretty cool. This is the second article. I am so excited. This is pretty cool. This is the second article. I am so excited. This is pretty cool. This is the second article. I am so excited. This is pretty cool</p>`
                },
    'article-three': {
            title:"Article three - Susan",
                    heading:"Article three",
                    date:"24 September 2016",
                    content:`<p>This is the third article. I am so excited. This is pretty cool. This is the third article. I am so excited. This is pretty cool. This is the third article. I am so excited. This is pretty cool. This is the first article. I am so excited. This is pretty cool. This is the third article. I am so excited. This is pretty cool. This is the third article. I am so excited. This is pretty cool</p>`
                },
    };

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
                <a href="/"> Home</a>
                <hr/>
            </div>
            <div>
                <h2> ${heading}</h2>
            </div>
            <div>
                <h3>Date: ${date}</h3>
            </div>
            <div>
                ${content}
            </div>
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

var comments=[];
app.get('article-one/comment_list', function (req, res) {
    alert("received comment request");
    var feedback = req.query.comment;
    names.push(feedback);
     res.send(JSON.stringify(comments));
     
});

app.get('/:articleName', function (req, res) {
  var articleName = req.params.articleName;    
  res.send(createTemplate(article[articleName]));
});







var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
