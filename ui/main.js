


    
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
 /*               var names = request.responseText;
                names = JSON.parse(names);
                var list='';
                for(var i=0; i<names.length;i++){
                    list= list+ '<li>' + names[i] + '</li>';
                }
                alert(list);
                var nameList = document.getElementById("names");
                nameList.innerHTML = list;
*/
            }
            else { 
                alert(request.responseText);
            }
        }
        //make a request to get the counter 
        
 
   
    
    };
    
     var username = document.getElementById("username").value;
     var password = document.getElementById("password").value;
     console.log (username);
     console.log (password);
    request.open('POST', 'http://sandeep69.imad.hasura-app.io/create-user',true);
    request.setRequestHeader('Content-Type','application/json');
    request.send(JSON.stringify({username:username,password:password}));
 
};


