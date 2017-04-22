'use strict';

const appConfig = require('rc')('app');
const mysql = require('mysql');
const states = require('./data/states_hash.json');

const env = process.env.NODE_ENV || 'development';

const connection = mysql.createConnection({
    host: appConfig[env].dbHost,
    port: appConfig[env].dbPort,
    user: appConfig[env].dbUser,
    password: appConfig[env].dbPassword,
    database: appConfig[env].dbSchema
});

for (let abv in states) {
    connection.query('INSERT INTO states SET ?', {
        abv,
        name: states[abv]
    }, function (err, res) {
        if (err) {
            throw err;
        }

        console.log(`Inserted ${abv}: ${states[abv]}`);
    });
}

connection.end();