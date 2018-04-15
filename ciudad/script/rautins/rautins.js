  /*
 Created on : 06-Abr-2018
 Author     : Ismael Martin Ramirez [imartinr01@informatica.iesvalledeljerteplasencia.es]
 */
console.log("JS Rautins iniciado.")

<!--Configuracion de ngRoute -> Rautins-->
         app.config(['$routeProvider',
            function($routeProvider){             
                $routeProvider.           
            when('opendata/plasencia',{
             templateUrl:'ciudad/plasencia/plasencia.html',
           }).
           when('/opendata/plasencia/gobierno',{
             templateUrl:'ciudad/plasencia/ayuntamiento/gobierno.html',
           }).
           when('/opendata/plasencia/barrio',{
             templateUrl:'ciudad/plasencia/barrio.html',
           }).
           when('/opendata/plasencia/organismosSociales',{
             templateUrl:'ciudad/plasencia/organismo.html',
           }).
            when('/opendata/plasencia/gobierno/xml',{
             templateUrl:'ciudad/plasencia/ayuntamiento/export/xml.html',
           }).
            when('/opendata/plasencia/gobierno/json',{
             templateUrl:'ciudad/plasencia/ayuntamiento/export/json.html',
           }).
            when('/opendata/plasencia/gobierno/csv',{
             templateUrl:'ciudad/plasencia/ayuntamiento/export/csv.html',
           }).
            when('/opendata/plasencia/gobierno/html',{
             templateUrl:'ciudad/plasencia/ayuntamiento/export/html.html',
           }).
            otherwise({
             redirectTo:'/',
             templateUrl:'ciudad/plasencia/inicio/cabecera.html',
           })
             
         }])