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
                
                var comments = request.responseText;
                comments = JSON.parse(comments);
                var list='';
                for(var i=0; i<comments.length;i++){
                    list= list+ '<li> <p>' + comments[i].date +'</p><p>'+ comments[i].comment + '</p></li>';
                }
                console.log(list);
                var nameList = document.getElementById("commentList");
                nameList.innerHTML = list;
                console.log ("inserted comment");
            }
        }
        //make a request to get the counter 
        
 
   
    
    };
     var user = document.getElementById("comment");
     var pageH = document.getElementById("myHeader");

     
     var page='';
    page=pageH.innerHTML; 
    alert("The inner html = "+page);
    
    //str1.localeCompare(str2);
    
    
   /* for(var i=0;i<page.length;i++){
        if (page[i]==='w') {
         alert("article2 detected");
         page='article-two';
        }
        else if(page[i] === 'n') {
         alert("article1 detected");
         page='article-one';
     }
     else if(page[i] === 'h') {
          alert("article3 detected");
         page='article-three';
     }
    }
    */

    request.open('GET', 'http://sandeep69.imad.hasura-app.io/'+page+'/comment_list?comment='+user.value,true);
    request.send(null);
 
};
