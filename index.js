import { profile } from 'console'
import express from 'express'
const app = express()
const port = 3000
let profile = {};
app.use(express.json())

app.get('/profile', (req,res) => {
     res.send(profile)
 })

app.post('/profile', (req,res) => {
    if(!req.body.name || !req.body.email || !req.body.address){
        res.status(400).send("Invalid data");
    }else{
        profile.name = req.body.name;
        profile.email = req.body.email;
        profile.address = req.body.address;

        res.send("Profile Created")
    }
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.delete('delete')


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
