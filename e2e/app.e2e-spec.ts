import { PrimengHelloPage } from './app.po';

describe('primeng-hello App', function() {
  let page: PrimengHelloPage;

  beforeEach(() => {
    page = new PrimengHelloPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
