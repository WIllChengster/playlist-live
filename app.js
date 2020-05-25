const express = require('express');
const PORT = process.env.PORT || 5000;
const app = express();
const routes = require('./routes')



routes(app);
app.listen(PORT, () => {
    console.log('server is listening to PORT:', PORT)
})