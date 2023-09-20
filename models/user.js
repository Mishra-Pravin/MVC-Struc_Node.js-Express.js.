
// create  model interface to represent user 

class User {
    constructor(id, name, email) {
      this.id = id;
      this.name = name;
      this.email = email;
    }
}
  
module.exports = User;
