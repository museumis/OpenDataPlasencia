console.log("Controller AngularJS iniciado.")

app.controller("menuprincipal",function($scope){
    
    $scope.inicio = "#!/"
    
    $scope.menuPrincipal = [                                           
        {"url":"#!/","nombre":"Inicio"},
        {"url":"#!/opendata/plasencia/gobierno","nombre":"Ayuntamiento"},
        {"url":"#!/opendata/plasencia/organismosSociales","nombre":"Organismos Sociales"},
        {"url":"#!/opendata/plasencia/barrio","nombre":"Barrios"},
        {"Sobre...":"#!/opendata/plasencia","nombre":"Sobre..."}
        ]
})





