/* 
 Created on : 15-abr-2018
 Author     : Ismael Martin Ramirez [imartinr01@informatica.iesvalledeljerteplasencia.es]
*/
/*
Controlador angular de la seccion Organismo
-Gestion de tabla
-Gestion de export a xml,json,csv y html
*/
app.controller("org",function($scope,$http){   
    //-----------------------------------------------------------
    /*Variables del controller (Clase Organismos)*/
    //Array de titulos de tipos exportaciones 
    $scope.export = ["xml","json","csv","html"]    
    //Array de titulos de la tabla
    $scope.titulos = [
        "Nombre","Dirección","Teléfono"
    ]
    $scope.tituloExport = "Organismo Sociales"
    $scope.urlJSON = "https://imartinr01.000webhostapp.com/OpenData/Plasencia/organismos/Obtener_OrganismoJSON.php"
    $scope.urlXML = "https://imartinr01.000webhostapp.com/OpenData/Plasencia/organismos/Obtener_OrganismoXML.php"
    $scope.hrefXML = "#!/organismosSociales/xml"
    $scope.hrefJSON = "#!/organismosSociales/json"
    $scope.hrefCSV = "#!/organismosSociales/csv"
    $scope.hrefHTML = "#!/organismosSociales/html"

    //Array de la tabla. Sera inyectado con la utilizacion de metodos en esta clase.
    $scope.tabla = [
        
    ]              
    //-----------------------------------------------------------
    /*Gestion de la clase que hara funcional la web*/        
    ///Funcion que recibe la cadena json obtenida en la conexion hhtp y la convierte a xml   
    $scope.convertirAXml = function(flujo){
               
     var xml = "<organismosSocialesPlasencia>"+"\n"
            
         for (var i=0; i<flujo.data.respuesta.length; i++) {

             xml+= "  <organismo>"+"\n"

                xml+="        <"+$scope.titulos[0]+">"+flujo.data.respuesta[i].NOMBRE+"</"+$scope.titulos[0]+">"+"\n"
                xml+= "        <"+$scope.titulos[1]+">"+ flujo.data.respuesta[i].DIRECCION+"</"+$scope.titulos[1]+">"+"\n"
                xml+="        <"+$scope.titulos[2]+">"+flujo.data.respuesta[i].TELEFONO+"</"+$scope.titulos[2]+">"+"\n"
                    
             xml+= "  </organismo>"+"\n"

            }
            
        xml += "</organismosSocialesPlasencia>"            
            
        return xml;
        }        
    //Funcion que retorna la cadena json obtenida en la conexion http simplificada  
    $scope.convertirAJson = function(flujo){

        var json = "{\n\"organismosSocialesPlasencia\":\n{"+"\n"
        
        json+= "   \"organismo\":["+"\n"  
          
            for (var i=0; i<flujo.data.respuesta.length; i++) {
                
                json+= "   {"+"\n"
                
                    if(i==flujo.data.respuesta.length-1){
                        
                        json+="        \""+$scope.titulos[0]+"\": \""+flujo.data.respuesta[i].NOMBRE+"\","+"\n"
                        json+="        \""+$scope.titulos[1]+"\": \""+flujo.data.respuesta[i].DIRECCION+"\","+"\n"
                        json+="        \""+$scope.titulos[2]+"\": \""+flujo.data.respuesta[i].TELEFONO+"\","+"\n"
                        json+="        \""+$scope.titulos[3]+"\": \""+flujo.data.respuesta[i].Telf+"\""+"\n"
                        
                      json+= "   }"+"\n"
                        
                    }else{
                        
                         json+="        \""+$scope.titulos[0]+"\": \""+flujo.data.respuesta[i].NOMBRE+"\","+"\n"
                        json+="        \""+$scope.titulos[1]+"\": \""+flujo.data.respuesta[i].DIRECCION+"\","+"\n"
                        json+="        \""+$scope.titulos[2]+"\": \""+flujo.data.respuesta[i].TELEFONO+"\","+"\n"
                        json+="        \""+$scope.titulos[3]+"\": \""+flujo.data.respuesta[i].Telf+"\""+"\n"
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
              
                csv += flujo.data.respuesta[i].NOMBRE + ", "+
                    flujo.data.respuesta[i].DIRECCION+ ", "+
                    flujo.data.respuesta[i].TELEFONO

              
                  csv+="\n"
                
            }
             
                 
            return csv;
        }
    //Funcion que recibe la cadena json obtenida en la conexion hhtp y la convierte a html
    $scope.convertirAHtml = function(flujo){
            
          var html =""
            html+="<table>"+"\n"
            html+="     <caption>Organismos sociales de Plasencia</caption>"+"\n"
            html+=" <tr>"+"\n"
            html+="     <th>#</th>"+"\n"

                for (var i=0; i<$scope.titulos.length; i++) {  
                html+="     <th>"+$scope.titulos[i]+"</th>  "+"\n"
                }

            html+=" </tr>"+"\n"

                for (var i=0; i<flujo.data.respuesta.length; i++) {  
                    html+=" <tr>"+"\n"

                        html+="     <th>"+(i+1)+"</th>"+"\n"
                        html+="     <th>"+flujo.data.respuesta[i].NOMBRE+"</th>"+"\n"
                        html+="     <th>"+flujo.data.respuesta[i].DIRECCION+"</th>"+"\n"
                        html+="     <th>"+flujo.data.respuesta[i].TELEFONO+"</th>"+"\n"
                     
                      
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
                col1: flujo.data.respuesta[i].NOMBRE,
                col2:flujo.data.respuesta[i].DIRECCION,
                col3:flujo.data.respuesta[i].TELEFONO,                          

              });
             }
           }
    //-----------------------------------------------------------
    /*Metodo que gestiona la conexion http y las variable que se mostraran en la seccion html exports*/   
    $scope.cargarJsonFromUrl = function() {
     //Metodo que se conecta a la base de datos.
        $http.get('https://imartinr01.000webhostapp.com/OpenData/Plasencia/organismos/Obtener_OrganismoJSON.php').then(function (flujo) {
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
    Sin esta llamada, el front de la web gobierno NO FUNCIONARA.
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
