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
     var pageH = document.getElementById("myHeader");

     
     var page='';
    page=pageH.innerHTML; 
    alert(pageH.innerHTML);
    
    for(var i=0;i<page.length;i++){
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
    if (page === "Article-two")
    alert("equal");
     if (pageH.innerHTML === 'Article one') {
         page='article-one';
     }
     

    request.open('GET', 'http://sandeep69.imad.hasura-app.io/'+page+'/comment_list?comment='+user.value,true);
    request.send(null);
 
};
