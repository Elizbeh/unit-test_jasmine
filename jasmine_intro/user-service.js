class UserService {
    getUserById(id) {
       return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)  
    }
}

export default UserService