const User = require('../models/User')

module.exports ={
    async userRegister(req, res) {
        try {
            const { name, email, password } = req.body;
            const user = await User.findOne({ where:{email} }); 
    
            if (user){
                 res.status(401).json( {message: "Email já cadastrado!!"} );
            }else{
                const newUser = await User.create({ name, email, password });
                res.status(200).json({newUser});
            }
    
        } catch (error) {
            res.status(500).json({error});
        }
    }, 
    async updateUser (req,res)  {
        try {
            const {id} = req.params;
            const {name, email} = req.body;
            const user = await User.findOne({where:{id}})
            if(!user){
                res.status(401).json( {message: "Nenhum usuario encontrado"} );
            }else{
                const upUser = await User.update({name, email}, {where: {id}});
                res.status(200).json({upUser});
            }
    
        } catch (error) {
            res.status(400).json( {error} );
            
        }
    },

    async listUser (req,res) {
        try {
            const users = await User.findAll();
            if(!users){
                res.status(401).json( {message: "Nenhum usuario encontrado"} );
            }else{
                res.status(200).json({users});
            }
        } catch (error) {
            res.status(400).json( {error} );
        }
    },

    async deletUser (req,res) {
        try {
            const {id} = req.params;
            const user = await User.findOne({where: {id} });
            if (!user){
                res.status(401).json( {message: "Nenhum usuario encontrado"} );
            }else{
                await User.destroy({where: {id}});
                res.status(200).json({ok:true});
            }
        } catch (error) {
            res.status(400).json( {error} );
        }
    }
}