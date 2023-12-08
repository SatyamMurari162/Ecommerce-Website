document.addEventListener('DOMContentLoaded', function() {
    const icon = document.getElementById('icon');
    const ul = document.querySelector('.navbar-center ul');

    icon.addEventListener('click', function() {
        ul.classList.toggle('active');
    });
});

