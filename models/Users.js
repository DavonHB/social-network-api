const { Schema, model } = require('mongoose');

const UsersSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            // email validate regex
            match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/]
        },
        thoughts: [{
            type: Schema.Types.ObjectId,
            ref: 'Thoughts'
        }],
        friends: [{
            type: Schema.Types.ObjectId,
            ref: 'Users'
        }]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true,
        },
        id: false
    }
);

// get total count of friends
UsersSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});

// users model using users schema
const Users = model('Users', UsersSchema);

module.exports = Users;