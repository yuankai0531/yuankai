@EnableAutoConfiguration( exclude = { ErrorMvcAutoConfiguration.class })

var linebot = require('linebot');
var express = require('express');

var bot = linebot({
  channelId: 	1603897462,
  channelSecret: 9100f45ef47e1c62f0741c6dac5a0881,
  channelAccessToken: S7JTRSYJGrCH2WqSWsNCrq0k1+6ipeqnenLKIh7JDwEhO9nJeeMkO4x55xW5U+qWytpsVghRilcPwLWAO3zQTYYEk1iVSoRfYbBk1d+wRcOyOtoZVIH/wveh5Mt6efmLYQXguLp0BXL9UBcwf1SPfgdB04t89/1O/w1cDnyilFU=
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
