import express from 'express'
import { PORT } from './config/env.js'
import userRouter from './routes/user.routes.js'
import subRoutes from './routes/subscription.routes.js'
import authrouter from './routes/auth.routes.js'
import connect from './mongodb/mongodb.js'
import errorMiddleware from './middlewares/error.middlewares.js'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import arcjetMiddleware from './middlewares/arcjet.middlewares.js'
import workflowRouter from './routes/workflow.routes.js'



const app = express()



//some middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(arcjetMiddleware)



//Routes
app.use('/api/v1/auth', authrouter)
app.use('/api/v1/users', userRouter)
app.use('/api/v1/subscription', subRoutes)
app.use('api/v1/workflows', workflowRouter)


//error handles
app.use(errorMiddleware)


//Connection and starting
app.get('/', (req, res) => {
    res.send("Welcome to the Subscription Tracker");
})


app.listen(PORT, async () => {
    console.log(`Subscription Tracker API Server is running on http://localhost:${PORT}`)
    await connect()
})


export default app;
