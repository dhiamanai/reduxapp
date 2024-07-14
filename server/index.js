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

    const { title, description, brand, category} = req.body;
    const image = req.file.filename;

    console.log('image:', image);
 

    const sql = 'INSERT INTO products (title, description, brand, category, image ) VALUES (?,?,?,?,?)';
    
    db.query(
        sql,
        [ title, description, brand, category, image],
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
    const description = req.body.description;
    const category = req.body.category;
    const title = req.body.title;

    const mysqlquery = "UPDATE products SET id = ?,title = IFNULL(?, title),description =  IFNULL(?, description), brand =  IFNULL(?, brand), category =  IFNULL(?, category) WHERE id = ?";

    db.query(mysqlquery, 
    [id, title, description, brand, category, id],
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