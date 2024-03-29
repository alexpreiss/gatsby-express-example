const express = require("express")
const path = require("path")

const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, "public")))

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "public/404/index.html"))
})

app.listen(port, () => console.log(`Listening on port ${port}!`))
