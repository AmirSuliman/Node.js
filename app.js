const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views','views');

const adminRoute = require('./routers/admin');
const shopRoute = require('./routers/shop');

app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.urlencoded({extended:false}));

  app.use('/admin',adminRoute.route);
  app.use(shopRoute);

  app.use((req,res, next) => {
    // res.status(404).sendFile(path.join(__dirname,'views','404.html'));
    res.status(404).render('404.ejs', {pageTitle: 'error'});
  });

app.listen(3000);