//Primeira parte da rota:
  // Metodo => GET, POST, PUT/PATCH e DELETE (APIRestful)
  // PUT atualiza tudo
  // PATCH atualiza apenas um ítem.
//Segunda parte:
  // NAME => começa com / (sempre no plural)
//Terceira parte:
  //Callback functions => Onde executamos o backend (lógica, regras de negócio, etc)

import express from "express"

const app = express();
const users = []

app.use(express.json())

app.post("/users", (req, res) => {
  const body = req.body
  users.push(body)
  res.status(201).send("Usuário criado com sucesso")
});

app.get("/users", (req, res) =>{
  res.json({users})
// Entre chaves é a maneira mais correta de responder ao cliente.
})

  app.listen(3000, () => {
  console.log("Server is running on port 3000")
}); 