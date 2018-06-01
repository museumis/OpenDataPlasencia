/* 
 Created on : 15-abr-2018
 Author     : Ismael Martin Ramirez [imartinr01@informatica.iesvalledeljerteplasencia.es]
*/
/*
Controlador angular de la seccion Barrio
-Gestion de tabla
-Gestion de export a xml,json,csv y html
*/
app.controller("barrio",function($scope,$http){   
    //-----------------------------------------------------------
    /*Variables del controller (Clase barrio)*/
    //Array de titulos de tipos exportaciones 
    $scope.export = ["xml","json","csv","html"]    
    //Array de titulos de la tabla 
    $scope.titulos = [
        "Barrio","Asociacion","Direc","Telf",
        "Correo","CentroDeSalud","DirecCS",
        "TelefCS"
    ]
    //Array de la tabla. Sera inyectado con la utilizacion de metodos en esta clase.
    $scope.tabla = [
        
    ]              
    //-----------------------------------------------------------
    /*Gestion de la clase que hara funcional la web*/        
    ///Funcion que recibe la cadena json obtenida en la conexion hhtp y la convierte a xml   
    $scope.convertirAXml = function(flujo){
               
     var xml = "<barriosPlasencia>"+"\n"
            
         for (var i=0; i<flujo.data.respuesta.length; i++) {

             xml+= "  <barrio>"+"\n"

                xml+="        <"+$scope.titulos[0]+">"+flujo.data.respuesta[i].Barrio+"</"+$scope.titulos[0]+">"+"\n"
                xml+= "        <"+$scope.titulos[1]+">"+ flujo.data.respuesta[i].Asociacion+"</"+$scope.titulos[1]+">"+"\n"
                xml+="        <"+$scope.titulos[2]+">"+flujo.data.respuesta[i].Direc+"</"+$scope.titulos[2]+">"+"\n"
                xml+="        <"+$scope.titulos[3]+">"+flujo.data.respuesta[i].Telf+"</"+$scope.titulos[3]+">"+"\n"
                xml+="        <"+$scope.titulos[4]+">"+ flujo.data.respuesta[i].Correo+"</"+$scope.titulos[4]+">"+"\n"
                xml+="        <"+$scope.titulos[5]+">"+flujo.data.respuesta[i].CentroDeSalud+"</"+$scope.titulos[5]+">"+"\n"
                xml+="        <"+$scope.titulos[6]+">"+flujo.data.respuesta[i].Direcc+"</"+$scope.titulos[6]+">"+"\n"
                xml+="        <"+$scope.titulos[7]+">"+flujo.data.respuesta[i].Telef+"</"+$scope.titulos[7]+">"+"\n"
            
             xml+= "  </barrio>"+"\n"

            }
            
        xml += "</barriosPlasencia>"            
            
        return xml;
        }        
    //Funcion que retorna la cadena json obtenida en la conexion http simplificada  
    $scope.convertirAJson = function(flujo){

        var json = "{\n\"barriosPlasencia\":\n{"+"\n"
        
        json+= "   \"barrio\":["+"\n"  
          
            for (var i=0; i<flujo.data.respuesta.length; i++) {
                
                json+= "   {"+"\n"
                
                    if(i==flujo.data.respuesta.length-1){
                        
                        json+="        \""+$scope.titulos[0]+"\": \""+flujo.data.respuesta[i].Barrio+"\","+"\n"
                        json+="        \""+$scope.titulos[1]+"\": \""+flujo.data.respuesta[i].Asociacion+"\","+"\n"
                        json+="        \""+$scope.titulos[2]+"\": \""+flujo.data.respuesta[i].Direc+"\","+"\n"
                        json+="        \""+$scope.titulos[3]+"\": \""+flujo.data.respuesta[i].Telf+"\","+"\n"
                        json+="        \""+$scope.titulos[4]+"\": \""+flujo.data.respuesta[i].Correo+"\","+"\n"
                        json+="        \""+$scope.titulos[5]+"\": \""+flujo.data.respuesta[i].CentroDeSalud+"\","+"\n"
                        json+="        \""+$scope.titulos[6]+"\": \""+flujo.data.respuesta[i].Direcc+"\","+"\n"
                        json+="        \""+$scope.titulos[7]+"\": \""+flujo.data.respuesta[i].Telef+"\""+"\n"
                      json+= "   }"+"\n"
                        
                    }else{
                        
                        json+="        \""+$scope.titulos[0]+"\": \""+flujo.data.respuesta[i].Barrio+"\","+"\n"
                        json+="        \""+$scope.titulos[1]+"\": \""+flujo.data.respuesta[i].Asociacion+"\","+"\n"
                        json+="        \""+$scope.titulos[2]+"\": \""+flujo.data.respuesta[i].Direc+"\","+"\n"
                        json+="        \""+$scope.titulos[3]+"\": \""+flujo.data.respuesta[i].Telf+"\","+"\n"
                        json+="        \""+$scope.titulos[4]+"\": \""+flujo.data.respuesta[i].Correo+"\","+"\n"
                        json+="        \""+$scope.titulos[5]+"\": \""+flujo.data.respuesta[i].CentroDeSalud+"\","+"\n"
                        json+="        \""+$scope.titulos[6]+"\": \""+flujo.data.respuesta[i].Direcc+"\","+"\n"
                        json+="        \""+$scope.titulos[7]+"\": \""+flujo.data.respuesta[i].Telef+"\""+"\n"
                     json+= "   },"+"\n"

                    }

            }

                    json += "]"

                json += "}"

            json += "}"

          return json;
    }        
    //Funcion que recibe la cadena json obtenida en la conexion hhtp y la convierte a csc   
    $scope.convertirACsv = function(flujo){
             
             var csv =""
             
            for (var i=0; i<$scope.titulos.length; i++) {  
                
                if(i==$scope.titulos.length-1){
                 csv += $scope.titulos[i]
                }else{
                csv += $scope.titulos[i] + ","

                }
                
            }
             csv+="\n"
              for (var i=0; i<flujo.data.respuesta.length; i++) {  
                
                if(i==flujo.data.respuesta.length-1){
                 csv += flujo.data.respuesta[i].Barrio + ","+
                    flujo.data.respuesta[i].Asociacion+ ","+
                   flujo.data.respuesta[i].Direc+ ","+
                    flujo.data.respuesta[i].Telf+ ","+
                    flujo.data.respuesta[i].Correo+ ","+
                   flujo.data.respuesta[i].CentroDeSalud+ ","+
                    flujo.data.respuesta[i].Direcc+ ","+
                    flujo.data.respuesta[i].Telef
                    
                }else{
                csv += flujo.data.respuesta[i].Barrio + ","+
                    flujo.data.respuesta[i].Asociacion+ ","+
                    flujo.data.respuesta[i].Direc+ ","+
                    flujo.data.respuesta[i].Telf+ ","+
                    flujo.data.respuesta[i].Correo+ ","+
                    flujo.data.respuesta[i].CentroDeSalud+ ","+
                    flujo.data.respuesta[i].Direcc+ ","+
                    flujo.data.respuesta[i].Telef

                }
                  csv+="\n"
                
            }
             
                 
            return csv;
        }
    //Funcion que recibe la cadena json obtenida en la conexion hhtp y la convierte a html
    $scope.convertirAHtml = function(flujo){
            
          var html =""
            html+="<table>"+"\n"
            html+="     <caption>Barrios de Plasencia</caption>"+"\n"
            html+=" <tr>"+"\n"
            html+="     <th>#</th>"+"\n"

                for (var i=0; i<$scope.titulos.length; i++) {  
                html+="     <th>"+$scope.titulos[i]+"</th>  "+"\n"
                }

            html+=" </tr>"+"\n"

                for (var i=0; i<flujo.data.respuesta.length; i++) {  
                    html+=" <tr>"+"\n"

                        html+="     <th>"+(i+1)+"</th>"+"\n"
                        html+="     <th>"+flujo.data.respuesta[i].Barrio+"</th>"+"\n"
                        html+="     <th>"+flujo.data.respuesta[i].Asociacion+"</th>"+"\n"
                        html+="     <th>"+flujo.data.respuesta[i].Direc+"</th>"+"\n"
                        html+="     <th>"+flujo.data.respuesta[i].Telf+"</th>"+"\n"
                        html+="     <th>"+flujo.data.respuesta[i].Correo+"</th>"+"\n"
                        html+="     <th>"+ flujo.data.respuesta[i].CentroDeSalud+"</th>"+"\n"
                        html+="     <th>"+flujo.data.respuesta[i].Direcc+"</th>"+"\n"
                        html+="     <th>"+flujo.data.respuesta[i].Telef+"</th>"+"\n"
                      
                    html+=" </tr>"+"\n"
                  }

            html+="</table>"+"\n"

          return html;
          }
    /*Funcion que inyecta los datos recibidos en el array $scope.nombreTabla.
    Esta accion carga la tabla que se muestra en el front de la web.
    */
    $scope.generarTabla = function(flujo){

        for (var i=0; i<flujo.data.respuesta.length; i++) {
              $scope.tabla.push({
                col1: flujo.data.respuesta[i].Barrio,
                col2:flujo.data.respuesta[i].Asociacion,
                col3:flujo.data.respuesta[i].Direc,
                col4:flujo.data.respuesta[i].Telf,
                col5:flujo.data.respuesta[i].Correo,
                col6:flujo.data.respuesta[i].CentroDeSalud,
                col7:flujo.data.respuesta[i].Direcc,
                col8:flujo.data.respuesta[i].Telef,                  

              });
             }
           }
    //-----------------------------------------------------------
    /*Metodo que gestiona la conexion http y las variable que se mostraran en la seccion html exports*/   
    $scope.cargarJsonFromUrl = function() {
     //Metodo que se conecta a la base de datos.
        $http.get('https://imartinr01.000webhostapp.com/OpenData/Plasencia/barrio/Obtener_barrioJSON.php').then(function (flujo) {
        //Gestion de las variables en la web. La tabla y la seccion export.
        $scope.generarTabla(flujo)
        $scope.dataXml = $scope.convertirAXml(flujo)
        $scope.dataJson =$scope.convertirAJson(flujo)
        $scope.dataCsv = $scope.convertirACsv(flujo)
        $scope.dataHtml = $scope.convertirAHtml(flujo)
        })
    }   
      
    //-----------------------------------------------------------
    /*Lamada al metodo que se conecta a la base de datos.
    Esta accion se hace al terminar de leer este fichero.
    Esta llama se hace en la primera carga. Es combeniente cambiar de lugar esta llamada.
    Sin esta llamada, el front de la web NO FUNCIONARA.
    */
    $scope.cargarJsonFromUrl()
    //-----------------------------------------------------------
    /*Metodos para la gestion de la visualizacion de los export.
    Los click en las opciones de export muestran o ocultan distintos div.
    Esta accion se logra mediante estos metodos.
    */    
    $scope.verFormatoXml = function(){
        if($scope.xmlFormato == true){
               $scope.xmlFormato = false
            
        }else{
            $scope.jsonFormato=false
            $scope.htmlFormato=false
            $scope.csvFormato=false
            $scope.xmlFormato = true
        }
    }  
    $scope.verFormatoJson = function(){
        if($scope.jsonFormato == true){
               $scope.jsonFormato = false
        }else{
            $scope.htmlFormato=false
            $scope.csvFormato=false
            $scope.xmlFormato = false
            $scope.jsonFormato = true
        }
    }  
    $scope.verFormatoCsv = function(){
        if($scope.csvFormato == true){
               $scope.csvFormato = false
        }else{
                $scope.jsonFormato=false
                $scope.htmlFormato=false
                $scope.xmlFormato = false
                $scope.csvFormato = true

        }
    } 
    $scope.verFormatoHtml = function(){
        if($scope.htmlFormato == true){
               $scope.htmlAyuntamiento = false
        }else{
                $scope.jsonFormato=false
                $scope.xmlFormato = false
                $scope.csvFormato = false
                $scope.htmlFormato = true
        }
    } 

})//Fin del controller
