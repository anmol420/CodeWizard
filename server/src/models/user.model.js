import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    token: {
        type: Number,
        default: 0,
    },
    rank: {
        type: String,
        default: "Unranked",
    },
    rankUrl: {
        type: String,
        default: "https://i.imgur.com/bYzbDwg.png",
    },
}, {
    timestamps: true,
});

const User = mongoose.model("User", userSchema);

export default User;