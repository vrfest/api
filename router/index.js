const { UserController, TicketController } = require("../controller");

module.exports = (app) => {
  //Create a User
  app.post("/users/create", UserController.create)
  //Find a User
  app.get("/user", UserController.findOne)
  //Create a Ticket
  app.post("/tickets/create", TicketController.create)
  //Update a User by Id
  app.get("/tickets/:id", TicketController.findOne)
  //Delete a post by Id
  app.get("/tickets", TicketController.findAll)
}
