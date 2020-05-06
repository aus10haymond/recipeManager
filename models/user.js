const bcrypt = require("bcryptjs");
const Schema = mongoose.Schema;
const mongoose = require("mongoose");

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

UserSchema.methods.generateHash = function(password){
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
}

UserSchema.methods.validPassword = function(password){
    return bcrypt.compareSync(password, this.password);
}
const User = mongoose.model('User', UserSchema);

module.exports = User;