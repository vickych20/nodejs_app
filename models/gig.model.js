const mongoose = require("mongoose");

const GigSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    totalStar: {
        type: Number,
        required:0
      
    },
    starNumber: {
      type: Number,
      required: 0,
    },
    cover: {
      type: String,
      required: true,
    },
    images: {
      type: String,
      required: false,
    },
    cat: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    shortDesc: {
      type: Number,
      required: true,
    },
    deliveryTime: {
      type: Number,
      required: true,
    },
    revisionNumber: {
      type: Number,
      required: true,
    },
    features: {
      type: [String],
      required: false,
    },
    sales: {
      type: Number,
      default:0,
    },
  },
  {
    timestamps: true,
  }
);

const gigModels = mongoose.model("gigModels", GigSchema);

module.exports = gigModels;
