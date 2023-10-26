import mongoose from "mongoose";
import slug from 'mongoose-slug-generator';
import mongooseDelete from 'mongoose-delete';

const Schema = mongoose.Schema;

const CourseSchema = new Schema(
  {
    name: { type: String },
    description: { type: String },
    image: { type: String },
    videoId: { type: String },
    level: { type: String },
    slug: { type: String, slug: 'name', unique: true },
  },
  {
    timestamps: true,
  }
);

mongoose.plugin(slug);
CourseSchema.plugin(mongooseDelete, { deletedAt: true, overrideMethods: 'all' });

export const CourseModel = mongoose.model('Course', CourseSchema);
