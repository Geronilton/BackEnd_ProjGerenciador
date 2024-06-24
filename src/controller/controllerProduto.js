const { where } = require('sequelize');
const Produto = require('../models/produto');

module.exports = {
    async createProduto(req, res){
        try {
            const {name, description,price,estoque,validade} = req.body;
            const produto = await Produto.create({ 
                name, description,price,estoque,validade, userId:req.userId })
            res.status(200).json({produto});
           
        } catch (error) {
            res.status(500).json({ message: 'erro no servidor', error });
            res.send("nao cadastrado")
        }
    },
    async listProdutos(req,res){
        try {
            const produtos = await Produto.findAll({where: {userId:req.userId}})
            if (!produtos){
                res.status(401).json({message: "Nenhum produto encontrada!!"})
            }else{
                res.status(200).json({produtos});
            }
        } catch (error) {
            res.status(400).json('erro no servidor', {error})
        }
    },
    async updateProduto(req,res){
        try {
            const {id} = req.params;
            const {name, description,price,estoque,validade} = req.body;
            const produto = await Produto.findOne({where:{id}});
            if(!produto){
                res.status(401).json({message: "Nenhum produto encontrado!!"});
            }else{
                const novoProduto = await Produto.update(
                    {name, description,price,estoque,validade},{where: {id}});
                res.status(200).json({novoProduto});
            }
        } catch (error) {
            res.status(400).json('erro no servidor', {error});
        }
    },
    async deleteProduto(req,res){
        try {
            const {id} = req.params;
            const produto = await Produto.findOne({where:{id}});
            if (!produto){
                res.status(401).json({message: "Nenhum produto encontrada!!"});
            }else{
                await Produto.destroy({where: {id}});
                res.status(200).json({message:"Produto excluido"});
            }
        } catch (error) {
            res.status(400).json('erro no servidor', {error});
        }
    },
    async getProduto(req,res){
        try {
            const {id} = req.params;
            const produto = await Produto.findOne({where: {id}});
            if (!produto){
                res.status(401).json({message: "Nenhum produto encontrada!!"});
            }else{
                res.status(200).json({produto});
            }

        } catch (error) {
            res.status(400).json('erro no servidor', {error});
        }
    },
     async search (req, res) {
        const { q } = req.query;
        try {
          const produto = await Produto.findOne({where: {name:q}});
          if (!produto) {
            res.status(404).json({ message: 'Produto não encontrado' });
          } else {
            res.json({ produto });
          }
        } catch (error) {
          res.status(500).json({ error: 'Erro ao buscar produtos' });
        }
      },
    async registrarEstoque(req,res){
        try {
            const {id} = req.params;
            const {quantidade} = req.body;
            const produto = await Produto.findOne({where:{id}});
            if(!produto){
                res.status(401).json({message: "Nenhum produto encontrado!!"});
            }else{
                const quantidadeNum = parseFloat(quantidade);
                if (isNaN(quantidadeNum) || quantidadeNum <= 0) {
                    return res.status(400).json({ message: "Quantidade inválida!!" });
                }
                produto.estoque += quantidadeNum;
                await produto.save();
                res.status(200).json({ message: "Estoque atualizado com sucesso!", produto });
            }
        } catch (error) {
            res.status(400).json('erro no servidor', {error});
        }
    },
    async retirarEstoque(req,res){
        try {
            const {id} = req.params;
            const {quantidade} = req.body;
            const produto = await Produto.findOne({where:{id}});
            if(!produto){
                res.status(401).json({message: "Nenhum produto encontrado!!"});
            }else{
                const quantidadeNum = parseFloat(quantidade);
                if (isNaN(quantidadeNum) || quantidadeNum <= 0) {
                    return res.status(400).json({ message: "Quantidade inválida!!" });
                }
                produto.estoque -= quantidadeNum;
                await produto.save();
                res.status(200).json({ message: "Estoque atualizado com sucesso!", produto });
            }
        } catch (error) {
            res.status(400).json('erro no servidor', {error});
        }
    },
    
}