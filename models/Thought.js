const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ReactionSchema = require("./Reaction");

const ThoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: createdAt => createdAt.toLocaleString()
  },
  username: {
    type: String,
    required: true
  },
  reactions: [ReactionSchema]
});

const Thought = mongoose.model("Thought", ThoughtSchema);

module.exports = Thought;
