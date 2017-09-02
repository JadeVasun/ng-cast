angular.module('video-player')
  .service('youTube', function($http) {
    this.search = function (text, cb) {
      $http({
        method: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/search',
        params: {
          key: 'AIzaSyB59kK3qgWdSfG8xczQK9W8gvkD2IRPcMA',
          q: text,
          maxResults: 5,
          part: 'snippet',
          type: 'video',
          videoEmbeddable: 'true'
        }
      })
        .then(function(datas) {
          cb(datas.data.items);
        });
    };   
  });
