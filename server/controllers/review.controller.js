const Review = require("../models/review.model");
const jwt = require('jsonwebtoken');



module.exports = {
    post: (req, res) => {
        const decodedJWT = jwt.decode(req.cookies.usertoken, { complete : true });
        const userId = decodedJWT.payload._id;

        // assign "createdBy" to userId. This is how we'll track which user created this review. 
        const newReview = new Review({
            title: req.body.title,
            location: req.body.location,
            review: req.body.review,
            image: req.file.originalname,
            createdBy: null
        })
        
        newReview.createdBy = userId;
        console.log(`file uploaded: ${req.file}`)
        console.log(newReview)

        newReview.save()
            .then((review) => {
                console.log(review)
                res.json({
                    review,
                    message: "Successfuly created post",
                    reviewID: review._id,
                    payload: decodedJWT
                })
            })
            .catch((err) => {
                console.log(err.field);
                res.status(400).json(err);
            })
    },

    getOne: (req, res) => {
        console.log("inside get one review")
        console.log("looking for id: " + req.params.id)
        Review.findOne({_id:req.params.id})
            .populate("createdBy", "firstName")
            .then(review => {
                console.log(review);
                res.json(review)
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            })
    },

    getAll: (req,res) => {
        console.log("inside get all reviews");
        Review.find({})
            .populate("createdBy", "firstName")
            .then((allReviews) => {
                console.log(allReviews);
                res.json(allReviews);
            })
            .catch((err) => {
                console.log(err);
                res.status(400).json(err);
            })
    },

    update: (req, res) => {
        console.log("inside update review")
        console.log("looking for id: " + req.params.id)
        Review.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
          })
            .then((updatedReview) => {
              console.log(updatedReview);
              res.json(updatedReview);
            })
            .catch((err) => {
              console.log(err);
              res.status(400).json(err);
            })
    },

    delete: (req, res) => {
        console.log("inside delete review");
        console.log("looking for id: " + req.params.id)
        Review.findByIdAndDelete({_id:req.params.id})
          .then((deletedReview) => {
            console.log(deletedReview)
            res.json(deletedReview)
          })
          .catch((err) =>{
            console.log(err)
            res.status(400).json(err)
          })
    }
}
