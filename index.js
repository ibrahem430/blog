import express from "express";
import bodyParser from "body-parser";
import expressSession from "express-session";
const port=3000;
const app=express();
let word3 = "";
let word4 = "";



app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/",(req,res)=>{
    res.render("index.ejs")
});


// Handle POST request
app.post("/", (req, res) => {
    word3 = req.body["Type-the-address"];
    word4 = req.body["Type-the-text"];

    res.render("index.ejs", { word1: word3, word2: word4 });
});

// Handle GET request to "/the"
app.get("/the", (req, res) => {
    res.render("theBlog.ejs", {
        word5: word3,
        word6: word4
    });
});
 
app.get("/update", (req, res) => {
    // Ensure word3 and word4 are passed with a fallback empty value

    res.render("WriteBlog.ejs");
});



app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
    app.post("/submit",(req,res)=>{
    res.render("WriteBlog.ejs");
});
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
