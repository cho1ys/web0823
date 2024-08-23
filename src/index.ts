import express from 'express'
const app = express()
export default app
const PORT = 4000
app.get('/',(req,res)=>{
    res.send('hello world')
})
app.listen({port:PORT},()=>{
    console.log(`localhost:${PORT} 실행`)
})