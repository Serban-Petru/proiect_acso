const sendPacketButton = document.getElementById('send-packet-btn');
const messageElement = document.getElementById('message');
const portsContainer = document.getElementById('ports');

let openPort = generateRandomPort();
createPorts(5); // 5 porturi pentru server

sendPacketButton.addEventListener('click', function() {
    const selectedPort = getRandomPort(1, 5);
    const selectedPortElement = document.querySelector(`.port[data-port="${selectedPort}"]`);

    if (selectedPort === openPort) {
        messageElement.textContent = `Conexiune reușită! Pachetul a găsit portul deschis (${openPort})!`;
        selectedPortElement.classList.add('active');
    } else {
        messageElement.textContent = `Conexiune eșuată. Pachetul a ajuns la portul ${selectedPort}. Portul deschis era ${openPort}.`;
        selectedPortElement.classList.add('active');
        setTimeout(() => selectedPortElement.classList.remove('active'), 1000);
    }

    openPort = generateRandomPort();
});

function createPorts(count) {
    portsContainer.innerHTML = '';
    for (let i = 1; i <= count; i++) {
        const portElement = document.createElement('div');
        portElement.classList.add('port');
        portElement.setAttribute('data-port', i);
        portElement.textContent = i;
        portsContainer.appendChild(portElement);
    }
}

function generateRandomPort() {
    return getRandomPort(1, 5);
}

function getRandomPort(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
