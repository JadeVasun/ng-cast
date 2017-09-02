angular.module('video-player')
  .controller('appCtrl', function () {
    this.videos = window.exampleVideoData;
    this.videoplay = window.exampleVideoData[0];
    console.log(this.videoplay);
  })

  .component('app', {
    templateUrl: 'src/templates/app.html',
    controller: 'appCtrl'
  });

  
