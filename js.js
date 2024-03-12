let darkModeEnabled = false;

        function toggleDarkMode() {
            const stylesheet = document.getElementById('stylesheet');
            if (darkModeEnabled) {
                stylesheet.href = 'light.css';
            } else {
                stylesheet.href = 'dark.css';
            }
            darkModeEnabled = !darkModeEnabled;
        }

function runCode() {
    const codeInput = document.getElementById('code');
    const outputDiv = document.getElementById('output');
    const code = codeInput.value;

    try {
        // Clear previous output
        outputDiv.innerHTML = '';

        // Execute the code
        const result = eval(code);

        // Display the result
        outputDiv.innerHTML = result;
    } catch (error) {
        // Display any errors
        outputDiv.innerHTML = `<span style="color: red;">Error: ${error}</span>`;
    }
}

function refreshPage() {
    location.reload();
}


function save() {
    const code = document.getElementById('code').value;
    localStorage.setItem('savedCode', code);
    alert('Code saved successfully!');
}
window.onload = function() {
    const savedCode = localStorage.getItem('savedCode');
    if (savedCode) {
        document.getElementById('code').value = savedCode;
    }
}





