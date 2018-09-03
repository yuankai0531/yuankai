@EnableAutoConfiguration( exclude = { ErrorMvcAutoConfiguration.class })

var linebot = require('linebot');
var express = require('express');

var bot = linebot({
  channelId: 	1603224192,
  channelSecret: 317de12a094ba2704249de3f24ff6138,
  channelAccessToken: X+zo1RkZm6S73x3yjgn65Ll400tJXFzStdsBQLfIZAH/iqUPVSMw37nL/mHh9V6UTPoKyta4sVMIH1XSZNWiqePsepNspRmX5WqHWZUD3c9oUhfz2Grnh8TOGgvx+ayeO4t+RHPdQx1uCUmV4mSrUwdB04t89/1O/w1cDnyilFU=
});
bot.on('message', function(event) {
  console.log(event+"cool"); //把收到訊息的 event 印出來看看
});

const app = express();
const linebotParser = bot.parser();
app.post('/', linebotParser);

//因為 express 預設走 port 3000，而 heroku 上預設卻不是，要透過下列程式轉換
var server = app.listen(process.env.PORT || 8080, function() {
  var port = server.address().port;
  console.log("App now running on port", port);
});

spring.mvc.view.prefix=/WEB-INF/jsp/
spring.mvc.view.suffix=.jsp
