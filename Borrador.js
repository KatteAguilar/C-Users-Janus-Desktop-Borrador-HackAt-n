// Mobile menu toggle
    document.getElementById('menu-toggle').addEventListener('click', function() {
    const menu = document.getElementById('mobile-menu');
 menu.classList.toggle('hidden');
 });
 // Calculator functionality
    document.getElementById('calcular').addEventListener('click', function() {
        const consumo = parseFloat(document.getElementById('consumo').value) || 0;
        const tarifa = parseFloat(document.getElementById('tarifa').value) || 0;
        const horas = parseFloat(document.getElementById('horas').value);
        const eficiencia = parseFloat(document.getElementById('eficiencia').value);
// Calculations
    const tamanoSistema = (consumo / (horas * 30 * eficiencia)).toFixed(2);
    const ahorroMensual = consumo * tarifa;
    const inversion = tamanoSistema * 3500000;
    const retorno = (inversion / ahorroMensual / 12).toFixed(1);
            
// Display results
     document.getElementById('tamano-sistema').textContent = tamanoSistema + ' kW';
    document.getElementById('ahorro-mensual').textContent = '$' + ahorroMensual.toLocaleString();
    document.getElementById('retorno').textContent = retorno + ' años';

 // Show results
    document.getElementById('resultado').classList.remove('hidden');

// Smooth scroll to results
    document.getElementById('resultado').scrollIntoView({ behavior: 'smooth' });
});

// Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
// Close mobile menu if open
    const mobileMenu = document.getElementById('mobile-menu');
    if (!mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.add('hidden');
    }
}
});
        // Coordenadas de la región del Caribe colombiano
        const CARIBE_COLOMBIANO = [10.5, -74.5];
        const ZOOM_LEVEL = 7;

        // Inicializa el mapa en el contenedor con ID 'mapa'
        let mapa = L.map('mapa').setView(CARIBE_COLOMBIANO, ZOOM_LEVEL);

        // Añade la capa de mapa base de OpenStreetMap
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(mapa);

        // Añade la capa de datos de temperatura (ejemplo con OpenWeatherMap)
        // NOTA: Debes obtener tu propia API Key de OpenWeatherMap
        // Puedes obtenerla en: https://home.openweathermap.org/api_keys
        const API_KEY = 'TU_API_KEY_AQUI'; // Reemplaza esto con tu clave API
        const tempLayer = L.tileLayer(`https://tile.openweathermap.org/map/temp_new/{z}/{x}/{y}.png?appid=${API_KEY}`, {
            attribution: 'Datos de temperatura &copy; <a href="https://openweathermap.org/">OpenWeatherMap</a>'
        });

        // Añade la capa de datos de viento (ejemplo con OpenWeatherMap)
        const windLayer = L.tileLayer(`https://tile.openweathermap.org/map/wind_new/{z}/{x}/{y}.png?appid=${API_KEY}`, {
            attribution: 'Datos de viento &copy; <a href="https://openweathermap.org/">OpenWeatherMap</a>'
        });

        // Control de capas para activar/desactivar las capas
        const overlayMaps = {
            "Temperatura": tempLayer,
            "Viento": windLayer
        };

        // Añade el control de capas al mapa
        L.control.layers(null, overlayMaps).addTo(mapa);

        // JavaScript para el menú móvil
        const menuToggle = document.getElementById('menu-toggle');
        const mobileMenu = document.getElementById('mobile-menu');

        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

});