import mongoose from 'mongoose';

const UserSchema = mongoose.Schema({
    id: Number,
    username: String,
    password: String
}, {
    timestamp: true
});

module.exports = mongoose.model('User', UserSchema);
