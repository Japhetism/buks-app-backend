const SupportTicket = require('../models/supportTicketModel');
const base = require('./baseController');

exports.createSupportTicket = base.createOne(SupportTicket);
exports.getAllSupportTickets = base.getAll(SupportTicket);
exports.getSupportTicket = base.getOne(SupportTicket);

// Don't update password on this 
exports.updateSupportTicket = base.updateOne(SupportTicket);
//exports.deleteRole = base.deleteOne(Role);