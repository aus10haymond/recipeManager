const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;


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

UserSchema.methods.generateHash = function (password) {
    this.password = bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
    return this.password
}

UserSchema.methods.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
}
const User = mongoose.model('User', UserSchema);

module.exports = User;