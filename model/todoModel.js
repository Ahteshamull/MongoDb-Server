// info: const { Schema, default: mongoose } = require("mongoose")
// const TodoSchema = new Schema({
//     task: {
//         type:String,
//     }
// })
// module.exports = mongoose.Model("Task",TodoSchema)
const { Schema, default: mongoose } = require("mongoose")
const TodoSchema = new Schema({
    task: {
        type:String
    }
})
module.exports = mongoose.model("Todo",TodoSchema)