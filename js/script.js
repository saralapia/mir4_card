document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 10;
        const rotateY = (x - centerX) / 10;
        
        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'rotateX(0) rotateY(0)';
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const videoBanner = document.querySelector(".video-banner");
    const tabs = document.querySelectorAll(".tab-button");
    const contents = document.querySelectorAll(".tab-content");

    videoBanner.addEventListener("loadeddata", () => {
        videoBanner.play();
    });

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            tabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");

            const target = tab.dataset.target;
            contents.forEach(content => {
                content.classList.remove("active");
                if (content.id === target) {
                    content.classList.add("active");
                }
            });
        });
    });
});

function togglePassword(id) {
    const passwordField = document.getElementById(id);
    const icon = passwordField.nextElementSibling.querySelector("img");

    if (passwordField.type === "password") {
        passwordField.type = "text";
        icon.src = "img/close-eye.png"; // Ícone para esconder a senha
        icon.alt = "Hide Password";
    } else {
        passwordField.type = "password";
        icon.src = "img/open-eye.png"; // Ícone para mostrar a senha
        icon.alt = "Show Password";
    }
}

function validateForm() {
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    const passwordMatch = document.getElementById("password-match");

    if (password !== confirmPassword) {
        passwordMatch.textContent = "Passwords do not match!";
        return false;
    }

    passwordMatch.textContent = "";
    showMessage("Account updated successfully!");
    return true;
}

function showMessage(message) {
    const messageDiv = document.getElementById("message");
    messageDiv.textContent = message;
    setTimeout(() => {
        messageDiv.textContent = "";
    }, 3000);
}
