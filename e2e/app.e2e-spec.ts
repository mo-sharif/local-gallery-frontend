import { ImgAppPage } from './app.po';

describe('img-app App', function() {
  let page: ImgAppPage;

  beforeEach(() => {
    page = new ImgAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
