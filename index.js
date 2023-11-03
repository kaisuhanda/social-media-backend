require("dotenv").config();

const express = require("express");
const app = express();
const PORT = process.env.PORT || 2000;
const cors = require("cors");
const { sequelize } = require("./config/config")

app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
    return res.status(200).send("<h1>HALO SOSMED</h1>")
});

// #define ROUTER
const { tweetsRouter } = require("./routers")
app.use("/tweets", tweetsRouter)
const { accountsRouter }= require("./routers");
app.use("/accounts", accountsRouter);


app.listen(PORT, () => {
    console.log("ORM API RUNNING", PORT);
});
