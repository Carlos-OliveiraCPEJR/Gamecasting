const express = require ("express");
const routes = express.Router();

const auth = require("./middlewares/authentication");

const UserController = require ("./controllers/UserController");
const JogoController = require ("./controllers/JogoController");
const JogosFavoritosController = require ("./controllers/JogosFavoritosController");
const SessionController = require ("./controllers/SessionController");

const UserValidator = require("./validators/UserValidator");
const JogoValidator = require("./validators/JogoValidator");
const JogosFavoritosValidator = require("./validators/JogosFavoritosValidator");
const { getByUserId } = require("./models/JogosFavoritosModel");

//User
routes.get("/user/:user_id:", UserValidator.getById, auth.authenticateToken, UserController.getById);
routes.get("/user/", UserValidator.getAll, auth.authenticateToken, UserController.getAll);
routes.post("/user", UserValidator.create, UserController.create);
routes.put("/user/:user_id", UserValidator.update, auth.authenticateToken, UserController.update);
routes.delete("/user/:user_id", UserValidator.delete, auth.authenticateToken, UserController.deleteById);

//Jogo
routes.get("/jogo/:jogo_id", JogoValidator.getById, auth.authenticateToken, JogoController.getById);
routes.get("/jogo", JogoValidator.getAll, auth.authenticateToken, JogoController.getAll);
routes.post("/jogo", JogoValidator.create, auth.authenticateToken, JogoController.create);
routes.put("/jogo/:jogo_id", JogoValidator.update, auth.authenticateToken, JogoController.update);
routes.delete("/jogo/:jogo_id", JogoValidator.delete, auth.authenticateToken, JogoController.delete);

//Jogos Favoritos
routes.get("/jogos_favoritos/:user_id", JogosFavoritosValidator.getByUserId, auth.authenticateToken, JogosFavoritosController.getByUserId);
routes.post("/jogos_favoritos", JogosFavoritosValidator.create, auth.authenticateToken, JogosFavoritosController.create);
routes.delete("/jogos_favoritos/:user_id/:id_exercicio", JogosFavoritosValidator.delete, auth.authenticateToken, JogosFavoritosController.delete);

//Session
routes.post("/login", SessionController.signIn);

module.exports = routes;