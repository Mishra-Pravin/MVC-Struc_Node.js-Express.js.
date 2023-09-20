

const express = require('express')      // Importing express Libraray;

const app = express();

const port  = 3001;


app.use(express.static('public'));      // static files (css,js,images,etc);


const homeController =  require('./controllers/home');
app.use('/',homeController);



app.listen(port,()=>{          //start the server
    console.log(`Server is running on ${port}`);
})