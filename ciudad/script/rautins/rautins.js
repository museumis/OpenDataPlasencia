  /*
 Created on : 06-Abr-2018
 Author     : Ismael Martin Ramirez [imartinr01@informatica.iesvalledeljerteplasencia.es]
 */
console.log("JS Rautins iniciado.")

<!--Configuracion de ngRoute -> Rautins-->
         app.config(['$routeProvider',
            function($routeProvider){             
                $routeProvider.           
            when('ciudad/plasencia',{
             templateUrl:'ciudad/plasencia/plasencia.html',
           }).
           when('/ciudad/plasencia/gobierno',{
             templateUrl:'ciudad/plasencia/gobierno.html',
           }).
           when('/ciudad/plasencia/barrio',{
             templateUrl:'ciudad/plasencia/barrio.html',
           }).
           when('/ciudad/plasencia/organismos',{
             templateUrl:'ciudad/plasencia/organismo.html',
           }).
            otherwise({
             redirectTo:'/',
             templateUrl:'ciudad/view/inicio.html',
           })
             
         }])