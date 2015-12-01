'use strict';

describe('kanban.board module', function() {

  beforeEach(module('kanban.board'));

  describe('board controller', function(){

    it('should exist', inject(function($controller) {
      //spec body
      var view1Ctrl = $controller('BoardCtrl');
      expect(view1Ctrl).toBeDefined();
    }));

  });
});
