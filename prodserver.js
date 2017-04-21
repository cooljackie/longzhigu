var express = require('express');
var config = require('./config/index');

var port = process.env.PORT || config.build.port;

var app = express();

var router = express.Router();

router.get('/', function(req, res,next){
  req.url = '/index.html';
  next();
});

app.use(router);

var data = require('./data.json')
var roles = data.roles
var adv = data.adv
var tabData = data.tabData
var hotNews = data.hotNews
var news = data.news
var notices = data.notices
var activitys = data.activitys

var apiRouter = express.Router();
apiRouter.get('/roles', function(req, res){
  res.json({
    errno: 1,
    data: roles
  });
});
apiRouter.get('/adv', function(req, res){
  res.json({
    errno: 1,
    data: adv
  });
});
apiRouter.get('/tabData', function(req, res){
  res.json({
    errno: 1,
    data: tabData
  });
});
apiRouter.get('/hotNews', function(req, res){
  res.json({
    errno: 1,
    data: hotNews
  });
});
apiRouter.get('/news', function(req, res){
  res.json({
    errno: 1,
    data: news
  });
});
apiRouter.get('/notices', function(req, res){
  res.json({
    errno: 1,
    data: notices
  });
});
apiRouter.get('/activitys', function(req, res){
  res.json({
    errno: 1,
    data: activitys
  });
});
app.use('/api',apiRouter);

app.use(express.static('./dist'));

module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err);
    return
  }
  console.log('Listening at http://localhost:' + port + '\n')
});


