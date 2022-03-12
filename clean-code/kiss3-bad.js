class UserOrderService{
  userDb;
  orderDb;
  paymentClient;

  processUserOrder(userId, orderId) {
    const user = userDb.slect(/*db query*/);
      if (!user) {
        throw Error('...');
      }

    const order = orderDb.slect(/*db query*/);
      if (!order) {
        throw Error('...');
      }
  }
  paymentClient
    .connect(/* url */)
    .then(/* process payment */)
    .catch(/*retry */);
  
  orderDb.updateOrder(order, PAID);
}
