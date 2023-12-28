import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

var titles = [];
var authors = [];
var blogs = [];

const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res)=>{
    res.render("index.ejs");
});

app.get("/blogs", (req, res)=>{
    res.render("blogs.ejs", {titles: titles, authors: authors ,blogs: blogs, randomBlog: randomBlogIndex()});
});

app.get("/write", (req, res)=>{
    res.render("write.ejs");
});

app.post("/write", (req, res) => {
    titles.push(req.body["title"]);
    authors.push(req.body["author"]);
    blogs.push(req.body["blog"]);
    res.redirect("/write");
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

function randomBlogIndex() {
    return Math.floor(Math.random()*titles.length);
}