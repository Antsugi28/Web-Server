'use strict'

const express = require('express')

const PORT = 8000
const HOST = '0.0.0.0'

const app = express()
/*
[ROUTE] '/'
[Response] => Hello world!
 */
app.get('/me', (req, res) => {
    const username = 'AnggiSeptrianaPutri'; // Ganti dengan username yang diinginkan
    res.send(`Username: ${username}`);
})

/*
Optional [ROUTE] '/me'
[Response] => Dicoding username.
*/

app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)
