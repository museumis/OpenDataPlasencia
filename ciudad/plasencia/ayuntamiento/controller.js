/* 
 Created on : 15-abr-2018
 Author     : Ismael Martin Ramirez [imartinr01@informatica.iesvalledeljerteplasencia.es]
*/
/*
Controlador angular de la seccion Gobierno
-Gestion de tabla
-Gestion de export a xml,json,csv y html
*/
app.controller("gobierno",function($scope,$http){   
    //-----------------------------------------------------------
    /*Variables del controller (Clase gobierno)*/
    //Array de titulos de tipos exportaciones 
    $scope.export = ["xml","json","csv","html"]    
    //Array de titulos de la tabla
    $scope.titulos = [
        "Nombre","Ministerio","Desde","Hasta",
        "Gmail","Teléfono","Fax",
        "Web","Twitter","Facebook"
    ]
    //Array de los gobernantes. Sera inyectado con la utilizacion de metodos en esta clase.
    $scope.gobernantes = [
        
    ]              
    //-----------------------------------------------------------
    /*Gestion de la clase que hara funcional la web*/        
    ///Funcion que recibe la cadena json obtenida en la conexion hhtp y la convierte a xml   
    $scope.convertirAXml = function(flujo){
               
     var xml = "<gobiernoPlasencia>"+"\n"
            
         for (var i=0; i<flujo.data.gobierno.length; i++) {

             xml+= "  <gobernante>"+"\n"

                xml+="        <"+$scope.titulos[0]+">"+flujo.data.gobierno[i].NOMBRE+"</"+$scope.titulos[0]+">"+"\n"
                xml+= "        <"+$scope.titulos[1]+">"+flujo.data.gobierno[i].MINISTERIO+"</"+$scope.titulos[1]+">"+"\n"
                xml+="        <"+$scope.titulos[2]+">"+flujo.data.gobierno[i].FECHA_INICIO+"</"+$scope.titulos[2]+">"+"\n"
                xml+="        <"+$scope.titulos[3]+">"+flujo.data.gobierno[i].FECHA_FIN+"</"+$scope.titulos[3]+">"+"\n"
                xml+="        <"+$scope.titulos[4]+">"+flujo.data.gobierno[i].CORREOELECTRONICO+"</"+$scope.titulos[4]+">"+"\n"
                xml+="        <"+$scope.titulos[5]+">"+flujo.data.gobierno[i].TELEFONO+"</"+$scope.titulos[5]+">"+"\n"
                xml+="        <"+$scope.titulos[6]+">"+flujo.data.gobierno[i].FAX+"</"+$scope.titulos[6]+">"+"\n"
                xml+="        <"+$scope.titulos[7]+">"+flujo.data.gobierno[i].WEB+"</"+$scope.titulos[7]+">"+"\n"
                xml+="        <"+$scope.titulos[8]+">"+flujo.data.gobierno[i].TWITTER+"</"+$scope.titulos[8]+">"+"\n"
                xml+="        <"+$scope.titulos[9]+">"+flujo.data.gobierno[i].FACEBOOK+"</"+$scope.titulos[9]+">"+"\n"

             xml+= "  </gobernante>"+"\n"

            }
            
        xml += "</gobiernoPlasencia>"            
            
        return xml;
        }        
    //Funcion que retorna la cadena json obtenida en la conexion http simplificada  
    $scope.convertirAJson = function(flujo){

        var json = "{\n\"gobiernoPlasencia\":\n{"+"\n"
        
        json+= "   \"gobernante\":["+"\n"  
          
            for (var i=0; i<flujo.data.gobierno.length; i++) {
                
                json+= "   {"+"\n"
                
                    if(i==flujo.data.gobierno.length-1){
                        
                        json+="        \""+$scope.titulos[0]+"\": \""+flujo.data.gobierno[i].NOMBRE+"\","+"\n"
                        json+= "        \""+$scope.titulos[1]+"\": \""+flujo.data.gobierno[i].MINISTERIO+"\","+"\n"
                        json+="        \""+$scope.titulos[2]+"\": \""+flujo.data.gobierno[i].FECHA_INICIO+"\","+"\n"
                        json+="        \""+$scope.titulos[3]+"\": \""+flujo.data.gobierno[i].FECHA_FIN+"\","+"\n"
                        json+="        \""+$scope.titulos[4]+"\": \""+flujo.data.gobierno[i].CORREOELECTRONICO+"\","+"\n"
                        json+="        \""+$scope.titulos[5]+"\": \""+flujo.data.gobierno[i].TELEFONO+"\","+"\n"
                        json+="        \""+$scope.titulos[6]+"\": \""+flujo.data.gobierno[i].FAX+"\","+"\n"
                        json+="        \""+$scope.titulos[7]+"\": \""+flujo.data.gobierno[i].WEB+"\","+"\n"
                        json+="        \""+$scope.titulos[8]+"\": \""+flujo.data.gobierno[i].TWITTER+"\","+"\n"
                        json+="        \""+$scope.titulos[9]+"\": \""+flujo.data.gobierno[i].FACEBOOK+"\""+"\n"
                        json+= "   }"+"\n"
                        
                    }else{
                        
                        json+="        \""+$scope.titulos[0]+"\": \""+flujo.data.gobierno[i].NOMBRE+"\","+"\n"
                        json+= "        \""+$scope.titulos[1]+"\": \""+flujo.data.gobierno[i].MINISTERIO+"\","+"\n"
                        json+="        \""+$scope.titulos[2]+"\": \""+flujo.data.gobierno[i].FECHA_INICIO+"\","+"\n"
                        json+="        \""+$scope.titulos[3]+"\": \""+flujo.data.gobierno[i].FECHA_FIN+"\","+"\n"
                        json+="        \""+$scope.titulos[4]+"\": \""+flujo.data.gobierno[i].CORREOELECTRONICO+"\","+"\n"
                        json+="        \""+$scope.titulos[5]+"\": \""+flujo.data.gobierno[i].TELEFONO+"\","+"\n"
                        json+="        \""+$scope.titulos[6]+"\": \""+flujo.data.gobierno[i].FAX+"\","+"\n"
                        json+="        \""+$scope.titulos[7]+"\": \""+flujo.data.gobierno[i].WEB+"\","+"\n"
                        json+="        \""+$scope.titulos[8]+"\": \""+flujo.data.gobierno[i].TWITTER+"\","+"\n"
                        json+="        \""+$scope.titulos[9]+"\": \""+flujo.data.gobierno[i].FACEBOOK+"\""+"\n"
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
              for (var i=0; i<flujo.data.gobierno.length; i++) {  
                
                if(i==flujo.data.gobierno.length-1){
                 csv += flujo.data.gobierno[i].NOMBRE + ","+
                    flujo.data.gobierno[i].MINISTERIO+ ","+
                    flujo.data.gobierno[i].FECHA_INICIO+ ","+
                    flujo.data.gobierno[i].FECHA_FIN+ ","+
                    flujo.data.gobierno[i].TELEFONO+ ","+
                    flujo.data.gobierno[i].CORREOELECTRONICO+ ","+
                    flujo.data.gobierno[i].FAX+ ","+
                    flujo.data.gobierno[i].WEB+ ","+
                    flujo.data.gobierno[i].TWITTER+ ","+
                    flujo.data.gobierno[i].FACEBOOK
                    
                }else{
                csv += flujo.data.gobierno[i].NOMBRE + ","+
                    flujo.data.gobierno[i].MINISTERIO+ ","+
                    flujo.data.gobierno[i].FECHA_INICIO+ ","+
                    flujo.data.gobierno[i].FECHA_FIN+ ","+
                    flujo.data.gobierno[i].TELEFONO+ ","+
                    flujo.data.gobierno[i].CORREOELECTRONICO+ ","+
                    flujo.data.gobierno[i].FAX+ ","+
                    flujo.data.gobierno[i].WEB+ ","+
                    flujo.data.gobierno[i].TWITTER+ ","+
                    flujo.data.gobierno[i].FACEBOOK

                }
                  csv+="\n"
                
            }
             
                 
            return csv;
        }
    //Funcion que recibe la cadena json obtenida en la conexion hhtp y la convierte a html
    $scope.convertirAHtml = function(flujo){
            
          var html =""
            html+="<table>"+"\n"
            html+="     <caption>Gobierno de Plasencia</caption>"+"\n"
            html+=" <tr>"+"\n"
            html+="     <th>#</th>"+"\n"

                for (var i=0; i<$scope.titulos.length; i++) {  
                html+="     <th>"+$scope.titulos[i]+"</th>  "+"\n"
                }

            html+=" </tr>"+"\n"

                for (var i=0; i<flujo.data.gobierno.length; i++) {  
                    html+=" <tr>"+"\n"

                        html+="     <th>"+(i+1)+"</th>"+"\n"
                        html+="     <th>"+flujo.data.gobierno[i].NOMBRE+"</th>"+"\n"
                        html+="     <th>"+flujo.data.gobierno[i].MINISTERIO+"</th>"+"\n"
                        html+="     <th>"+flujo.data.gobierno[i].FECHA_INICIO+"</th>"+"\n"
                        html+="     <th>"+flujo.data.gobierno[i].FECHA_FECHA_FIN+"</th>"+"\n"
                        html+="     <th>"+flujo.data.gobierno[i].FECHA_TELEFONO+"</th>"+"\n"
                        html+="     <th>"+flujo.data.gobierno[i].CORREOELECTRONICO+"</th>"+"\n"
                        html+="     <th>"+flujo.data.gobierno[i].FAX+"</th>"+"\n"
                        html+="     <th>"+flujo.data.gobierno[i].WEB+"</th>"+"\n"
                        html+="     <th>"+flujo.data.gobierno[i].TWITTER+"</th>"+"\n"
                        html+="     <th>"+flujo.data.gobierno[i].FACEBOOK+"</th>"+"\n"

                    html+=" </tr>"+"\n"
                  }

            html+="</table>"+"\n"

          return html;
          }
    /*Funcion que inyecta los datos recibidos en el array $scope.gobernantes.
    Esta accion carga la tabla que se muestra en el front de la web.
    */
    $scope.generarTabla = function(flujo){

        for (var i=0; i<flujo.data.gobierno.length; i++) {
              $scope.gobernantes.push({
                  nombre: flujo.data.gobierno[i].NOMBRE,
                  ministerio:flujo.data.gobierno[i].MINISTERIO,
                  inicio:flujo.data.gobierno[i].FECHA_INICIO,
                  fin:flujo.data.gobierno[i].FECHA_FIN,
                  correo:flujo.data.gobierno[i].CORREOELECTRONICO,
                  telefono:flujo.data.gobierno[i].TELEFONO,
                  fax:flujo.data.gobierno[i].FAX,
                  web:flujo.data.gobierno[i].WEB,
                  twitter:flujo.data.gobierno[i].TWITTER,
                  facebook:flujo.data.gobierno[i].FACEBOOK,
              });
             }
           }
    //-----------------------------------------------------------
    /*Metodo que gestiona la conexion http y las variable que se mostraran en la seccion html exports*/   
    $scope.cargarJsonFromUrl = function() {
     //Metodo que se conecta a la base de datos.
        $http.get('https://imartinr01.000webhostapp.com/OpenData/Plasencia/Ayuntamiento/Obtener_gobierno.php').then(function (flujo) {
        //Gestion de las variables en la web. La tabla y la seccion export.
        $scope.generarTabla(flujo)
        $scope.dataXml = $scope.convertirAXml(flujo)
        $scope.dataJson =$scope.convertirAJson(flujo)
        $scope.dataCsv = $scope.convertirACsv(flujo)
        $scope.dataHtml = $scope.convertirAHtml(flujo)
        })
    }   
      
    //-----------------------------------------------------------
    /*Lammada al metodo que se conecta a la base de datos.
    Esta accion se hace al terminar de leer este fichero.
    Esta llama se hace en la primera carga.Es combeniente cambiar de lugar esta llamada.
    Sin esta llamada, el front de la web gobierno NO FUNCIONARA.
    */
    $scope.cargarJsonFromUrl()
    //-----------------------------------------------------------
    /*Metodos para la gestion de la visualizacion de los export.
    Los click en las opciones de export muestran o ocultan distintos div.
    Esta accion se logra mediante estos metodos.
    */
    
    //color export pulsado #babbbf no pulsado #d5d7db
    $scope.verAyuntamientoXml = function(){
        if($scope.xmlAyuntamiento == true){
               $scope.xmlAyuntamiento = false
            
        }else{
               $scope.xmlAyuntamiento = true
        }
    }  
    $scope.verAyuntamientoJson = function(){
        if($scope.jsonAyuntamiento == true){
               $scope.jsonAyuntamiento = false
        }else{
               $scope.jsonAyuntamiento = true
        }
    }  
    $scope.verAyuntamientoCsv = function(){
        if($scope.csvAyuntamiento == true){
               $scope.csvAyuntamiento = false
        }else{
               $scope.csvAyuntamiento = true
        }
    } 
    $scope.verAyuntamientoHtml = function(){
        if($scope.htmlAyuntamiento == true){
               $scope.htmlAyuntamiento = false
        }else{
               $scope.htmlAyuntamiento = true
        }
    } 

})//Fin del controller
