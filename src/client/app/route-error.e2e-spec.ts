describe('Testing of the page of route error', function() {

  beforeEach(() => {
    browser.get('http://localhost:5555/');
  });

  it('should be header with an error', function() {

    var errorHead = element(by.tagName('h1'));
    expect(errorHead.getText()).toEqual('Forget Password!');
  });
});
