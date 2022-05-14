
const db = require("../database/db");
const passwordEncription = require("../Encription/passwordEncriptionComparison");
const path = require("path");
const jwt = require("jsonwebtoken");
module.exports = {  
  async userRegistration(req, res) {
    let fullName=req.body.fullName;
    let email=req.body.email;
    let phoneNumber=req.body.phoneNumber;
    let role=req.body.role;
    let password=passwordEncription.passwordEncription(req.body.password);
    let sql = `INSERT INTO users (fullName,email,password,phoneNumber,role) values (?,?,?,?,?);`;
    await db.query(sql,[fullName,email,password,phoneNumber,role], (err, result) => {
    if (!err) 
    {
      res.json("Congra! " + req.body.fullName + " is registered!");
    }
    else
    {
      console.log(err)
      res.send("user already");
    } 
  });
  },
  async adminRegistration(req, res) {
    let fullName=req.body.fullName;
    let email=req.body.email;
    let phoneNumber=req.body.phoneNumber;
    let role=req.body.role;
    let password=passwordEncription.passwordEncription(req.body.password);
    let sql = `INSERT INTO users (fullName,email,password,phoneNumber,role) values (?,?,?,?,?);`;
    await db.query(sql,[fullName,email,password,phoneNumber,role], (err, result) => {
    if (!err) 
    {
      res.json("Congra! " + req.body.fullName + " is registered!");
    }
    else
    {
      console.log(err)
      res.send("admin already");
    } 
  });
  },
  async userLogin(req, res){
    db.query(`SELECT * FROM users WHERE phoneNumber = ${db.escape(req.body.phoneNumber)};`,(err, result) => {
      if (err) { 
          console.log(err);
      }
      if (!result.length) {
        res.send({error:true,message:"Make sure your phone number"});
      }
     if (passwordEncription.comparePassword(req.body.password,result[0]['password'])) 
          {
            const token = jwt.sign({id:result[0]._id},'the-super-strong-secrect',{ expiresIn: '1h' });
            res.send({token: token,user: result[0] ,error:false});
          }
    else
            res.send({error:true,message:"Make sure your password"});
    });
  },
};
