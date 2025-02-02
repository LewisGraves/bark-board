const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentSchema = new Schema(
    {
        text: {
            type: String,
            required: true
        },
        // owner: {
        //     type: Schema.Types.ObjectId,
		// 	ref: 'User',
		// 	required: true,
        // },
        // postedOn: {
        //     type: Schema.Types.ObjectId,
		// 	ref: 'Post',
		// 	required: true,
        // }
 
    },
    {
        timestamps: true
    }
)

module.exports = commentSchema