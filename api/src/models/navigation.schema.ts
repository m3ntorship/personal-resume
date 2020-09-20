import * as mongoose from 'mongoose';

export const NavigationSchema = new mongoose.Schema({
  links: [
    {
      title: String,
      linkUrl: String,
    }
  ],
  downloadbtn: String,
});