const express = require("express");
const routes= express.Router();
const UserController = require("./controllers/UserController");

routes.post("/cadastro", UserController.store);
routes.get("/buscar/:email", UserController.index);
routes.delete("/deletar/:email", UserController.destroy);
routes.put("/alterar/:email", UserController.update);
routes.get("/listar/", UserController.lista);
module.exports= routes;