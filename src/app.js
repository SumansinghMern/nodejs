const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express();
const port = process.env.PORT || 8000;

// Spacify Paths
const static_path = path.join(__dirname,"../public");
const viewsPath = path.join(__dirname,'../templates/views');
const partialsPath = path.join(__dirname,'../templates/partials');

app.set('view engine', 'hbs');          // for use of view engine
app.use(express.static(static_path));   // to serve statics files like css and js.
app.set('views',viewsPath);             // Defined the views folder and set the location
hbs.registerPartials(partialsPath);     // Defined the partials folder and register partials


// Routing
app.get("",(req,res)=>{
    res.render('index');
});

app.get("/about",(req,res)=>{
    res.render("about");
});
app.get("/weather",(req,res)=>{
    res.render("weather");
});

app.get("*",(req,res)=>{
    res.render("404error",{
        errorMsg: 'Opps! Page Not Found',
        errUrl: req.url,
    });
    
});

app.listen(port,()=>{
    console.log(`Listen at port ${port}`);
});