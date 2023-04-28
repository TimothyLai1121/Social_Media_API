const express = require("express");
const router = express.Router();
const User = require("../../models/User");

// Get all users
router.get("/", (req, res, next) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json("Error: " + err));
});

// Get a single user by ID
router.get("/:id", (req, res, next) => {
    User.findById(req.params.id)
        .then(user => res.json(user))
        .catch(err => res.status(400).json("Error: " + err));
});

// Create a new user
router.post("/", (req, res, next) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email
    });

    newUser
        .save()
        .then(() => res.json("User added!"))
        .catch(err => res.status(400).json("Error: " + err));
});

// Update an existing user
router.put("/:id", (req, res, next) => {
    User.findById(req.params.id)
        .then(user => {
            user.username = req.body.username;
            user.email = req.body.email;

            user
                .save()
                .then(() => res.json("User updated!"))
                .catch(err => res.status(400).json("Error: " + err));
        })
        .catch(err => res.status(400).json("Error: " + err));
});

// Delete a user
router.delete("/:id", (req, res, next) => {
    User.findByIdAndDelete(req.params.id)
        .then(() => res.json("User deleted."))
        .catch(err => res.status(400).json("Error: " + err));
});

module.exports = router;
