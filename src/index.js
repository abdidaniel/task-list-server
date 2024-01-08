require('./db');
const app = require('./app');
const port = process.env.PORT || 5000;

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });

app.listen(port, () => {
    console.log("Server running on port", port);
});