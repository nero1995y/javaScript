class UserService{
  userDb;
  getUser(userId){
    return userDb.slect(/*db query*/);
  }
}


class OrdeerService{
  orderDb
  createOrder(user, product){}

  getOrder(orderId){
    return orderDb.slect(/*db query*/);
  }
  updateOrder(order){
    orderDb.updateOrder(/**/)
  }
}

class paymentService {
  paymentClient;
  processPayment(orderRequest){
    return paymentClient
      .connect(/*url*/)
      .then(/*process payment*/)
      .catch(/*retry*/)
  }
}
