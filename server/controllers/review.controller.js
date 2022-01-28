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
            createdBy: userId
        })
        
        // newReview.createdBy = userId;
        console.log(`image uploaded: ${req.image}`)
        console.log(newReview)

        newReview.save()
            .then((review) => {
                console.log(review)
                res.json({
                    review: review.image,
                    message: "Successfuly created post"
                })
            })
            .catch((err) => {
                console.log(err)
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

    getAllByLoggedInUserId: (req,res) => {
        const decodedJWT = jwt.decode(req.cookies.usertoken, { complete : true });
        const userId = decodedJWT.payload._id;

        console.log("inside get all reviews");
        console.log(decodedJWT.payload)
        Review.find({createdBy: userId})
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
        Review.findById(req.params.id)             
            .then((updatedReview) => {
                updatedReview.title = req.body.title;
                updatedReview.location = req.body.location;
                updatedReview.review = req.body.review;
                updatedReview.image = req.file.originalname;

                updatedReview.save()
                .then(() => {
                    console.log(updatedReview)
                    res.json({
                        updatedReview,
                        message: "REVIEW HAS BEEN UPDATED"
                    })
                })
                .catch((err) => {
                    console.log(err);
                    res.status(400).json(err);
                })
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
