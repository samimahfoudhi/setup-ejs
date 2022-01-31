const express = require("express");
const server = express();
const PORT = 6001;

// setup view engine as ejs 
server.set("view engine", "ejs" )
// setup static folder as public
server.use(express.static("public"));

server.get("/", (request,response)=>{
    response.render("pages/index.ejs")
})

server.get("/about", (request,response)=>{
    response.render("pages/about.ejs")
})

server.get("/profile/:name", (request,response)=>{
    const name = request.params.name
    response.render("pages/profile.ejs",{name})
})







server.listen(PORT, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`server is runing on ${PORT}`);
  }
});

