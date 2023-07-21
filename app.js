

// const http=require('http');
const path=require('path');
const express=require('express');

const bodyParser=require('body-parser');

const app=express();

const adminRouters=require('./routes/admin');

const shopRouters=require('./routes/shop');
const contact=require('./routes/contactUs');
const success=require('./routes/success');

const errorController = require('./controllers/error');

// const exp = require('constants');



//use allow as to add new middleware function
// app.use((req,res,next)=>{
//     console.log('In the middleware')
//     // res.send('<p>This is my 1st middleware! </p>');
//     next();  //Allows the request to continue to the next middleware in line
// }); 


app.use(bodyParser.urlencoded({extended: false}));

//this line give access to public..... the css file
app.use(express.static(path.join(__dirname,'public')));


//filtering the paths
app.use('/admin',adminRouters);

app.use(shopRouters);

app.use(contact);
app.use(success);




// app.use('/add-product',(req,res,next)=>{
//     // console.log('In another middleware');
//     res.send('<form action="/product" method="POST"><input type="text" name="title"><input type="number" name="size"><button type="submit">Add Product</button></form>');
// }); 

// app.post('/product',(req,res,next)=>{
//     console.log(req.body);
//     res.redirect('/');
// })

// app.use('/',(req,res,next)=>{
//     // console.log('In another middleware');
//     // res.send('<h1>Hello from express</h1>');
//     res.send('<h1>Hello2 from express</h1>');
//     // res.send('Hello from express with normal text');
//     // res.send({key1:'value'});
// });  




app.use(errorController.get404Error);





// const server=http.createServer(app);
// server.listen(3000);
app.listen(4000);