import { A2componentsdocPage } from './app.po';

describe('a2componentsdoc App', function() {
  let page: A2componentsdocPage;

  beforeEach(() => {
    page = new A2componentsdocPage();
  });
 
  // Ensure Header area content
  it('check header area', () => {
    page.navigateTo();
    expect(page.getHeaderText()).toEqual('HEADER AREA');
  });

  // Ensure left side area content
  it('check left side area', () => {
    page.navigateTo();
    expect(page.getLeftAreaText()).toEqual('LEFT SIDE AREA');
  });

 // Ensure center area has records or not
  it('check right side area', () => {
    page.navigateTo();
    page.getCenterAreaText()
    .then((value:any) => {
                  expect(value).toEqual('1');
                }
            );
  });

});
