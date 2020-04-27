const express = require('express');


const routes = express.Router();




//GET, POST, PUT, DELETE
//req.query  - Acessar query params (para filtros)
//req.params - Acessar route params (para edição, delete)
//req.body   - Acessar o corpo da requisição
/*
app.get('/', (req, res) => {
    return res.json({ idade: req.query.idade });
});
*/
/*
app.put('/users/:id', (req, res) => {
    return res.json({ id: req.params.id });
});
*/

routes.post('/users', (req, res) => {
    return res.json(req.body);
});



module.exports = routes;