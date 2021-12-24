const Router = require('express');
const router = new Router();
const BasketController = require('./../controllers/basketController');
const authMiddleware = require('./../middleware/authMiddleware');
const checkDeleteDeviceFromBasket = require('./../middleware/checkDeleteDeviceFromBasket');


router.post('/', authMiddleware, BasketController.addDevice)
router.get('/', authMiddleware, BasketController.getDevices)
router.delete('/:id', authMiddleware, checkDeleteDeviceFromBasket, BasketController.deleteDevice);

module.exports = router;