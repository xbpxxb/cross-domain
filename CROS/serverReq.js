var express = require('express'); // 引用express模块
var app = express();  // 创建一个简单的服务器

var requestPort = 3000;  // 请求页面跑在3000端口

app.use(express.static(__dirname + '/static')); //3000端口的静态文件，即index.html

// __dirname始终指向当前js代码文件(serverReq)的目录, 在我的本地目录是D:\cross-domain\CROS
// console.log(__dirname) 在dos窗口可以看到
// 上面express.static的意思项目的静态文件目录在 D:\cross-domain\CROS\static
// 可以在static里面加入b.html, 然后在http://localhost:3000/b.html可以显示

app.listen(requestPort, function () {
    console.log('Requester is listening on port '+ requestPort);  // 在dos窗口会执行这个回调函数
});
