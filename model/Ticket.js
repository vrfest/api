var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


const TicketSchema = new Schema({
  artist: { type: String, required: true, index: { unique: true } },
  img: {type: String, required: true},
  description: { type: String, required: true},
  type: {type: String, required: true, enum: ['celeb', 'artist']},
  tracks: [],
  date: { type: Number, required: true },
  priceVRT: { type: Number, required: true},
  priceUSD: { type: Number, required: true},
});

module.exports = mongoose.model('Ticket', TicketSchema);
