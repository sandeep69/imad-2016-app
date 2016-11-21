//adding comments in article

/*
$(document).ready(function() {
    // load existing comments 
    //check if user has logged in - if yes show the commentDisplay box
    //diplay the comment list from dbase
});
*/

function getUserName (){

  var request = new XMLHttpRequest();

var name = '';
    //check if response status has changed
    request.onreadystatechange = function(){
         
        //check it result has been loaded
        if(request.readyState === XMLHttpRequest.DONE){
            //check if it was a success
            if (request.status === 200) {
                console.log("second");
                console.log(request.responseText);
                return request.responseText;
            }
        }
       
    };
    
  
    request.open('GET', 'http://sandeep69.imad.hasura-app.io/check-login',true);
    request.send(null);
    
 
}


var commentSB= document.getElementById('commentB');
commentSB.onclick = function(){
    //check if user logged in. If so get the username
    var request = new XMLHttpRequest();

      //check if response status has changed
    request.onreadystatechange = function(){
         
        //check it result has been loaded
        if(request.readyState === XMLHttpRequest.DONE){
            //check if it was a success
            if (request.status === 200) {
                console.log("first");
                console.log(request.responseText);
                var name = request.responseText;
            }
        }
       
    };
    
  
    request.open('GET', 'http://sandeep69.imad.hasura-app.io/check-login',true);
    request.send(null);
    
    var requestList = new XMLHttpRequest();
    //get the response
  
    
    console.log ("second");
    console.log(username);

    //check if response status has changed
    requestList.onreadystatechange = function(){
         
        //check it result has been loaded
        if(requestList.readyState === XMLHttpRequest.DONE){
            //check if it was a success
            if (requestList.status === 200) {
                
                var comments = requestList.responseText;
                 console.log(comments);
                comments = JSON.parse(comments);
               
                var list='';
                for(var i=0; i<comments.length;i++){
                    console.log (comments[i].user-name);
                    list= list+ '<li class= "indComment"> <p><span class ="bigBold">' + comments[i].name + '</span><span class ="listHyp">' +comments[i].date +'</span></p><p>'+ comments[i].comment + '</p></li>';
                     list=list+'<li class="hiddenlist"> </li>';
                }
              
                var nameList = document.getElementById("commentList");
                nameList.innerHTML = list;
            }
        }
        //make a request to get the counter 
        
 
    };
     var user = document.getElementById("comment");
     var pageH = document.getElementById("myHeader");

     
     var page='';
    page=pageH.innerHTML; 
    alert("The inner html = "+page);
    //get the user name and send it too
     console.log ("third");
    console.log(username);
    
  
    requestList.open('GET', 'http://sandeep69.imad.hasura-app.io/'+page+'/comment_list?comment='+user.value,true);
    requestList.send(null);
 
};
