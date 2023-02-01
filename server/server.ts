import { config } from "dotenv"

config()

import fastify from "fastify"

const app = fastify()

console.log("hi")

// typeScript中驚嘆號基本上是說他不能為定義, 並且保證這是有效的值
app.listen({ port: parseInt(process.env.PORT!) })
