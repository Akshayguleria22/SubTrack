import { Router } from 'express'
import authorize from '../middlewares/auth.middlewares.js'
import { createSubscription, getUserSubscriptions } from '../controllers/subscription.controller.js'
const subRoutes = Router()

//:id is the unique number
subRoutes.get('/', (req, res) => res.send({ title: 'get all subs' }))

subRoutes.get('/:id', (req, res) => res.send({ title: 'get sub details' }))

subRoutes.post('/',authorize, createSubscription)

subRoutes.put('/:id', (req, res) => res.send({ title: 'update sub' }))

subRoutes.delete('/:id', (req, res) => res.send({ title: 'delete sub' }))

subRoutes.get('/user/:id',authorize,getUserSubscriptions)

subRoutes.put('/:id/cancel', (req, res) => res.send({ title: 'cancel sub' }))

subRoutes.get('/upcoming renewal', (req, res) => res.send({ title: 'get upcoming sub' }))

export default subRoutes
