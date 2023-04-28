const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ReactionSchema = require("./Reaction");

const ThoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    maxlength: 280
  },
  username: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: createdAt => createdAt.toLocaleString()
  },
  reactions: [ReactionSchema]
});

ThoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

module.exports = mongoose.model("Thought", ThoughtSchema);
