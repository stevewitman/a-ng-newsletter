var app = angular.module('myApp', []);

app.controller('PlayerController', ['$scope', function($scope) {
  $scope.playing = false;
  $scope.audio = document.createElement('audio');
  // $scope.audio.src = '/media/npr.mp3';
  $scope.audio.src = 'http://pd.npr.org/npr-mp4/npr/sf/2013/07/20130726_sf_05.mp4?orgId=1&topicId=1032&ft=3&f=61';

  $scope.play = function() {
    $scope.audio.play();
    $scope.playing = true;
  };
  $scope.stop = function() {
    $scope.audio.pause();
    $scope.playing = false;
  };
  $scope.audio.addEventListener('ended', function() {
    $scope.$apply(function() {
      $scope.stop()
    });
  });
}]);

app.controller('RelatedController', ['$scope', function ($scope) {

}]);

app.controller('MyController', function ($scope) {
  $scope.person = { name: "Steve"};
  var updateClock =  function () {
    $scope.clock = new Date();
  };
  var timer = setInterval(function () {
    $scope.$apply(updateClock);
  }, 1000);
  updateClock();
});

app.controller('DemoController', function($scope) {
  $scope.counter=0;
  $scope.add = function(amount) {
    $scope.counter += amount;
  };
  $scope.subtract = function(amount) {
    $scope.counter -= amount;
  };
});
