angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('uWAISAPPSTRAINING', {
    url: '/page1',
    templateUrl: 'templates/uWAISAPPSTRAINING.html',
    controller: 'uWAISAPPSTRAININGCtrl'
  })

  .state('androidOS', {
    url: '/page2',
    templateUrl: 'templates/androidOS.html',
    controller: 'androidOSCtrl'
  })

  .state('aPPLE', {
    url: '/page3',
    templateUrl: 'templates/aPPLE.html',
    controller: 'aPPLECtrl'
  })

  .state('contactUs', {
    url: '/page4',
    templateUrl: 'templates/contactUs.html',
    controller: 'contactUsCtrl'
  })

  .state('testPage', {
    url: '/page5',
    templateUrl: 'templates/testPage.html',
    controller: 'testPageCtrl'
  })

  .state('silderPage', {
    url: '/page6',
    templateUrl: 'templates/silderPage.html',
    controller: 'silderPageCtrl'
  })

$urlRouterProvider.otherwise('/page1')


});