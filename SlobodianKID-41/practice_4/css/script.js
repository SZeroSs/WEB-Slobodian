document.addEventListener('DOMContentLoaded', () => {

    function activateKey(code) {

        const keyElement = document.querySelector(`.key[data-code="${code}"]`);

        if (keyElement) {
            keyElement.classList.add('active');
            console.log(`Натиснуто: ${code}`); // Для відладки
        } else {
            console.log(`Кнопку з кодом ${code} не знайдено на екрані`);
        }
    }

    function deactivateKey(code) {
        const keyElement = document.querySelector(`.key[data-code="${code}"]`);
        if (keyElement) {
            keyElement.classList.remove('active');
        }
    }

    document.addEventListener('keydown', function(event) {
        const code = event.code;
        activateKey(code);

        if(code !== "F5" && code !== "F12" && !(event.ctrlKey && code === "KeyR")) {
            event.preventDefault();
        }
    });

    document.addEventListener('keyup', function(event) {
        const code = event.code;
        deactivateKey(code);
    });

    const keys = document.querySelectorAll('.key');
    keys.forEach(key => {
        key.addEventListener('mousedown', function() {
            const code = this.getAttribute('data-code');
            activateKey(code);
        });

        key.addEventListener('mouseup', function() {
            const code = this.getAttribute('data-code');
            deactivateKey(code);
        });

        key.addEventListener('mouseleave', function() {
            const code = this.getAttribute('data-code');
            deactivateKey(code);
        });
    });
});