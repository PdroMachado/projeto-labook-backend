import express, { Request, Response } from 'express'
import cors from 'cors'
import { postRouter } from './router/postRouter'
import { userRouter } from './router/userRouter'
import dotenv from 'dotenv'
dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())

app.listen(Number(process.env.PORT || 3003), () => {
    console.log(`Servidor rodando na porta ${process.env.PORT}`)
})

app.get("/ping", async (req: Request, res: Response) => {
    try {
        res.status(200).send( "Pong!" )
    } catch (error) {
        console.log(error)

        if (req.statusCode === 200) {
            res.status(500)
        }

        if (error instanceof Error) {
            res.send(error.message)
        } else {
            res.send("Erro inesperado")
        }
    }
})
//user
app.use('/users', userRouter);
//posts
app.use('/posts',postRouter);