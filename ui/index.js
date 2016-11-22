//when index starts up
$(document).ready(function() { //remember to include jquery.min.js in the html file
   
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

});
