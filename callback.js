//callback hell
class UserStorage{
  loginUser(id,password, onSuccess, onError) {
    setTimeout(()=> {
        if (
          (id === 'ellie' && password === 'dream')||
          (id === 'coder' && password === 'academy')
        ) {
          onSuccess(id);  
        } else {
          onError(new Error('not found'));
        }
    }, 2000);
  }

  getRoles(user, onSuccess, onError){
    setTimeout(() =>{
      if(user === 'ellie'){
        onSuccess({ name: 'ellie', role: 'admin'});
      } else {
        onError(new Error('no access'));
      }
    }, 1000);
  }
}


const UserStorage = new UserStorage();
const