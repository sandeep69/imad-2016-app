
//to create a login account
    
var submitB= document.getElementById('submitButton');

submitB.onclick = function(){
    
    alert ('submit clicked');
    //get the response
    var request = new XMLHttpRequest();
   
    
    //check if response status has changed
    request.onreadystatechange = function(){
         
        //check it result has been loaded
        if(request.readyState === XMLHttpRequest.DONE){
            //check if it was a success
            if (request.status === 200) {
  
                alert ('Successfully signed up');
                var signUp = document.getElementById("signUpBox");
	            console.log(signUp);
	            signUp.style.display ="none";

            }
            else { 
                alert(request.responseText);
            }
        }
    };
    
     var username = document.getElementById("username").value;
     var password = document.getElementById("password").value;
     console.log (username);
     console.log (password);
    request.open('POST', 'http://sandeep69.imad.hasura-app.io/create-user',true);
    request.setRequestHeader('Content-Type','application/json');
    request.send(JSON.stringify({username:username,password:password}));
 
};


// to login
var submitB= document.getElementById('logsubmitButton');

submitB.onclick = function(){
    
    alert ('submit clicked');
    //get the response
    var request = new XMLHttpRequest();
   
    
    //check if response status has changed
    request.onreadystatechange = function(){
         
        //check it result has been loaded
        if(request.readyState === XMLHttpRequest.DONE){
            //check if it was a success
            if (request.status === 200) {
                
                var signUp = document.getElementById("signUpBox");
	            signUp.style.display ="none";
	            console.log(signUp);
	             var comment = document.getElementById("commentDisplay");
	            comment.style.display ="block";
	           alert ('Successfully logged in');
            }
            else { 
                alert(request.responseText);
            }
        }
    };
    
     var username = document.getElementById("username").value;
     var password = document.getElementById("password").value;
     console.log (username);
     console.log (password);
    request.open('POST', 'http://sandeep69.imad.hasura-app.io/login',true);
    request.setRequestHeader('Content-Type','application/json');
    request.send(JSON.stringify({username:username,password:password}));
 
};

/* signup tab - open and close*/
signUpTab.onclick = function(){
    
    alert ('signup clicked');
	var signUp = document.getElementById("signUpBox");
	console.log(signUp);
	signUp.style.display ="block";

    	console.log(signUp);
};
closeButton.onclick = function(){
    
    alert("close clicked");
	var signUp = document.getElementById("signUpBox");
	console.log(signUp);
	signUp.style.display ="none";

    	console.log(signUp);
};

