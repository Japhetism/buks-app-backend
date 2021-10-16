const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

router
    .route('/comments')
    .post(commentController.createComment)
    .get(commentController.getAllComments);


router
    .route('/comments/:id')
    .get(commentController.getComment)
    .patch(commentController.updateComment)
    .delete(commentController.deleteComment);

module.exports = router;