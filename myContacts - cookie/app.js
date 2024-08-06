const express = require("express");
const app = express();
const dbConnect = require('./config/dbConnect');
const methodOverride = require('method-override');

dbConnect();
app.set('view engine','ejs');
app.set('views','./views')

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(express.static('./public'));
app.use(methodOverride("_method"));

app.use("/", require('./loginroutes'));
app.use('/contacts', require('./routes'));


app.listen(3000, ()=>{
    console.log('서버 실행 중');
});