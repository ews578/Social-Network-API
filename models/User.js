const { Schema, model } = require('mongoose');


// Schema to create User model
const userSchema = new Schema(
  {
      username: {
      type: String,
      unique: true,
      required: true,
      trimmed: true
    },
    email:{
      type: String,
      unique: true,
      required: true,
      validate: {
        validator: function (v) {
          return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(v);
        },
        message: (props) => `${props.value} is not a valid email address!`,
      },
    },
    
  
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Thought"
      }
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "User"
      }
    ]
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);
userSchema.virtual("friendCount").get(function(){
  return this.friends.length
})
const User = model('User', userSchema);

module.exports = User;
