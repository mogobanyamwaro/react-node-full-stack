const express = require('express')
const app = express()

app.get('/api/customers',(req,res)=>{
    const customers = [
        {id:1,firstName:'douglas',lastName:'mogoba'},
        {id:2,firstName:'dovlvin',lastName:'nyamwaro'},
        {id:1,firstName:'kemuma',lastName:'moraa'},
    ];
    res.json(customers)
})


const port = 5000;

app.listen(port,()=>console.log(`server started on ${port}`))
