describe("Account", function() {
  var transactionClass;
  var account;

  beforeEach(function() {
    transactionClass = Transaction;
    account = new Account(transactionClass);
  });

  it("should initialize with a balance of 0", function() {
    expect(account.balance).toEqual(0);
  });

  it("should initialize with am empty transactions array", function() {
    expect(account.transactions).toEqual([]);
  });

  it("should have injected a transaction class", function() {
    expect(account.transactionClass).toEqual(Transaction);
  });

  describe("#deposit", function() {
    it("should instantiate a new Transaction object", function() {
      account.deposit(100, "24.05.16");
      expect(account.transactionObject).toEqual(Transaction);
    });
  });
});
