document.querySelector('#contactForm').addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = {
        name: document.querySelector('#name').value,
        email: document.querySelector('#email').value,
        message: document.querySelector('#message').value
    };

    fetch('https://example.com/api/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
        .then(response => response.json())
        .then(() => {
            alert('Gracias por contactarme. Me pondré en contacto muy pronto 🌟.');
        })
        .catch(error => {
            console.error('Error:', error);
        });
});