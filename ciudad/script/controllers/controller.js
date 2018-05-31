console.log("Controller AngularJS iniciado.")

app.controller("menuprincipal",function($scope){
    
    $scope.inicio = "#!/"


   $scope.menuPrincipal = [                                           
        {"url":"#!/","nombre":"Inicio"},
        {"url":"#!/gobierno","nombre":"Ayuntamiento"},
        {"url":"#!/organismosSociales","nombre":"Organismos Sociales"},
        {"url":"#!/barrio","nombre":"Barrios"},
        {"Sobre...":"#!/opendata/plasencia","nombre":"Sobre..."}
        ]
})



