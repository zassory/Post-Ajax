$(document).ready(function(){    
    function obtenerDigimones(){
        $('#obtenerDigimones').click(function() {
            $.ajax({
                url: 'https://digimon-api.vercel.app/api/digimon',
                type: 'GET',
                success: function(data) {
                    mostrarDigimones(data);
                },
                error: function(xhr, status, error) {
                    console.error('Error al obtener los datos:', error);
                }
            });
        });    
    }

      // Función para mostrar los Digimon en cards
    function mostrarDigimones(digimones) {
        let digimonList = '';
        $.map(digimones, function(digimon) {
            let card = `
                <div class="col-lg-4 col-md-6 mb-4">
                    <div class="card">
                        <img src="${digimon.img}" class="card-img-top" alt="${digimon.name}">
                        <div class="card-body">
                            <h5 class="card-title">${digimon.name}</h5>
                            <p class="card-text">Nivel: ${digimon.level}</p>
                            <p class="card-text">Tipo: ${digimon.type}</p>
                        </div>
                    </div>
                </div>
            `;
            digimonList = digimonList + card;
        });
        $('#digimonList').html(digimonList);
    }
  // Ejecutar la función para mostrar los Digimon
  obtenerDigimones();


});


  