angular.module('video-player')
.component('videoListEntry', {
  bindings: {
    video: '<'
  },
  templateUrl: 'src/templates/videoListEntry.html'
});

// angular.module('video-player')
//
// .directive('videoListEntry', function() {
//   return {
//     scope: {
//       video: '<',
//       onClick: '<'
//     },
//     templateUrl: 'src/templates/videoListEntry.html',
//     controllerAs: 'ctrl',
//     bindToController: true,
//     controller: function($scope) {
//       console.log($scope);
//     },
//   };
// });
