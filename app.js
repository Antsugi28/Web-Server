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
    const username = 'Anggi Septriana Putri'
    res.send(`Dicoding Username: ${username}`)
})

/*
Optional [ROUTE] '/me'
[Response] => Dicoding username.
*/

app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)
