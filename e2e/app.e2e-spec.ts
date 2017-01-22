import { PhBalancedPage } from './app.po';

describe('ph-balanced App', function() {
  let page: PhBalancedPage;

  beforeEach(() => {
    page = new PhBalancedPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
