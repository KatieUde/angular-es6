import angular from 'angular';
import uiRouter from 'angular-ui-router';
import todoFactory from 'app/factories/todo-factory'
import todosController from 'app/controllers/todos.controller';

const app = angular.module('app', [uiRouter, todoFactory.name]);

app.config(($stateProvider, $urlRouterProvider, $locationProvider) => {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('todos', {
      url: '/',
      template: require('app/views/todos.html'),
      controller: todosController
    })
    .state('about', {
      url: '/about',
      template: require('app/views/about.html')
    });

    $locationProvider.html5Mode(true);
});

export default app;
