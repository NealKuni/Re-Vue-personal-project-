const ReviewController = require('../controllers/review.controller'); 
const { authenticate } = require('../config/jwt.config');




module.exports = (app) => {
    app.get('/api/', ReviewController.getAll);
    app.post('/api/review/post',  authenticate, ReviewController.post);
    app.get('/api/review/user', ReviewController.getAllByLoggedInUserId);  
    app.get('/api/review/:id', ReviewController.getOne);
    app.put('/api/review/update/:id',  authenticate, ReviewController.update);
    app.delete('/api/review/delete/:id', authenticate, ReviewController.delete);  
}

