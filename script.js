document.addEventListener('DOMContentLoaded', function() {
    const heroSection = document.querySelector('.hero');
    const layers = document.querySelectorAll('.parallax-layer');
    
    heroSection.addEventListener('mousemove', function(e) {
        const x = e.clientX;
        const y = e.clientY;
        
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        
        const posX = x - centerX;
        const posY = y - centerY;
        
        layers.forEach(layer => {
            const speed = parseFloat(layer.getAttribute('data-speed'));
            const xMove = posX * speed;
            const yMove = posY * speed;
            
            layer.style.transform = `translate(${xMove}px, ${yMove}px)`;
        });
    });
    
    // Reset position when mouse leaves
    heroSection.addEventListener('mouseleave', function() {
        layers.forEach(layer => {
            layer.style.transform = 'translate(0, 0)';
        });
    });
    
    // Mobile touch support
    heroSection.addEventListener('touchmove', function(e) {
        const touch = e.touches[0];
        const x = touch.clientX;
        const y = touch.clientY;
        
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        
        const posX = x - centerX;
        const posY = y - centerY;
        
        layers.forEach(layer => {
            const speed = parseFloat(layer.getAttribute('data-speed'));
            const xMove = posX * speed * 0.5; // Reduce effect on mobile
            const yMove = posY * speed * 0.5;
            
            layer.style.transform = `translate(${xMove}px, ${yMove}px)`;
        });
    });
    
    heroSection.addEventListener('touchend', function() {
        layers.forEach(layer => {
            layer.style.transform = 'translate(0, 0)';
        });
    });
});