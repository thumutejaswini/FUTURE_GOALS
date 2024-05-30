const app = require('./Require');
const express=require('express');

app.use(express.static('suggestion_frontend'));
const port = process.env.PORT || 3022;
app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
});