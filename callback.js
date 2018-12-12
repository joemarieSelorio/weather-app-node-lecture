let getUser = (id, callback) =>{
    let user = {
        id: id,
        name: 'Joms'
    }
    callback(user);
};

getUser(21, (user)=>{
    console.log(user);
})