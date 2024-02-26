let express = require('express')
let authRouter = require('./Router/authRouter');
let app = express();
let mongoose = require('mongoose');

app.use(express.json());
app.use('/api', authRouter);

mongoose.connect('mongodb+srv://Section48db:4ufldwmoYaGKvbSM@cluster0.8hs9loe.mongodb.net/?retryWrites=true&w=majority');
let con = mongoose.connection

con.on('open', ()=>{

    app.listen(8080, ()=>{

        console.log('connected successfully');

    })

})