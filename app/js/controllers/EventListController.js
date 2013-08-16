'use stricet';

var eventsApp = angular.module('eventsApp',[]);

eventsApp.controller("EventListController",function($scope, $location, eventData){
    $scope.event = eventData.getAllEvents();

    $scope.navigateToDetails = function(event) {
        $location.url('/event/' + event.id);
    }
});