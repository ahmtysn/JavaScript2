function server() {
  let users = [
    { username: 'andre', password: 'password' },
    { username: 'hyf', password: 'asd' },
  ];
  function authenticate(username, password) {
    let matchingUser = users.find(function(user) {
      // console.log(user);
      if (user.username === username && user.password === password) return true;
      else return false;
    });
    // console.log(matchingUser);
    if (typeof matchingUser === 'object') return true;
    else return false;
  }
  function register(username, password) {
    //add the new user to the users list
    let newUser = { username: username, password: password };
    users.push(newUser);
    // console.log(users);
  }
  return {
    authenticate,
    register,
  };
}
let server1 = server();
server1.register('foo', 'bar');
console.log(server1.authenticate('foo', 'bar')); // true
console.log(server1.authenticate('andre', 'password')); // true
console.log(server1.authenticate('andre1', 'password')); // false
console.log(server1.authenticate('andre', 'yxc')); // false
