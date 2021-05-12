const express=require("express");
const app=express();
const Bodyparser=require("body-parser");
app.listen("5000",function(request,response)
{
  console.log("Server started on port 5000");
})
app.use(Bodyparser.urlencoded(
  {
    extended:true
  }
)
);
app.get("/",function(request,response)
{
response.sendFile(__dirname+"/bmiCalculator.html");


});
app.post("/",function(request,response){
 var weight=Number(request.body.num1);
 var height=Number(request.body.num2);
 var result=weight/(height*height);
response.send("the BMI calculated is "+result);
});
