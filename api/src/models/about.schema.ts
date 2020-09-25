import * as mongoose from 'mongoose';

export const AboutSchema = new mongoose.Schema({
  title: String,
  description: String,
  img: String,
  skills: [
    {
      id: String,
      level: {
        type: Number,
        min: 0,
        max: 100,
      },
      label: {
        type: String,
        required: [true, 'Skill must have a name to descripe it']
      }
    }
  ]
});