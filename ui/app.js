//adding comments in article


var commentSB= document.getElementById('commentB');
commentSB.onclick = function(){
    //get the response
    var request = new XMLHttpRequest();


    //check if response status has changed
    request.onreadystatechange = function(){
         
        //check it result has been loaded
        if(request.readyState === XMLHttpRequest.DONE){
            //check if it was a success
            if (request.status === 200) {
                
                var comments = request.responseText;
                 console.log(comments);
                comments = JSON.parse(comments);
               
                var list='';
                for(var i=0; i<comments.length;i++){
                    list= list+ '<li> <p>' + comments[i].comments.date +'</p><p>'+ comments[i].comments.comment + '</p></li>';
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
    
    request.open('GET', 'http://sandeep69.imad.hasura-app.io/'+page+'/comment_list?comment='+user.value,true);
    request.send(null);
 
};
