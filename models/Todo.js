const mongoose = require('mongoose');

const TodosSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    dueDate: {
        type: Date,
        default: Date.now,
    },
}, {
    timestamps: true,
    collection: "todos",
});

module.exports = mongoose.model("Todo", TodosSchema);