function greeting(user){
    return `H1 ${user.fullName()}`;
    
}

function goodbye(user){
    return `See you next time ${user.fullName()}`;
}


class user{

    fullName(){
        return `${this.firstName} ${this.lastName}`;
    }
}