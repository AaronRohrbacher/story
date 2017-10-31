import { StoryPage } from './app.po';

describe('story App', () => {
  let page: StoryPage;

  beforeEach(() => {
    page = new StoryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
