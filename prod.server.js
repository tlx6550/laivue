var express = require('express');

var port = process.env.PORT || 5000;

var app = express();

var router = express.Router();

app.use(router);

/*node的服务启动路径一定要配对，否则会报404错误*/
app.use(express.static('./'));

module.exports = app.listen(port, function (err) {
    if (err) {
        console.log(err);
        return
    }
    console.log('Listening at http://localhost:' + port + '\n')
});
