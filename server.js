const express = require('express')
const app = express()
const { seed, conn, Products } = require('./db')
const path = require('path')

app.use(express.json());
app.use('/dist', express.static('dist'));
app.use('/assets', express.static('assets'));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')))

app.put('/api/products', async(req, res, next) => {
    try {
        res.send(req.body)
    } catch (ex) {
        console.log(ex)
    }
})

app.get('/api/products', async(req, res, next)=> {
  try {
    res.send(await Products.findAll());
  }
  catch(ex){
    next(ex);
  }
});

const init = async() => {
    try {
        await conn.sync({ force: true })
        await seed()    
        const port = process.env.PORT || 3000  
        app.listen(port, () => `listening to port ${port}`) 
    } catch (ex) {
        console.log(ex)
    }
}

init()

