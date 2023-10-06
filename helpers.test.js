describe("Utilities test (with setup and tear-down)", function() {
    beforeEach(function () {
      billAmtInput.value = 75;
      tipAmtInput.value = 14.00;
      submitPaymentInfo();
    });
  
    it('should calculate the total tip amount for all payments using sumPaymentTotal()', function () {
      expect(sumPaymentTotal('tipAmt')).toEqual(20);
  
      billAmtInput.value = 500;
      tipAmtInput.value = 100;
  
      submitPaymentInfo();
  
      expect(sumPaymentTotal('tipAmt')).toEqual(114);
    });
  
    it('should calculate the total bill amount for all payments using sumPaymentTotal()', function () {
      expect(sumPaymentTotal('billAmt')).toEqual(100);
  
      billAmtInput.value = 425;
      tipAmtInput.value = 80;
  
      submitPaymentInfo();
  
      expect(sumPaymentTotal('billAmt')).toEqual(1000);
    });
  
    it('should calculate the total tip percent using sumPaymentTotal()', function () {
      expect(sumPaymentTotal('tipPercent')).toEqual(20);
  
      billAmtInput.value = 134;
      tipAmtInput.value = 40;
  
      submitPaymentInfo();
  
      expect(sumPaymentTotal('tipPercent')).toEqual(22);
    });
  
    it('should calculate the tip percent of a single tip using calculateTipPercent()', function () {
      expect(calculateTipPercent(200, 40)).toEqual(20);
      expect(calculateTipPercent(125, 37.50)).toEqual(30);
    });
  
    it('should append table data to a table row using appendTd(tr, value)', function () {
      let newTr = document.createElement('tr');
  
      appendTd(newTr, 'test');
  
      expect(newTr.children.length).toEqual(1);
      expect(newTr.firstChild.innerHTML).toEqual('test');
    });
  
    it('should append a delete button using appendDeleteBtn(tr, type)', function () {
      let newTr = document.createElement('tr');
  
      appendDeleteBtn(newTr);
  
      expect(newTr.children.length).toEqual(1);
      expect(newTr.firstChild.innerHTML).toEqual('X');
    });
  
    afterEach(function() {
      billAmtInput.value = '';
      tipAmtInput.value = '';
      paymentTbody.innerHTML = '';
      summaryTds[0].innerHTML = '';
      summaryTds[1].innerHTML = '';
      summaryTds[2].innerHTML = '';
      serverTbody.innerHTML = '';
      allPayments = {};
      paymentId = 0;
    });
  });
  