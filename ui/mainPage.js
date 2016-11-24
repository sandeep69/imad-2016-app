$('.container').css('min-height', '100%');
function check_tabs() {//check if user logged in- put signup/signOut
   
    //check if user has logged in  
    var request = new XMLHttpRequest();
    
    request.onreadystatechange = function(){
         
        //check it result has been loaded
        if(request.readyState === XMLHttpRequest.DONE){
            //if success - user logged in - username returned - display comment box
            if (request.status === 200) {
                //already signed in change the signup/register 
	           var signUp = document.getElementById("signUpTab");
	           signUp.style.display = "none";
	           var signOut = document.getElementById("signOutTab");
	           signOut.style.display = "block";
	       }
	           
        }
       
    };
    
    //check if user is logged in - it returns username  
    request.open('GET', 'http://sandeep69.imad.hasura-app.io/check-login',true);
    request.send(null);

}



//to load available list of articles from Data base
// load all the articles names

$(document).ready(function(){
   var request = new XMLHttpRequest();


    //check if response status has changed
    request.onreadystatechange = function(){
         
        //check it result has been loaded
        if(request.readyState === XMLHttpRequest.DONE){
            //check if it was a success
            if (request.status === 200) {
               
                var articleList = request.responseText;
                articleList = JSON.parse(articleList);
                var list='';
                for(var i=0; i<articleList.length;i++){
                    var x =articleList[i].content;
                    list= list+ '<li class="list"> <p><p><span class="listHeading">'+ articleList[i].heading + '</span><span class ="likes">Likes: ' +articleList[i].likes + '</span></p>'+ x.substring(3,170)+ '....&emsp;&emsp;&emsp;<a  class = "listHyp" href="/article/'+articleList[i].heading + '"> Read more....</a></p></li>';
                    list=list+'<li class="hiddenlist"> </li>';
                }
                console.log(list);
                var nameList = document.getElementById("articleList");
                nameList.innerHTML = list;
                console.log( nameList.innerHTML); 
              
            }
            check_tabs(); 
        }
        
    };
     
    
    request.open('GET','http://sandeep69.imad.hasura-app.io/listOfArticles',true);
    request.send(null);

});
