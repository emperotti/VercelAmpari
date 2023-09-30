const express = require('express');
const tasksController = require('./controllers/tasksController');
const taskMiddleware = require('./middlewares/tasksMiddleware');
const router = express.Router();

router.get('/dogs', tasksController.getAll);
router.post('/dogs', taskMiddleware.validateBody, tasksController.createDogs);
router.delete('/dogs/:id', tasksController.deleteDog);
router.put('/dogs/:id', taskMiddleware.validateBody, tasksController.updateDog);

module.exports = router;