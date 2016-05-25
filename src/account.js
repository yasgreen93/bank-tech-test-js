function Account(transactionClass) {
  this.balance = 0;
  this.transactions = [];
  this.transactionClass = transactionClass;
}
var transactionObject;

Account.prototype.deposit = function() {
  transactionObject = new this.transactionClass();
};
