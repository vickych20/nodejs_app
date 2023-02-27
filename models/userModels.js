const mongoose = require('mongoose');

const userModelsSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      //   match: [
      //     /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      //   ],
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      unique: true,
    },
    photo: {
      type: String,
      required: true,
      default:
        "https://res.cloudinary.com/jerrick/image/upload/f_jpg,fl_progressive,q_auto,w_1024/61274adffc9ff6001d2f6b81.jpg",
    },
    phone: {
      type: String,
     default:"+91"
    },
    bio: {
      type: String,
      required: 'bio',
    },
    isSeller: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const UserModels = mongoose.model('userModels', userModelsSchema)

module.exports = UserModels