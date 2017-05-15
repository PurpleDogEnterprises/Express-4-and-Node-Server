var express    =    require('express');
var app        =    express();

app.get('/',function(req,res){
    res.send('Testing, testing, one, two, three...');
});

var server     =    app.listen(3000,function(){
    console.log("Server is started on port 3000");
});
