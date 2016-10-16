
var button= document.getElementById("counter");

button.onclick = function(){
    //get the response
    var request = new XMLHttpRequest();
   
    
    //check if response status has changed
    request.onreadystatechange = function(){
         
        //check it result has been loaded
        if(request.readyState === XMLHttpRequest.DONE){
            //check if it was a success
            if (request.status === 200) {
                
                var counter = request.responseText;
                var span= document.getElementById("count");
                span.innerHTML = counter.toString(); 
            }
        }
        //make a request to get the counter 
        
    };
  
    request.open('GET', 'http://sandeep69.imad.hasura-app.io/counter',true);
    request.send(null);
};    
    
//to modify the list
    
var submitB= document.getElementById('submitButton');

submitB.onclick = function(){
    //get the response
    var request = new XMLHttpRequest();
   
    
    //check if response status has changed
    request.onreadystatechange = function(){
         
        //check it result has been loaded
        if(request.readyState === XMLHttpRequest.DONE){
            //check if it was a success
            if (request.status === 200) {
                
                var names = request.responseText;
                names = JSON.parse(names);
                var list='';
                for(var i=0; i<names.length;i++){
                    list= list+ '<li>' + names[i] + '</li>';
                }
                alert(list);
                var nameList = document.getElementById("names");
                nameList.innerHTML = list;
            }
        }
        //make a request to get the counter 
        
 
   
    
    };
     var user = document.getElementById("name");
    request.open('GET', 'http://sandeep69.imad.hasura-app.io/name_list?name='+user.value,true);
    request.send(null);
 
};


//adding comments in article


var commentSB= document.getElementById('commentB');
    alert("submit clicked");
commentSB.onclick = function(){
    //get the response
    var request = new XMLHttpRequest();
   
    alert("submit clicked");
    
    //check if response status has changed
    request.onreadystatechange = function(){
         
        //check it result has been loaded
        if(request.readyState === XMLHttpRequest.DONE){
            //check if it was a success
            if (request.status === 200) {
                
                var names = request.responseText;
                names = JSON.parse(names);
                var list='';
                for(var i=0; i<names.length;i++){
                    list= list+ '<li>' + names[i] + '</li>';
                }
                alert(list);
                var nameList = document.getElementById("commentList");
                nameList.innerHTML = list;
            }
        }
        //make a request to get the counter 
        
 
   
    
    };
     var user = document.getElementById("comment");
    request.open('GET', 'http://sandeep69.imad.hasura-app.io/article-one/comment_list?comment='+user.value,true);
    request.send(null);
 
};
