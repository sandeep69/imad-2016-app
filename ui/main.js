
var button= document.getElementById("counter");

button.onclick = function(){
    //get the response
    var request = new XMLHttpRequest();
    alert("got reques");
    
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
        request.open('GET', 'http://sandeep69.imad.hasura-app.io/counter',true);
        request.send(null);
    };
    
};