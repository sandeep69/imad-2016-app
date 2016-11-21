//adding comments in article

function display_likes(page)
{
    console.log("going to fetch likes");
    var request = new XMLHttpRequest();

      //check if response status has changed
    request.onreadystatechange = function(){
         
        //check it result has been loaded
        if(request.readyState === XMLHttpRequest.DONE){
            //check if it was a success
            if (request.status === 200) {
                var likesCount = document.getElementById("likesCount");
                likesCount.innerHTML = request.responseText;
            }
        }
    };
    /*
    var pageH = document.getElementById("myHeader");
    var page=pageH.innerHTML; 
    console.log("getting likes count for:"+page);
    */     
    request.open('GET', 'http://sandeep69.imad.hasura-app.io/'+page+'/likes',true);
    request.send(null);
}




$(document).ready(function() { //remember to include jquery.min.js in the html file
   
    //check if user has logged in - if yes show the commentDisplay box  
    var request = new XMLHttpRequest();

      //check if response status has changed
    request.onreadystatechange = function(){
         
        //check it result has been loaded
        if(request.readyState === XMLHttpRequest.DONE){
            //check if it was a success
            if (request.status === 200) {
                var name = request.responseText;
                console.log(name);
                
                // user logged in display enter comment box
                var commentDisplay = document.getElementById("commentDisplay");
	             if (commentDisplay !== null){
	                comment.style.display ="block";
	             } 
                
                //as user is logged in get the list of comments by making next get request
                var requestList = new XMLHttpRequest();
                //get the response
             
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
                            console.log ("article:"+page);
                            display_likes(page);
                        }
                }
                
                };
               
                var pageH = document.getElementById("myHeader");

     
                var page='';
                page=pageH.innerHTML; 
                alert("The inner html = "+page);
               
                requestList.open('GET', 'http://sandeep69.imad.hasura-app.io/'+page+'/get_comment_list',true);
                requestList.send(null);
 
 
 
                //ends here
            }
        }
       
    };
    
  
    request.open('GET', 'http://sandeep69.imad.hasura-app.io/check-login',true);
    request.send(null);

});


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
                var name = request.responseText;
                console.log(name);
                
                //as user is logged in get the list of comments by making next get request
                var requestList = new XMLHttpRequest();
                //get the response
             
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
                
                };
                var user = document.getElementById("comment");
                var pageH = document.getElementById("myHeader");

     
                var page='';
                page=pageH.innerHTML; 
                alert("The inner html = "+page);
               
                requestList.open('GET', 'http://sandeep69.imad.hasura-app.io/'+page+'/'+name+'/comment_list?comment='+user.value,true);
                requestList.send(null);
 
 
 
                //ends here
            }
        }
       
    };
    
  
    request.open('GET', 'http://sandeep69.imad.hasura-app.io/check-login',true);
    request.send(null);
  
};
