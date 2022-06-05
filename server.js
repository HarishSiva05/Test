//Test Server 
const express =  require("express");

const app = express();

app.get("/", function(request, response){
    response.send("<h2>Hello</h2>");
});

app.listen(3000, function(){
    console.log("Server started at port 3000");
});