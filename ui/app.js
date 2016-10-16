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
     var pageH = document.getElementById("check");
     pageH.innerHTML = 'NEW';
     alert(pageH.value);
     var page;
     if (pageH.value === 'article one') page='article-one';
     else if(pageH.value === 'article two') page='article-two';
     else if(pageH.value === 'article three') page='article-three';
    alert(page);
    request.open('GET', 'http://sandeep69.imad.hasura-app.io/'+page+'/comment_list?comment='+user.value,true);
    request.send(null);
 
};
