angular.module('video-player')
.component('video-list', {
  controller: function($window) {
    this.videos = $window.exampleVideoData;
  },
  templateUrl: 'src/templates/videoList.html'
});

// angular.module('video-player')
//
// .directive('videoList', function() {
//   return {
//     scope: {
//       videos: '<',
//       onClick: '<'
//     },
//     templateUrl: 'src/templates/videoList.html',
//     controllerAs: 'ctrl',
//     bindToController: true,
//     controller: function($scope) {
//       console.log($scope);
//     },
//   };
// });
