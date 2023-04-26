const express = require("express")
const app = express();
const cats = []
app.use(express.json());
const catRoutes=require("./routes/routes");
app.use("/cats", catRoutes);
require("./dbexplorer");

const logger = (req, res, next) => {
    console.log("host:", req.host);
    console.log("method:", req.method);
    console.log("path:", req.path);
    next();
}
app.use(logger);


app.use((err, req, res, next) => {res.status(err.status).send(err.msg);
});


const server = app.listen(4494, () => console.log('server started on', server.address().port));
