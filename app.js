

// const http=require('http');

const express=require('express');

const app=express();

//use allow as to add new middleware function
app.use((req,res,next)=>{
    console.log('In the middleware')
    next();  //Allows the request to continue to the next middleware in line
}); 

app.use((req,res,next)=>{
    console.log('In another middleware');
    res.send('<h1>Hello from express</h1>');
    // res.send('Hello from express with normal text');
    // res.send({key1:'value'});
});  

// const server=http.createServer(app);

// server.listen(3000);
app.listen(3000)