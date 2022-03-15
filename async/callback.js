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


const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your pasword');
userStorage.loginUser(
  id,
  password,
  user => {
    userStorage.getRoles(
      user,
      userWithRole => {
          alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
      }, //사용자가 잘 받아 왔을때 실행하는 코드블럭
      error => {
        console.log(error);
      }
    );
  },
  error => {
    console.log(error);
  }
);

//문제점 콜백안에서 콜백하고 콜백하고 이게 콜백 지옥이다. ! 
//가독성이 헬이다. 유지보수힘들다
