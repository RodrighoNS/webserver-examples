const express = require('express');

const app = express();

// Las peticiones que incluyan "/" pasan por el callback de la Arrow f(x)
app.get('/', (req,res) => {

    let out = {
        name: 'name',
        age: 32,
        url: req.url
    }

    //  res.send('Hello world ! ');
    res.send(out);
    
});

app.get('/data',(req,res)=>{
    res.send('inside of "/data" ! ');
});

app.listen(3000,()=>{
    console.log('Listening requests in port 3000');
});