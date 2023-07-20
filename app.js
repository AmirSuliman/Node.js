const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views','views');

const adminRoute = require('./routers/admin');
const shopRoute = require('./routers/shop');
const error404Controller = require('./controllers/error404');

app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.urlencoded({extended:false}));

  app.use('/admin',adminRoute.route);
  app.use(shopRoute);

  app.use(error404Controller.getError404);

app.listen(3000);