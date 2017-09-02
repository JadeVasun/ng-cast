angular.module('video-player')
  .controller('appCtrl', function (youTube) {
    let controller = this;

    this.videos = window.exampleVideoData;
    this.videoplay = window.exampleVideoData[0];
    //console.log(this.videoplay);
    this.submitClick = function (value) { 
      console.log(value);
      youTube.search(value, controller.videoSelector);
    };

    this.$onInit = function () {
      youTube.search('kobe bryant', controller.videoSelector);
    };

    this.videoSelector = function (data) {
      controller.videos = data;
      controller.videoplay = data[0];
    };

    this.videoClick = (video) =>
      this.videoplay = video;
  })

  .component('app', {
    templateUrl: 'src/templates/app.html',
    controller: 'appCtrl'
  });

  
