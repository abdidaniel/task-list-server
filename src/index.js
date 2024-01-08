require('./db');
const cors = require('cors')
const app = require('./app');
const port = process.env.PORT || 5000;

app.use(cors());

app.listen(port, () => {
    console.log("Server running on port", port);
});