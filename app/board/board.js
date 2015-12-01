'use strict';

angular
    .module('kanban.board', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/board', {
            templateUrl: 'board/board.html',
            controller: 'BoardCtrl',
            resolve: {
                stories: function () {
                    var stories = [];

                    for (var i = 1; i <= 3; ++i) {
                        stories.push({
                            title: "Story " + i,
                            status: "To Do",
                            description: "Do something with this."
                        });
                        stories.push({
                            title: "Story " + i * 5,
                            status: "Testing",
                            description: "Lorem Ipsum and junk."
                        });
                    }

                    return stories;
                }
            }
        });
    }])

    .controller('BoardCtrl', ['$scope', 'stories', function ($scope, stories) {
        $scope.models = {
            selected: null,
            statuses: {
                'To Do': { stories: [], wipLimit: null },
                Designing: { stories: [], wipLimit: 5 },
                Engineering: { stories: [], wipLimit: 5 },
                Reviewed: { stories: [], wipLimit: 5 },
                Testing: { stories: [], wipLimit: 5 },
                Beta: { stories: [], wipLimit: 5 },
                Done: { stories: [], wipLimit: 5 }
            }
        };

        /**
         * Update the status of the story to match the column name.
         * Checks the WIP limit and aborts if this column is full.
         * @param item
         * @param status
         * @param statusName
         * @returns {object|bool} item or false if over limit
         */
        $scope.updateStatusOnDrop = function (item, status, statusName) {
            if (!status.wipLimit || status.stories.length < status.wipLimit) {
                item.status = statusName;
                return item;
            } else {
                return false;
            }
        };

        angular.forEach(stories, function (story) {
            if (story.status && $scope.models.statuses[story.status]) {
                $scope.models.statuses[story.status].stories.push(story);
            }
        });
    }]);
