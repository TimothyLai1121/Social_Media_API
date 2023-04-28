const express = require("express");
const router = express.Router();
const Thought = require("../../models/Thought");

// Get all thoughts
router.get("/", async (req, res, next) => {
  try {
    const thoughts = await Thought.find();
    res.json(thoughts);
  } catch (err) {
    next(err);
  }
});

// Get a single thought by id
router.get("/:id", async (req, res, next) => {
  try {
    const thought = await Thought.findById(req.params.id);
    res.json(thought);
  } catch (err) {
    next(err);
  }
});

// Create a new thought
router.post("/", async (req, res, next) => {
  try {
    const thought = new Thought({
      thoughtText: req.body.thoughtText,
      username: req.body.username,
    });
    const savedThought = await thought.save();
    res.json(savedThought);
  } catch (err) {
    next(err);
  }
});

// Update a thought by id
router.put("/:id", async (req, res, next) => {
  try {
    const updatedThought = await Thought.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.json(updatedThought);
  } catch (err) {
    next(err);
  }
});

// Delete a thought by id
router.delete("/:id", async (req, res, next) => {
  try {
    const deletedThought = await Thought.findByIdAndDelete(req.params.id);
    res.json(deletedThought);
  } catch (err) {
    next(err);
  }
});

router.post("/:thoughtId/reactions", async (req, res, next) => {
  try {
    const updatedThought = await Thought.findByIdAndUpdate(
      req.params.thoughtId,
      { $push: { reactions: req.body } },
      { new: true }
    );
    res.json(updatedThought);
  } catch (err) {
    next(err);
  }
});

// DELETE to remove a reaction
router.delete("/:thoughtId/reactions/:reactionId", async (req, res, next) => {
  try {
    const updatedThought = await Thought.findByIdAndUpdate(
      req.params.thoughtId,
      { $pull: { reactions: { reactionId: req.params.reactionId } } },
      { new: true }
    );
    res.json(updatedThought);
  } catch (err) {
    next(err);
  }
});

module.exports = router;

