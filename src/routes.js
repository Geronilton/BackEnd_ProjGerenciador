const express = require('express');
const router = express.Router();
const controllerUser = require('./controller/controllerUser')
const SessionController = require('./controller/SessionController');
const controllerProduto = require('./controller/controllerProduto');
const authMiddlewares = require('./middlewares/auth');

// Login e CRUD user
router.post("/session", SessionController.login);
router.post('/register', controllerUser.userRegister);
router.use(authMiddlewares);
router.put("/update-user/:id", controllerUser.updateUser);
router.get("/list-users",controllerUser.listUser);
router.delete("/delete-user/:id", controllerUser.deletUser)

// CRUD Produto
router.post("/create-produto",controllerProduto.createProduto);
router.get("/list-produto",controllerProduto.listProdutos);
router.put("/update-produto/:id",controllerProduto.updateProduto);
router.delete("/delete-produto/:id",controllerProduto.deleteProduto);
router.get("/get-produto/:id", controllerProduto.getProduto);
router.get("/search", controllerProduto.search);


router.put("/entrada-estoque/:id", controllerProduto.registrarEstoque);
router.put("/retirada-estoque/:id",controllerProduto.retirarEstoque)

router.get('/',async (req, res) => {
    res.send("Servidor funcionando !!");
});

module.exports = router;