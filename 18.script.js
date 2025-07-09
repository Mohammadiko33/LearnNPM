const fs = require("fs")

fs.writeFile("data.txt", "test text" , err => err && console.log(err))