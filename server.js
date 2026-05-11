const express = require('express');
const i18n = require('i18n');
const path = require('path');
const common = require('./locales/common.json');

const app = express();

i18n.configure({
  locales: ['en', 'pl'],
  defaultLocale: 'en',
  directory: path.join(__dirname, 'locales'),
  queryParameter: 'lang',
});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(__dirname));
app.use(i18n.init);

app.get('/', (req, res) => res.render('index', { common }));

app.listen(3003, () => console.log('Server running at http://localhost:3003'));
