let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
}

// Inicializa EmailJS con tu User ID
(function() {
    emailjs.init('oLum-jTU3CTFkIdJe');
})();

// Maneja el envío del formulario
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Previene el envío por defecto del formulario

    // Obtén los IDs del servicio y la plantilla de EmailJS
    const serviceID = 'service_9cwb92x';
    const templateID = 'template_dartbjr';

    // Envía el formulario usando EmailJS
    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            alert('Mensaje enviado con éxito!');
        }, (err) => {
            alert('Error al enviar el mensaje: ' + JSON.stringify(err));
        });
});


menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x'); // Asegúrate de que este sea el nombre de la clase correcta
    navbar.classList.toggle('active');
}
