import { A2componentsdocPage } from './app.po';

describe('a2componentsdoc App', function() {
  let page: A2componentsdocPage;

  beforeEach(() => {
    page = new A2componentsdocPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
