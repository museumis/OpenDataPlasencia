/* 
 Created on : 15-abr-2018
 Author     : Ismael Martin Ramirez [imartinr01@informatica.iesvalledeljerteplasencia.es]
*/
/*
Controlador angular de la seccion Gobierno
-Gestion de tabla
-Gestion de export a xml,json,csv y html
*/
app.controller("inicio",function($scope,$http){   
    //-----------------------------------------------------------
    /*Variables del controller (Clase gobierno)*/
    //Array de titulos de tipos exportaciones 
    $scope.export = ["xml","json","csv","html"]    
    //Array de titulos de la tabla
    $scope.titulos = [
        "Ciudad","País","CodigpPostal","Población","Inicio Fiestas","Fin Fiestas","Web","GoogleMap"
    ]
    $scope.tituloExport = "Ciudad de Plasencia"
    $scope.urlJSON = "https://imartinr01.000webhostapp.com/OpenData/Plasencia/inicio/Obtener_InicioJSON.php"
    $scope.urlXML = "https://imartinr01.000webhostapp.com/OpenData/Plasencia/inicio/Obtener_InicioXML.php"
    $scope.hrefXML = "#!/ciudadDePlasencia/xml"
    $scope.hrefJSON = "#!/ciudadDePlasencia/json"
    $scope.hrefCSV = "#!/ciudadDePlasencia/csv"
    $scope.hrefHTML = "#!/ciudadDePlasencia/html"

    //Array de los gobernantes. Sera inyectado con la utilizacion de metodos en esta clase.
    $scope.tabla = [
        
    ]              
    //-----------------------------------------------------------
    /*Gestion de la clase que hara funcional la web*/        
    ///Funcion que recibe la cadena json obtenida en la conexion hhtp y la convierte a xml   
    $scope.convertirAXml = function(flujo){
               
     var xml = "<ciudadDePlasencia>"+"\n"
            
         for (var i=0; i<flujo.data.respuesta.length; i++) {

             xml+= "  <ciudad>"+"\n"

                xml+="        <"+$scope.titulos[0]+">"+flujo.data.respuesta[i].NOMBRE+"</"+$scope.titulos[0]+">"+"\n"
                xml+= "        <"+$scope.titulos[1]+">"+ flujo.data.respuesta[i].PAIS+"</"+$scope.titulos[1]+">"+"\n"
                xml+="        <"+$scope.titulos[2]+">"+flujo.data.respuesta[i].CODIGO_POSTAL+"</"+$scope.titulos[2]+">"+"\n"
                xml+="        <"+$scope.titulos[3]+">"+flujo.data.respuesta[i].POBLACION+"</"+$scope.titulos[3]+">"+"\n"
                xml+="        <"+$scope.titulos[4]+">"+flujo.data.respuesta[i].FIESTAS_INICIO+"</"+$scope.titulos[4]+">"+"\n"
                xml+="        <"+$scope.titulos[5]+">"+flujo.data.respuesta[i].FIESTAS_FIN+"</"+$scope.titulos[5]+">"+"\n"
                xml+="        <"+$scope.titulos[6]+">"+flujo.data.respuesta[i].PAGINA_WEB+"</"+$scope.titulos[6]+">"+"\n"
                xml+="        <"+$scope.titulos[7]+">"+flujo.data.respuesta[i].GOOGLE_MAP+"</"+$scope.titulos[7]+">"+"\n"

                    
             xml+= "  </ciudad>"+"\n"

            }
            
        xml += "</ciudadDePlasencia>"            
            
        return xml;
        }        
    //Funcion que retorna la cadena json obtenida en la conexion http simplificada  
    $scope.convertirAJson = function(flujo){

        var json = "{\n\"ciudadDePlasencia\":\n   {"+"\n"
        
        json+= "   \"ciudad\":["+"\n"  
          
            for (var i=0; i<flujo.data.respuesta.length; i++) {
                
                json+= "        {"+"\n"
                
                        
                        json+="        \""+$scope.titulos[0]+"\": \""+flujo.data.respuesta[i].NOMBRE+"\","+"\n"
                        json+="        \""+$scope.titulos[1]+"\": \""+flujo.data.respuesta[i].PAIS+"\","+"\n"
                        json+="        \""+$scope.titulos[2]+"\": \""+flujo.data.respuesta[i].CODIGO_POSTAL+"\","+"\n"
                        json+="        \""+$scope.titulos[3]+"\": \""+flujo.data.respuesta[i].POBLACION+"\""+"\n"
                        json+="        \""+$scope.titulos[4]+"\": \""+flujo.data.respuesta[i].FIESTAS_INICIO+"\","+"\n"
                        json+="        \""+$scope.titulos[5]+"\": \""+flujo.data.respuesta[i].FIESTAS_FIN+"\","+"\n"
                        json+="        \""+$scope.titulos[6]+"\": \""+flujo.data.respuesta[i].PAGINA_WEB+"\","+"\n"
                        json+="        \""+$scope.titulos[7]+"\": \""+flujo.data.respuesta[i].GOOGLE_MAP+"\""+"\n"
                
                
                    if(i==flujo.data.respuesta.length-1){
                      json+= "       }"+"\n"
                        
                    }else{
                
                     json+= "         },"+"\n"

                    }

            }

                    json += "              ]"+"\n"

                json += "   }"+"\n"

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
                    flujo.data.respuesta[i].PAIS+ ", "+
                    flujo.data.respuesta[i].CODIGO_POSTAL+ ", "+
                    flujo.data.respuesta[i].POBLACION+ ", "+
                    flujo.data.respuesta[i].FIESTAS_INICIO+ ", "+
                    flujo.data.respuesta[i].FIESTAS_FIN+ ", "+
                    flujo.data.respuesta[i].PAGINA_WEB+ ", "+
                    flujo.data.respuesta[i].GOOGLE_MAP

              
                  csv+="\n"
                
            }
             
                 
            return csv;
        }
    //Funcion que recibe la cadena json obtenida en la conexion hhtp y la convierte a html
    $scope.convertirAHtml = function(flujo){
            
          var html =""
            html+="<table>"+"\n"
            html+="     <caption>Ciudad de Plasencia</caption>"+"\n"
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
                        html+="     <th>"+flujo.data.respuesta[i].PAIS+"</th>"+"\n"
                        html+="     <th>"+flujo.data.respuesta[i].CODIGO_POSTAL+"</th>"+"\n"
                        html+="     <th>"+flujo.data.respuesta[i].POBLACION+"</th>"+"\n"
                        html+="     <th>"+flujo.data.respuesta[i].FIESTAS_INICIO+"</th>"+"\n"
                        html+="     <th>"+flujo.data.respuesta[i].FIESTAS_FIN+"</th>"+"\n"
                        html+="     <th>"+flujo.data.respuesta[i].PAGINA_WEB+"</th>"+"\n"
                        html+="     <th>"+flujo.data.respuesta[i].GOOGLE_MAP+"</th>"+"\n"

                      
                    html+=" </tr>"+"\n"
                  }

            html+="</table>"+"\n"

          return html;
          }
    /*Funcion que inyecta los datos recibidos en el array $scope.gobernantes.
    Esta accion carga la tabla que se muestra en el front de la web.
    */
    $scope.generarTabla = function(flujo){

        for (var i=0; i<flujo.data.respuesta.length; i++) {
              $scope.tabla.push({
                col1: flujo.data.respuesta[i].NOMBRE,
                col2:flujo.data.respuesta[i].PAIS,
                col3:flujo.data.respuesta[i].CODIGO_POSTAL,  
                col4:flujo.data.respuesta[i].POBLACION,
                col5:flujo.data.respuesta[i].FIESTAS_INICIO,
                col6:flujo.data.respuesta[i].FIESTAS_FIN,
                col7:flujo.data.respuesta[i].PAGINA_WEB,
                col8:flujo.data.respuesta[i].GOOGLE_MAP,


              });
             }
           }
    //-----------------------------------------------------------
    /*Metodo que gestiona la conexion http y las variable que se mostraran en la seccion html exports*/   
    $scope.cargarJsonFromUrl = function() {
     //Metodo que se conecta a la base de datos.
        $http.get('https://imartinr01.000webhostapp.com/OpenData/Plasencia/inicio/Obtener_InicioJSON.php').then(function (flujo) {
        //Gestion de las variables en la web. La tabla y la seccion export.
        $scope.generarTabla(flujo)
       $scope.dataXml = $scope.convertirAXml(flujo)
        $scope.dataJson =$scope.convertirAJson(flujo)
        $scope.dataCsv = $scope.convertirACsv(flujo)
        $scope.dataHtml = $scope.convertirAHtml(flujo)
        $scope.cuerpo = flujo
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
