const uuid = require("uuid")
const path = require("path")
const {Device, DeviceInfo} = require("../model/model.js")
const ApiError = require ("../error/ApiError.js")
class DeviceController
{
	async create(req, res, next)
	{
		try
		{
			const {name, price, brandId, typeId, info} = req.body
			const {img} = req.files
			let fileName = uuid.v4() + ".jpg"
			img.mv(path.resolve(__dirname,"..","static", fileName))
			const device = await Device.create({name, price, brandId, typeId, img: fileName})

			if(info)
			{
				info = JSON.parse(info)
				info.forEach(i=>
					DeviceInfo.create({
						title: i.title,
						description: i.description,
						deviceId: device.id
					}))
			}

			return res.json(device)	
		}
		catch(e)
		{
			next(ApiError.badRequest(e.message))
		}
			
	}

	async getALL(req,res)
	{
		let {brandId,typeId, limit, page} = req.query
		page = page || 1
		limit = limit || 10
		let offset = page*limit-limit
		let devices
		if(!brandId && !typeId)
		{
			devices = await Device.findAndCountAll()
		}
		if(brandId && !typeId)
		{
			devices = await Device.findAndCountAll({where:{brandId}, limit, offset})
		}
		if(!brandId && typeId)
		{
			devices = await Device.findAndCountAll({where:{typeId}, limit, offset})
		}
		if(brandId && typeId)
		{
			devices = await Device.findAndCountAll({where:{brandId, typeId}, limit, offset})
		}

		return res.json(devices)
	}

	async getONE(req,res)
	{
		const {id} = req.params 
		const device = await Device.findOne
		(
			{
				where: {id},
				include: [{model: DeviceInfo, as: "info"}]
			},
		)
		return res.json(device)
	}

	async delete(req, res) 
	{
  	const {id} = req.params;
  	await Device.findOne({where:{id}}).then( async data => 
  	{
    	if(data) 
    	{
      	await Device.destroy({where:{id}}).then(() => 
      	{
        	return res.json("Device deleted");
      	})
    	} 
    	else 
    	{
      	return res.json("This Device doesn't exist in DB");
    	}
    	await BasketDevice.destroy({where:{deviceId: id}})
  	})
	}

}

module.exports = new DeviceController()