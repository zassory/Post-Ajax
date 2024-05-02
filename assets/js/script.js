$(document).ready(function() {
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
    
    function mostrarDigimones(digimones) {
        const digimonRow = document.getElementById('digimonRow');
        digimones.map((digimon) => {        
            const cardCol = document.createElement('div');
            cardCol.classList.add('col-sm-4');
    
            const card = document.createElement('div');
            card.classList.add('card');
            card.classList.add('mt-2');
            card.classList.add('mb-2');
    
            const cardImg = document.createElement('img');
            cardImg.classList.add('card-img-top');
            cardImg.src = digimon.img;
    
            const cardBody = document.createElement('div');
            cardBody.classList.add('card-body');
    
            const cardTitle = document.createElement('h5');
            cardTitle.classList.add('card-title');
            cardTitle.textContent = digimon.name;
    
            const cardText = document.createElement('p');
            cardText.classList.add('card-text');
            cardText.textContent = `Nivel: ${digimon.level}`;        
    
            cardBody.appendChild(cardTitle);
            cardBody.appendChild(cardText);
    
            card.appendChild(cardImg);
            card.appendChild(cardBody);
            
            cardCol.appendChild(card);
            digimonRow.appendChild(cardCol);
          });
    }
});