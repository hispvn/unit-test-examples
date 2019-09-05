const helper = require('./global_setup');

describe('Test Electron app', () => {
  let app ;

  beforeEach( async() => {
    app = await helper.startApp();
  });

  afterEach( async () => {
    await helper.stopApp(app);
  });

  it('it should open a new window', async() => {
      await app.client.waitUntilWindowLoaded()
      .getWindowCount()
      .should.eventually.equal(1);
  }); 

  it('should enter value to text fields', async() => {
    await app.client.waitUntilWindowLoaded()
    .setValue("#firstName", "Tom")
    .setValue("#lastName", "Hanks")
    .click("#btnSubmit")
    .getText("#userName").should.eventually.equal("Tom Hanks");
  });

});

