const { Schema, Types, model } = require('mongoose');
const {ObjectId} = require('mongoose').Types;


const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
      trim: true,
    },
    createdAt: {
      type: Date,
      default: Date.now, 
    },
    username: {
      type: String,
      required: true,
    },  
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
  }
);

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
  }
)

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
