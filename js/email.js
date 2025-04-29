(function () {
    emailjs.init("czH_IBnze7p-EGLhG");

    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault();
        emailjs.sendForm('service_oitrsi7', 'template_7koxs3u', this)
            .then(() => {
                alert('Message sent successfully!');
            }, (error) => {
                alert('Failed to send message. Please try again.');
            });
    });
})();
