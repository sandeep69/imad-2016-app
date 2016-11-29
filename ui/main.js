
//to create a login account

var menu = document.getElementById('menuTab');

menu.onclick = function(){
    
    var menulist = document.getElementById('menu');
    if (menulist.style.display === "block") {
        menulist.style.display = "none";
    } else {
        menulist.style.display = "block";
    }
    
}; 

var submitB= document.getElementById('submitButton');

submitB.onclick = function(){
    
    //get the response
    var request = new XMLHttpRequest();
   
    
    //check if response status has changed
    request.onreadystatechange = function(){
         
        //check it result has been loaded
        if(request.readyState === XMLHttpRequest.DONE){
            //check if it was a success
            if (request.status === 200) {
  
                alert ('Successfully signed up! Please Sign in with your new username and password');
                var signUp = document.getElementById("signUpBox");
	            console.log(signUp);
	            /*
	            signUp.style.display ="none";
                var signUp = document.getElementById("signUpTab");
	            signUp.style.display = "none";
	            var signOut = document.getElementById("signOutTab");
	            signOut.style.display = "block";
	            var x = document.getElementById("mp");
	            x.style.display = "none";
	            */
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
	             if (comment !== null){
	                comment.style.display ="block";
	             }     
	           alert ('Successfully logged in');
	           var signUp = document.getElementById("signUpTab");
	           signUp.style.display = "none";
	           var signOut = document.getElementById("signOutTab");
	           signOut.style.display = "block";
	           var x = document.getElementById("mp");
	           x.style.display = "none";
	           var MsignUp = document.getElementById("MsignUpTab");
	           MsignUp.style.display ="none";
	           var MsignOut = document.getElementById("MsignOutTab");
	           MsignOut.style.display ="block";
	           var menu = document.getElementById("menu");
	           menu.style.display ="none";
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

var signOutTab = document.getElementById("signOutTab");
signOutTab.onclick = function(){
    
    //get the response
    var request = new XMLHttpRequest();
   
    
    //check if response status has changed
    request.onreadystatechange = function(){
         
        //check it result has been loaded
        if(request.readyState === XMLHttpRequest.DONE){
            //check if it was a success
            if (request.status === 200) {
                
                console.log("sign Out");
	            var comment = document.getElementById("commentDisplay");
	            if (comment !== null){
	                comment.style.display ="none";
	             }     
	            alert ('Successfully logged Out');
	            var signOut = document.getElementById("signOutTab");
	            signOut.style.display = "none";
	            var signUp = document.getElementById("signUpTab");
	            signUp.style.display = "block";
	            var menu = document.getElementById("menu");
	            menu.style.display ="none";
	            var MsignUp = document.getElementById("MsignUpTab");
	            MsignUp.style.display ="block";
	            var MsignOut = document.getElementById("MsignOutTab");
	            MsignOut.style.display ="none";
	       }
            else { 
                alert(request.responseText);
            }
        }
    };
    
    request.open('GET', 'http://sandeep69.imad.hasura-app.io/logout',true);
    request.send(null);
 
};

var MsignOutTab = document.getElementById("MsignOutTab");
MsignOutTab.onclick = function(){
    
    //get the response
    var request = new XMLHttpRequest();
   
    
    //check if response status has changed
    request.onreadystatechange = function(){
         
        //check it result has been loaded
        if(request.readyState === XMLHttpRequest.DONE){
            //check if it was a success
            if (request.status === 200) {
                
                console.log("sign Out");
	            var comment = document.getElementById("commentDisplay");
	            if (comment !== null){
	                comment.style.display ="none";
	             }     
	            alert ('Successfully logged Out');
	            var signOut = document.getElementById("signOutTab");
	            signOut.style.display = "none";
	            var signUp = document.getElementById("signUpTab");
	            signUp.style.display = "block";
	            var menu = document.getElementById("menu");
	            menu.style.display ="none";
	            var MsignUp = document.getElementById("MsignUpTab");
	            MsignUp.style.display ="block";
	            var MsignOut = document.getElementById("MsignOutTab");
	            MsignOut.style.display ="none";
            }
            else { 
                alert(request.responseText);
            }
        }
    };
    
    request.open('GET', 'http://sandeep69.imad.hasura-app.io/logout',true);
    request.send(null);
 
};



/* signup tab - open and close*/
var signUpTab = document.getElementById("signUpTab");
signUpTab.onclick = function(){
    var x = document.getElementById("mp");
	x.style.display = "block";
	var signUp = document.getElementById("signUpBox");
	console.log(signUp);
	signUp.style.display ="block";

    	console.log(signUp);
};

var MsignUpTab = document.getElementById("MsignUpTab");
MsignUpTab.onclick = function(){
   
    var x = document.getElementById("mp");
	x.style.display = "block";
	var signUp = document.getElementById("signUpBox");
	console.log(signUp);
    signUp.style.display ="block"; 
	console.log(signUp);
};


closeButton.onclick = function(){
    
   	var signUp = document.getElementById("signUpBox");
	console.log(signUp);
	signUp.style.display ="none";
    var x = document.getElementById("mp");
	x.style.display = "none";
   	console.log(signUp);
   	var menu = document.getElementById("menu");
	menu.style.display ="none";
};

