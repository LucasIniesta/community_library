//Primeira parte da rota:
  // Metodo => GET, POST, PUT/PATCH e DELETE (APIRestful)
  // PUT atualiza tudo
  // PATCH atualiza apenas um ítem.
//Segunda parte:
  // NAME => começa com / (sempre no plural)
//Terceira parte:
  //Callback functions => Onde executamos o backend (lógica, regras de negócio, etc)

import express from "express"
import userRouters from './src/routes/user.routes.js'


const app = express();
const users = []

app.use(express.json())
app.use(userRouters)

app.listen(3000, () => {
  console.log("Server is running on port 3000")
}); 