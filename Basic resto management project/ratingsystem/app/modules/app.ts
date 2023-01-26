import express from 'express'
import { registerRoutes } from './routes/routes.register'
export const startServer=()=>{
    const app=express()
    registerRoutes(app)
    const {PORT}=process.env

    app.listen(PORT,
        ()=>console.log(`server listening on ${PORT}`))
}