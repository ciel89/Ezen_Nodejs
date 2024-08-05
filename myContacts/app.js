const express = require("express");
const app = express();
const dbConnect = require('./config/dbConnect');

app.get('/', (req,res) => {
    res.send('Hello Node')
})

dbConnect();

app.use(express.json());
app.use('/contacts', require('./routes'));


app.listen(3000, ()=>{
    console.log('서버 실행 중');
});