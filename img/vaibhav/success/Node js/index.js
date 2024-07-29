const express = require('express');
const path = require('path');
const port= 8152;
const app= express();

app.set('view engine','ejs');
app.set('views', path.join(__dirname,'views'));
app.use(express.urlencoded());
app.use(express.static('assests'));

// // middleware1
// app.use(function(req, res, next){
//     req.myName="Shiv";
//     console.log('middlaware 1 called');
//     next();
// });

// // middleware2

// app.use(function(req, res, next){
//     console.log('My Name from MW2', req.myName);
//     //console.log('middlaware 2 called');
//     next();
// });


var contactList =[
    {
        name: "shiv",
        phone: "12564789"  
    },
   {
        name: "shiv",
        phone: "12564789" 
   },
   {
    name: "shi",
    phone: "1256"
    }
]
app.get('/', function(req, res){
    console.log('from the get route controller',req.myName);
    return res.render('home',{
        title:"My Contacts List",
        contact_list: contactList
});
});
app.post('/create-contact',function(req,res){
    // This is also correct
//    contactList.push({
//     name: req.body.name,
//     phone:req.body.phone

//    });
    // inshort
contactList.push(req.body);
   return res.redirect('back');
});
app.get('/practice', function(req, res){
    return res.render('practice',
    {title:"Let us play with ejs"});
});


app.listen(port,function(err){
    if(err){
        console.log('erorr');
    }
    console.log('Yup!Server running on a port',port);
});