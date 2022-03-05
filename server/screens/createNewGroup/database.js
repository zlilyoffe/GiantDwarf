import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

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
  participants: {
    type: Array,
    default: [],
  }
});

export const groupSchemaModel = mongoose.models.groups || mongoose.model('groups', groupSchema);

