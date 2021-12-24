const {Basket, BasketDevice} = require('./../model/model.js');
const jwt = require('jsonwebtoken');

module.exports = async function (req, res, next) {
    try {
        const {id} = req.params;
        const user = req.user;
        const userBasket = await Basket.findOne({where: {userId: user.id}});
        const deviceItem = await BasketDevice.findOne({where: {basketId: userBasket.id, deviceId: id}});

        if(deviceItem) {
            return next();
        }
        return res.json("Device didn't find in basket of user");
    } catch (e) {
        res.json(e);
    }
};