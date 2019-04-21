//UserController
const { User, Ticket } = require("../model");

module.exports = {
  create: async (req, res, next) => {
    try {
      const user = req.body;

      console.log(user);

      //Create new user
      const newUser = await new User(user).save();

      //Send the response
      res.send({
        data: {
          user: newUser
        },
        status: {
          code: 200,
          message: "User Created",
          succeeded: true
        }
      })
    } catch(err) {
      //Send the error
      next(err)
    }
  },
  findOne: async (req, res, next) => {
    try {
      const user = req.body;
      const theUser = await User.findOne({ username: user.email });

      if(theUser){
        theUser.comparePassword(user.password, function(err, isMatch) {
            if (err) throw err;
            if(isMatch){
              res.send({
                data: {
                  user: theUser
                },
                status: {
                  code: 200,
                  message: "Operation handle correctly",
                  succeeded: true
                }
              })
            } else {
              res.send({
                status: {
                  code: 403,
                  message: "User is not authorized",
                  succeeded: false
                }
              })
            }
        });
      } else {
        res.send({
          status: {
            code: 404,
            message: "User does not exist",
            succeeded: false
          }
        })
      }

      // const allTickets = await Ticket.find();
      // let tickets = [];
      //
      // for(let item of theUser.tickets){
      //   tickets.push(await Ticket.findById(item));
      // }
    } catch(err){
      //Send the error
      next(err)
    }
  }
}
