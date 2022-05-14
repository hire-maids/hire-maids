require("./database/db");
var express = require("express");
var bodyParser = require("body-parser");
var morgan = require("morgan");
const config = require("./config/config");
var cors = require("cors");
var app = express();
app.use(morgan("combine"));
app.use(bodyParser.json());
app.use(cors({origin:'*'}));

app.use(bodyParser.urlencoded({ extended: false }));
const routes=require("./routes/Users");
app.use('/api/v1',routes);
// if(process.env.NODE_ENV==='production'){
//     app.use(express.static(__dirname + '/public/'));
//     app.get(/.*/,(req,res)=>res.sendFile(__dirname + '/public/index.html'));
// }
const port=process.env.PORT || 3001;
app.listen(port);
console.log(`Server is started on port ${port}`);
