const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');
const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');
const DashboardController = require('./controllers/DashboardController');
const BookingController = require('./controllers/BookingController');
const ApprovalController = require('./controllers/ApprovalController');
const RejectionController = require('./controllers/RejectionController');



const routes = express.Router();
const upload = multer(uploadConfig);

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

routes.post('/sessions', SessionController.store );
routes.post('/spots', upload.single('thumbnail'), SpotController.store );
routes.post('/spots/:spot_id/bookings', BookingController.store ); //rota encadeada
routes.post('/bookings/:booking_id/approvals', ApprovalController.store);
routes.post('/bookings/:booking_id/rejections', RejectionController.store);


routes.get('/spots', SpotController.index );
routes.get('/dashboard', DashboardController.show );



module.exports = routes;