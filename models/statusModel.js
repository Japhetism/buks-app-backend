const mongoose = require('mongoose');
const validator = require('validator');

const statusSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
    },
    supportTicket: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SupportTicket',
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

const Status = mongoose.model('Status', statusSchema);
module.exports = Status;