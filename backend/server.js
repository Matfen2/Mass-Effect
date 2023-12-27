const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express ();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.urlencoded());

const db = mysql.createConnection({
    user: 'Matfen',
    host: 'localhost',
    database: 'mass-effect',
    password: 'Geralt2077!',
});

db.connect((error) => {
    if (!error) {
        console.log('Connexion réussite de la base de données');
    } else {
        console.log('Echec de la connexion de la base de données');
    }
});

app.listen(PORT, () => {
    console.log('Connexion au port serveur ' + PORT);
});

// LOG IN
app.post('/connect', (req, res) => {
    let adress = req.body.adress;
    let pass = req.body.pass;
    let qr = `SELECT * FROM account WHERE adress = ? AND pass = ?`;

    db.query(qr, [adress, pass], (results, error) => {
        if (!error) {
            if (results.affectedRows > 0) {
                res.status(200).send({ message: 'Connexion réussie' });                
            } else {
                res.status(400).send({ message: 'Echec de la connexion'});
            }
        } else {
            res.status(500).send({ message : "Erreur d'interval de serveur" });
        }
    })
});

// REGISTER
app.post('/register', (req, res) => {
    let user = req.body.user;
    let adress = req.body.adress;
    let phone = req.body.phone;
    let pass = req.body.pass;
    let qr = `INSERT INTO account VALUES user = ?, adress = ?, phone = ?, pass = ?`;

    db.query(qr, [user, adress, phone, pass], (results, error) => {
        if (!error) {
            if (results.affectedRows > 0) {
                res.status(200).send({ message : 'Enregistrement réussi' });
            } else {
                res.status(400).send({ message : "Echec de l'enregistrement" });
            }
        } else {
            res.status(500).send({ message : "Erreur d'interval de serveur" });
        };
    });
});