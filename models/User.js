const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create Schema
const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = User = mongoose.model('user', UserSchema);

// UserSchema.pre('remove', function(next) {
//   console.log('user removed and depedencies')
//
//     TripSchema.remove({trip_id: this._id}).exec();
//     StopSchema.remove({stop_id: this._id}).exec();
//     DaySchema.remove({day_id: this._id}).exec();
//     EventSchema.remove({event_id: this._id}).exec();
//     next();
// });


// // to finish
//
// UserSchema.pre('remove', function(next) {
//     // 'this' is the client being removed. Provide callbacks here if you want
//     // to be notified of the calls' result.
//     TripSchema.remove({user_id: this._id}).exec();
//     StopSchema.remove({user_id: this._id}).exec();
//     DaySchema.remove({user_id: this._id}).exec();
//     EventSchema.remove({user_id: this._id}).exec();
//     next();
// });
