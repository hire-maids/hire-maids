const db = require("../database/db");
module.exports = {  
  async addNewCustomer(req, res) {
    let fullName=req.body.fullName;
    let phoneNumber=req.body.phoneNumber;
    let jobType=req.body.jobType;
    let experience=req.body.experience;
    let nationality=req.body.nationality;
    let religion=req.body.religion;
    let age=req.body.age;
    let dwc=req.body.dwc;
    let availability=req.body.availability;
    let skill=req.body.skill;
    let language=req.body.language;
    let imageUrl=req.body.imageUrl;
    let imageId=req.body.imageId;
    let videoUrl=req.body.videoUrl;
    let videoId=req.body.videoId;


    let sql = `INSERT INTO employee (fullName,phoneNumber,jobType,experience,nationality,religion,age,dwc,availability,skill,language,imageUrl,imageId,videoUrl,videoId) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);`;
    await db.query(sql,[fullName,phoneNumber,jobType,experience,nationality,religion,age,dwc,availability,skill,language,imageUrl,imageId,videoUrl,videoId], (err, result) => {
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
  async getCustomers(req,res){
    var sql="SELECT * FROM employee";
     await db.query(sql,(err, data) => {
          if (err) {
            console.log("error: ", err);
          }
          else{
            res.send(data);
          }
    });
  },
  async customerJobType(req,res){
    const jobType=req.params.jobType;
    var sql="SELECT * FROM employee WHERE jobType = ?";
    db.query(sql,[jobType],(err, data) => {
      if (err) {
        console.log("error: ", err);
      }
      else{
        res.send(data);
      }
    });

  },
  async customerNationality(req,res){
    const nationality=req.params.nationality;
    var sql="SELECT * FROM employee WHERE nationality = ?";
    db.query(sql,[nationality],(err, data) => {
      if (err) {
        console.log("error: ", err);
      }
      else{
        res.send(data);
      }
    });
  },
  async customerReligion(req,res){
    const religion=req.params.religion;
    var sql="SELECT * FROM employee WHERE religion = ?";
    db.query(sql,[religion],(err, data) => {
      if (err) {
        console.log("error: ", err);
      }
      else{
        res.send(data);
      }
    });
  },
  async customerAge(req,res){
    const age=req.params.age;
    var sql="SELECT * FROM employee WHERE age = ?";
    db.query(sql,[age],(err, data) => {
      if (err) {
        console.log("error: ", err);
      }
      else{
        res.send(data);
      }
    });
  },
 async addBooks(req,res){
  let employeeName=req.body.employeeName;
  let employeeNumber=req.body.employeeNumber;
  let employeerName=req.body.employeerName;
  let employeerNumber=req.body.employeerNumber;

  let sql = `INSERT INTO books (employeeName,employeeNumber,employeerName,employeerNumber) values (?,?,?,?);`;
  await db.query(sql,[employeeName,employeeNumber,employeerName,employeerNumber], (err, result) => {
  if (!err) 
  {
    res.json("Congra! " + req.body.employeeName + " is registered!");
  }
  else
  {
    console.log(err)
    res.send("user already");
  } 
});
 },
 async getBooks(req,res){
  var sql="SELECT * FROM books";
   await db.query(sql,(err, data) => {
        if (err) {
          console.log("error: ", err);
        }
        else{
          res.send(data);
        }
  });
},
async deleteOrder(req,res){
  const id =req.params.id;
  console.log(id);
  let sql = `DELETE FROM books WHERE _id = ?`;
  db.query(sql, [id], (error, results, fields) => {
    if (error)
    {
      console.log('it is error');
      res.send({error:true});
    }
    else{
      console.log('it is not error');
      res.send({error:false});

    }
  });    
},
async deleteCustomer(req,res){
  const id =req.params.id;
  console.log(id);
  let sql = `DELETE FROM employee WHERE _id = ?`;
  db.query(sql, [id], (error, results, fields) => {
    if (error)
    {
      console.log('it is error');
      res.send({error:true});
    }
    else{
      console.log('it is not error');
      res.send({error:false});

    }
  });    
},
async  getDetailById(req,res){
  const id=req.params.id;
  var sql="SELECT * FROM employee WHERE _id = ?";
      db.query(sql,[id], (err, data) => {
        if (err) {
          console.log("error: ", err);
        }
        else{
          res.send(data[0]);
        }
  });
},
};
