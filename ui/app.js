//adding comments in article

function display_likes(page,inc)
{
    console.log("going to fetch likes");
    var request = new XMLHttpRequest();

      //check if response status has changed
    request.onreadystatechange = function(){
         
        //check it result has been loaded
        if(request.readyState === XMLHttpRequest.DONE){
            
            console.log ("got response");
            //check if it was a success
            if (request.status === 200) {
                console.log("response success can set the value");
                var likesCount = document.getElementById("likesCount");
                likesCount.innerHTML = request.responseText;
            }
        }
    };
   
    page = page.substring(1,page.length);
    request.open('GET', 'http://sandeep69.imad.hasura-app.io/'+ page +'/likes?inc='+ inc,true);
    request.send(null);
}


function display_comments(){
    var requestList = new XMLHttpRequest();
    //get the response
             
    //check if response status has changed
    requestList.onreadystatechange = function(){
     
        //check if result has been loaded
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
                            console.log("going to call display likes");
                            display_likes(page,0);
                        }
                    }
            
    };
           
    var pageH = document.getElementById("myHeader");

    var page='';
    page=pageH.innerHTML; 
    alert("The inner html = "+page);
           
    requestList.open('GET', 'http://sandeep69.imad.hasura-app.io/'+page+'/get_comment_list',true);
    requestList.send(null);
}

$(document).ready(function() { //remember to include jquery.min.js in the html file
   
    //check if user has logged in  
    var request = new XMLHttpRequest();
    console.log("in app document ready fn");
      //check if response status has changed
    request.onreadystatechange = function(){
         
        //check it result has been loaded
        if(request.readyState === XMLHttpRequest.DONE){
            //if success - user logged in - username returned - display comment box
            if (request.status === 200) {
                var name = request.responseText;
                console.log("herer:" +name);
                
                // display enter comment box
                var commentDisplay = document.getElementById("commentDisplay");
	             if (commentDisplay !== null){
	                comment.style.display ="block";
	             } 
            }
            //once the request for user name has been processed
            console.log("finished handling comment box display");
            
            //get the list of comments by making next get request
            display_comments();

/*            
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
                        console.log("going to call display likes");
                        display_likes(page,0);
                    }
                }
            
            };
           
            var pageH = document.getElementById("myHeader");

            var page='';
            page=pageH.innerHTML; 
            alert("The inner html = "+page);
           
            requestList.open('GET', 'http://sandeep69.imad.hasura-app.io/'+page+'/get_comment_list',true);
            requestList.send(null);
 
*/ 
 
                //ends here

        }
       
    };
    
    //check if user is logged in - it returns username  
    request.open('GET', 'http://sandeep69.imad.hasura-app.io/check-login',true);
    request.send(null);

});

//insert users comment and names and get the comment list
function insert_and_display_comments(name){
    
    var requestList = new XMLHttpRequest();
    
    //check if response status has changed
    requestList.onreadystatechange = function(){
         
        //check it result has been loaded
        if(requestList.readyState === XMLHttpRequest.DONE){
            //check if it was a success - it has inserted the comment and returned a list
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
    page=pageH.innerHTML; 
    alert("The inner html = "+page);
    //send a request to comment_list - it inserts the comment and returns a list of comments           
    requestList.open('GET', 'http://sandeep69.imad.hasura-app.io/'+page+'/'+name+'/comment_list?comment='+user.value,true);
    requestList.send(null);
 }
 
 
//on clicking submit button of comment
var commentSB= document.getElementById('commentB');
commentSB.onclick = function(){
    
     //get the username
    var request = new XMLHttpRequest();

      //check if response status has changed
    request.onreadystatechange = function(){
         
        //check it result has been loaded
        if(request.readyState === XMLHttpRequest.DONE){
            if (request.status === 200) {
                var name = request.responseText;
                console.log(name);
                insert_and_display_comments(name); //send name to insert the comment and display the list of comments
                
    /*
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
 
 
 */
                //ends here
            }
        }
       
    };
    
    //send request to find user name 
    request.open('GET', 'http://sandeep69.imad.hasura-app.io/check-login',true);
    request.send(null);
  
};

var likesButton= document.getElementById('likesButton');
likesButton.onclick = function(){
    
    var pageH = document.getElementById("myHeader");
    page=pageH.innerHTML; 
    display_likes(page,1);

};

