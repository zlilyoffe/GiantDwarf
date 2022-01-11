import mongoose from 'mongoose';

export const groupSchema = new mongoose.Schema({
    groupName: {
    type: String,
    required: true,
  },
  numberOfParticipants: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

export const groupSchemaModel = mongoose.model('groups', groupSchema);

