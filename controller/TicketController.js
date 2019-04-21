//TicketController
const { Ticket } = require("../model");

module.exports = {
  create: async (req, res, next) => {
    try {
      const { ticket } = req.body

      //Create new user
      const newTicket = await new Ticket(ticket).save();

      //Send the response
      res.send({
        data: {
          ticket: theTicket.docs,
        },
        status: {
          code: 200,
          message: "Ticket Created",
          succeeded: true
        }
      })
    } catch(err){
      //Send the error
      next(err)
    }
  },
  findAll: async (req, res, next) => {
    try {
      const { search="", searchBy="message", order='desc', orderBy='createdAt' } = req.query;

      //Find, sort and paginate the Ticket
      const theTicket = await Ticket.paginate({ [searchBy]: { $regex : `${search}` } }, { sort: { [orderBy]: order } });

      //Send the response
      res.send({
        data: {
          ticket: theTicket.docs,
          total: theTicket.total
        },
        status: {
          code: 200,
          message: "Operation handle correctly",
          succeeded: true
        }
      })
    } catch(err){
      //Send the error
      next(err)
    }
  },
  findOne: async (req, res, next) => {
    try {
      const { id } = req.params;

      //Find a ticket by Id
      const theTicket = await Ticket.findById(id);

      //Send the response
      res.send({
        data: {
          ticket: theTicket
        },
        status: {
          code: 200,
          message: "Operation handle correctly",
          succeeded: true
        }
      })
    } catch(err){
      //Send the error
      next(err)
    }
  },
  buy: async (req, res, next) => {
    try {
      const purchase = req.body;

      const theTicket = await Ticket.findById(id);

      //Send the response
      res.send({
        data: {
          ticket: theTicket
        },
        status: {
          code: 200,
          message: "Operation handle correctly",
          succeeded: true
        }
      })
    } catch(err){
      //Send the error
      next(err)
    }
  }
}
