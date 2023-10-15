import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
var task_num = 1;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended : true}));

app.get("/", (req,res) => {
    res.render("index.ejs",{run : task_num});
} );

app.post("/plus", (req,res) => {
    task_num++;
    res.render("index.ejs", {run : task_num});

});

app.listen(port , () => {
    console.log(`Listening on port ${port}`);
});