from flask import Flask, request, jsonify
from datetime import datetime

app = Flask(__name__)

@app.route('/api/dummy_api.py', methods=['GET'])
def dummy_api():
    fecha = request.args.get('fecha')
    
    try:
        datetime.strptime(fecha, '%Y-%m-%d')
    except ValueError:
        return jsonify({'error': 'Formato de fecha inválido'}), 400

    data = {
        "fecha": fecha,
        "personal_disponible": [
            {
                "nombre": "Silvia Biana",
                "horarios": ["8:00-12:00", "14:00-18:00"],
                "id": "123456"
            },
            {
                "nombre": "Emma Matute",
                "horarios": ["8:00-12:00"],
                "id": "789012"
            },
            {
                "nombre": "Katty Panchi",
                "horarios": ["14:00-18:00"],
                "id": "345678"
            }
        ]
    }

    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)
