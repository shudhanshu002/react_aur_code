const figlet = require("figlet");

figlet("Shudhanshu ",function (err, data) {
    if(err) {
        console.log("Something went wrong...");
        cosole.dir(err);
        return;
    }
    console.log(data);
})