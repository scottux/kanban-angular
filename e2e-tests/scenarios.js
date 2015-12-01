'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('Kanban Board', function() {


  it('should automatically redirect to /board when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/board");
  });


  describe('Kanban Board', function() {

    beforeEach(function() {
      browser.get('index.html#/board');
    });


    //it('should render board when user navigates to /board', function() {
    //  expect(element.all(by.css('[ng-view] p')).first().getText()).
    //    toMatch(/partial for view 1/);
    //});

  });

});
