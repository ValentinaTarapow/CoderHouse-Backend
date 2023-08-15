const UserManager = require('./managers/usersManager')

const userManager = new UserManager('./users.json')

async function Test() {
  const user1 = {
    name: 'name 1',
    lastName: 'lastName1',
    age: 24,
    email: 'email1@gmail.com',
    password: 'pass1',
    address: 'address 1'
  }
  const user2 = {
    name: 'Name 2',
    lastName: 'lastName2',
    age: 24,
    email: 'email2@gmail.com',
    password: 'pass2',
    address: 'address 2'
  }
  const user3 = {
    name: 'Name 3',
    lastName: 'lastName3',
    age: 24,
    email: 'email3@gmail.com',
    password: 'pass3',
    address: 'address 3'
  }
  const user4 = {
    name: 'Name 4',
    lastName: 'lastName4',
    age: 24,
    email: 'email4@gmail.com',
    password: 'pass4',
    address: 'address 4'
  }
  const user5 = {
    name: 'name5',
    lastName: 'lastName5',
    age: 24,
    email: 'email5@gmail.com',
    password: 'pass5',
    address: 'address 5'
  }
  const user6 = {
    name: 'name6',
    lastName: 'lastName6',
    age: 24,
    email: 'email6@gmail.com',
    password: 'pass6',
    address: 'address 6'
  }
  const user7 = {
    name: 'name7',
    lastName: 'lastName7',
    age: 24,
    email: 'email7@gmail.com',
    password: 'pass7',
    address: 'address 7'
  }
  const user8 = {
    name: 'name8',
    lastName: 'lastName8',
    age: 24,
    email: 'email8@gmail.com',
    password: 'pass8',
    address: 'address 8'
  }
  const user9 = {
    name: 'name9',
    lastName: 'lastName9',
    age: 24,
    email: 'email9@gmail.com',
    password: 'pass9',
    address: 'address 9'
  }
  const user10 = {
    name: 'name10',
    lastName: 'lastName10',
    age: 24,
    email: 'email10@gmail.com',
    password: 'pass10',
    address: 'address 10'
    }


//add users
  // await userManager.createUser(user1).then(data => console.log(data))
  // await userManager.createUser(user2).then(data => console.log(data))
  // await userManager.createUser(user3).then(data => console.log(data))
  // await userManager.createUser(user4).then(data => console.log(data))
  // await userManager.createUser(user5).then(data => console.log(data))
  // await userManager.createUser(user6).then(data => console.log(data))
  // await userManager.createUser(user7).then(data => console.log(data))
  // await userManager.createUser(user8).then(data => console.log(data))
  // await userManager.createUser(user9).then(data => console.log(data))
  // await userManager.createUser(user10).then(data => console.log(data))


//get users
  // await userManager.getUsers().then(data => console.log(data))

//get user by id
  // await userManager.getUserById(2).then(data => console.log(data))

//validate user
  // await userManager.validateUser('email2@gmail.com', 'wrongpass2' )

//delete user
  // await userManager.deleteUser(1)
}
Test()