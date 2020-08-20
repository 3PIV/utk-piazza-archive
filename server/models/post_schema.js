const { Schema, model } = require('mongoose');

const childSchema = new Schema(
    {
        created: {
            type: String,
            required: [true, 'created field is required'],
        },
        id: {
            type: String,
            required: [true, 'id field is required'],
        },
        type: {
            type: String,
            required: [true, 'type field is required'],
        },
        subject: {
            type: String,
            required: [false, 'subject field is not required'],
        }
    }
);
childSchema.add({
    children: [childSchema],
})


const messageSchema = new Schema(
    {
        anon: {
            type: String,
            required: [true, 'anon field is required'],
        },
        uid: {
            type: String,
            required: [true, 'uid field is required'],
        },
        subject: {
            type: String,
            required: [true, 'subject field is required'],
        },
        created: {
            type: String,
            required: [true, 'created field is required'],
        },
        content: {
            type: String,
            required: [true, 'content field is required'],
        },
    }
);

const postSchema = new Schema(
    {
        children: {
            type: [childSchema],
            required: [true, 'children field is required'],
        },
        created: {
            type: String,
            required: [true, 'created field is required'],
        },
        id: {
            type: String,
            required: [true, 'id field is required'],
        },
        type: {
            type: String,
            required: [true, 'type field is required'],
        },
        message: {
            type: messageSchema,
            required: [true, 'subject field is required'],
        },
        t: {
            type: Number,
            required: [true, 't field is required'],
        },
        tags: {
            type: Array(String),
            required: [true, 'tags fields is required'],
        }
    },
    { collection: 'posts' },
);

module.exports = model('post', postSchema);
