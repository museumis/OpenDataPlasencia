console.log("Controller AngularJS iniciado.")

app.controller("menuPrincipal",function($scope){
                 $scope.irAyuntamiento = function(){
                     console.log("wiiiiiii")
                 }
             })

app.controller("export",function($scope){
    
    $scope.tiposExport = ["pdf","xml","json","csv","html","text"]
})

app.controller("gobierno",function($scope){
    $scope.titulos = [
        "Ministerio","Desde","Hasta",
        "Gmail","Teléfono","Fax",
        "Web","Twitter","Facebook"
    ]
    $scope.gobernantes = [
        {"nombre":"nom1","ministerio":"ministerio01"},
        {"nombre":"nom2","ministerio":"ministerio02"},
        {"nombre":"nom3","ministerio":"ministerio03"}
    ]
})

