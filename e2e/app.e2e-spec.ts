import {AngularFullPage} from './app.po';

describe('angular-full App', () => {
  let page: AngularFullPage;

  beforeEach(() => {
    page = new AngularFullPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
