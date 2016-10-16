
var button= document.getElementById("counter");

button.onclick = function(){
    //get the response
    var request = new XMLHttpRequest();
   
    
    //check if response status has changed
    request.onreadystatechange = function(){
         
        //check it result has been loaded
        if(request.readyState === XMLHttpRequest.DONE){
            //check if it was a success
            if (request.status === 200) {
                
                var counter = request.responseText;
                var span= document.getElementById("count");
                span.innerHTML = counter.toString(); 
            }
        }
        //make a request to get the counter 
        
    };
  
    request.open('GET', 'http://sandeep69.imad.hasura-app.io/counter',true);
    request.send(null);
    
    
    //to modify the list
    
    
    var names = ['name1','name2','name3','name4'];
    var list='';
    for(var i=0; i<names.length;i++){
        list= list+ '<li>' + names[i] + '</li>';
        alert(i);
    }
    var nameList = document.getElementById("names");
    nameList.innerHTML = list;
};