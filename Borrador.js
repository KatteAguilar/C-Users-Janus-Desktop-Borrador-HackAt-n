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
});