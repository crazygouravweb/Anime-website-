document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    const logoInput = document.getElementById('logoInput');
    const logoGallery = document.getElementById('logoGallery');

    if (logoInput.files && logoInput.files[0]) {
        const reader = new FileReader();

        reader.onload = function(e) {
            const logoItem = document.createElement('div');
            logoItem.className = 'logo-item';

            // Create a unique ID for the logo
            const logoId = 'logo-' + Date.now();

            logoItem.innerHTML = `
                <img src="${e.target.result}" alt="Uploaded Logo">
                <h3 id="${logoId}-name">${logoInput.files[0].name}</h3>
                <input type="text" class="rename-input" placeholder="New name" />
                <button onclick="renameLogo('${logoId}')">Rename</button>
            `;
            logoGallery.appendChild(logoItem);
        };

        reader.readAsDataURL(logoInput.files[0]);
        logoInput.value = ''; // Clear the input
    }
});

function renameLogo(logoId) {
    const newNameInput = document.querySelector(`#${logoId}-name`).nextElementSibling;
    const newName = newNameInput.value.trim();

    if (newName) {
        document.getElementById(`${logoId}-name`).innerText = newName;
        newNameInput.value = ''; // Clear the input after renaming
    } else {
        alert
