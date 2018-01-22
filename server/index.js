const express = require('express'),
    bodyParser = require('body-parser'),
    app = express(),
    port = 3001;
    ctrl = require('./controllers/advice_controller.js')


app.use(bodyParser.json());

app.post('/api/advice', ctrl.create);
app.get('/api/advice', ctrl.read);
app.delete('/api/advice/:id', ctrl.delete);
app.put('/api/advice/:id', ctrl.update);

app.listen(port, () => console.log(`Listening on port${port}`));