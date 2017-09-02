angular.module('video-player')

  .controller ('videoListEntryCtrl', function ($scope) {
  //console.log(this);
  })

  .component('videoListEntry', {
  // TODO
    templateUrl: 'src/templates/videoListEntry.html',
    bindings: {
      video: '<'
    },
    controller: 'videoListEntryCtrl'
  });
