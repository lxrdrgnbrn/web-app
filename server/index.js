require("dotenv").config()
const express = require("express")
const sequelize = require('./db.js')
const models = require('./model/model.js')
const cors = require("cors")
const fileUpload = require("express-fileupload")
const PORT = process.env.PORT
const router = require("./routes/index.js")
const errorHandler = require("./middleware/ErrorHandlingMiddleware.js")
const path = require("path")
const expressJson = express.json(); 
const bodyParser  = express.urlencoded({extended: true});

const app = express()
app.use(cors())
app.use(express.json())
app.use([expressJson, bodyParser]);
app.use(express.static(path.resolve(__dirname, "static")))
app.use(fileUpload({}))
app.use("/api", router)




app.use(errorHandler)

const start = async () =>
{
	try
	{
		await sequelize.authenticate()
		await sequelize.sync()
		app.listen(PORT, console.log('Server started on port', PORT))
	}
	catch(e)
	{
		console.log(e)
	}
}

start()
