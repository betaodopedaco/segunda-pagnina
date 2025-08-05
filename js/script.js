document.addEventListener('DOMContentLoaded', function() {
    // Animar elementos ao rolar
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.reveal');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if(elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
                element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            }
        });
    };
    
    // Animação inicial
    setTimeout(() => {
        const heroElements = [
            '.hero-subtitle',
            '.hero-title',
            '.hero-text'
        ];
        
        heroElements.forEach(selector => {
            const el = document.querySelector(selector);
            if(el) {
                el.style.opacity = '1';
                if(selector === '.hero-title' || selector === '.hero-text') {
                    el.style.transform = 'translateY(0)';
                }
            }
        });
    }, 300);
    
    // Event listeners
    window.addEventListener('scroll', () => {
        animateOnScroll();
        
        // Header scroll effect
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.style.background = 'rgba(17, 17, 17, 0.98)';
            header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.5)';
        } else {
            header.style.background = 'rgba(17, 17, 17, 0.95)';
            header.style.boxShadow = 'none';
        }
    });
    
    // Form submission
    const contactForm = document.querySelector('.contact-form');
    if(contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Solicitação enviada com sucesso! Entraremos em contato em breve.');
            this.reset();
        });
    }
    
    // Inicializar animações
    animateOnScroll();
});
