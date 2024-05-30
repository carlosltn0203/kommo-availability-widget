document.getElementById('check-availability').addEventListener('click', function() {
    const date = document.getElementById('datepicker').value;
    if (!date) {
        alert('Por favor, seleccione una fecha.');
        return;
    }
    
    fetch('api/dummy_api.py?fecha=' + date)
        .then(response => response.json())
        .then(data => {
            const resultDiv = document.getElementById('result');
            resultDiv.innerHTML = '';
            
            if (data.personal_disponible.length === 0) {
                resultDiv.innerHTML = 'No hay personal disponible para la fecha seleccionada.';
                return;
            }

            data.personal_disponible.forEach(personal => {
                const personalDiv = document.createElement('div');
                personalDiv.innerHTML = `
                    <h3>${personal.nombre}</h3>
                    <p>Horario: ${personal.horarios.join(', ')}</p>
                    <p>ID: ${personal.id}</p>
                `;
                resultDiv.appendChild(personalDiv);
            });
        })
        .catch(error => {
            console.error('Error:', error);
        });
});
