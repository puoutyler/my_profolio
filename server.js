const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
app.use(express.static('public'))

app.get('*', (req, res) => {
    res.send(`<h1>
        Wrong Page, click <a href="/index.html">here</a>
    </h1>`)
})
app.listen(PORT)