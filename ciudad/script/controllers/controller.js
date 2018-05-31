console.log("Controller AngularJS iniciado.")

app.controller("menuprincipal",function($scope){
    
    $scope.inicio = "#!/"


   $scope.menuPrincipal = [                                           
        {"url":"#!/ciudad","nombre":"Inicio"},
        {"url":"#!/gobierno","nombre":"Ayuntamiento"},
        {"url":"#!/organismosSociales","nombre":"Organismos Sociales"},
        {"url":"#!/barrios","nombre":"Barrios"},
        {"url":"#!/sobre/OpenDataPlasencia","nombre":"Sobre..."}
        ]
})



