const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const multer = require('multer')
const path = require('path')
const bodyParser = require('body-parser');

app.use(cors());
app.use(express.json());
app.use(express.static('public'));
app.use(bodyParser.json());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database:"reactredux"
});

//! Use of Multer
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images/')     // './public/images/' directory name where save the file
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname))
    }
})
 
var upload = multer({
    storage: storage
});

app.post("/create", upload.single('image'),  (req, res) => {

    const { model, details, brand, category, price} = req.body;
    const image = req.file.filename;

    console.log('image:', image);
 

    const sql = 'INSERT INTO products (model, details, brand, category, price, image ) VALUES (?,?,?,?,?,?)';
    
    db.query(
        sql,
        [ model, details, brand, category, price, image],
        (err) => {
            if (err) {
                console.log('erreur', err);
            } else {
                res.send("values inserted !")
            }
        }
    );
    
})

app.get("/getdata", (req, res) => {
db.query("SELECT * FROM products", (err, result) => {
    if (err){
        console.log('erreur', err);
    } else {
        res.send(result)
    }
})

})

app.put("/update", (req, res) => {
    const id = req.body.id;
    const brand = req.body.brand;
    const details = req.body.details;
    const category = req.body.category;
    const model = req.body.model;
    const price = req.body.price;

    const mysqlquery = "UPDATE products SET id = ?,model = IFNULL(?, model),details =  IFNULL(?, details), brand =  IFNULL(?, brand), category =  IFNULL(?, category), price = IFNULL(?, price) WHERE id = ?";

    db.query(mysqlquery, 
    [id, model, details, brand, category, price, id],
    (err, result) => {
        if (err) {
        console.log('product update error ', err)
    } else {
        res.send(result)
    }})
})

app.delete("/delete/:id", (req, res) => {
    const id = req.params.id;

    db.query("DELETE FROM products WHERE id = ?", id, (err, result) => {
        if (err) {
            console.log('err', err)
        } else {
            res.send(result)
        }
    })
})


app.listen('3001', () => {
    console.log('your server is running');
} )