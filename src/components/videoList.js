angular.module('video-player')

  .controller('videoCtrl', function($scope) {
    console.log(this);
  })
  
  .component('videoList', {
  // TODO
    templateUrl: 'src/templates/videoList.html',
    bindings: {
      videos: '<',
      videoclick: '<'
    },
    controller: 'videoCtrl'
  });

  
