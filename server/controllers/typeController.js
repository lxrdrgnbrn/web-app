const {Type} = require("../model/model.js")
const ApiError = require ("../error/ApiError.js")
class TypeController
{
	async create(req,res)
	{
		const {name} = req.body
		const type = await Type.create({name})
	return res.json(type)
	}

	async getALL(req,res)
	{
			const types = await Type.findAll()
			return res.json(types)

	}
	async delete(req, res) 
	{
    const {id} = req.params;
    await Type.findOne({where:{id}}).then( async data => 
    {
      if(data) 
      {
        await Type.destroy({where:{id}}).then(() => 
        {
          return res.json("Type deleted");
        })
      } 
      else 
      {
        return res.json("This Type doesn't exist in DB");
      }
    })
  }
}

module.exports = new TypeController()