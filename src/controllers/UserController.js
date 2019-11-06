const User = require("../models/User");
module.exports = {
  async store(req, res) {//salvar
    const user = await User.create(req.body);
    return res.json(user);
  },
  
  async lista(req, res) {//listar tudo
    const user = await User.find({});
    return res.json(user);
  },
  async update(req,res){//alterar 
    const user = await User.updateOne(
      { email: req.params.email },
      req.body,
      { new: true }
    );
    return res.json(user);
  },
  async destroy(req,res){//excluir
    await User.deleteOne({ email: req.params.email });
    return res.json({ success: "ok" });
  },
  async index(req, res) {//listar 1
    const user = await User.findOne({ email: req.params.email});
    return res.json(user);
  }
};