const express = require('express');
const cors = require('cors');
const authenticate = require('./middlewares/authenticate');
const biosampleRoutes = require('./Routes/biosample'); 

const app = express();
app.use(cors({ origin: 'http://localhost:3000' })); 
app.use(authenticate);
app.use('/biosample', biosampleRoutes);

app.listen(5001, () => { console.log("Server started on port 5001" )})
