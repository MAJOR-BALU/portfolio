(function () {
    document.addEventListener('DOMContentLoaded', function () {
        emailjs.init("czH_IBnze7p-EGLhG");

        const form = document.getElementById('contact-form');

        if (!form) {
            console.error("Form not found!");
            return;
        }

        form.addEventListener('submit', function (event) {
            event.preventDefault();

            emailjs.sendForm('service_oitrsi7', 'template_7koxs3u', this)
                .then(() => {
                    alert('Message sent successfully!');
                    form.reset();
                })
                .catch((error) => {
                    console.error('EmailJS error:', error);
                    alert('Failed to send message. Please check the console for details.');
                });
        });
    });
})();
