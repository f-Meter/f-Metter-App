const contenedorQR = document.getElementById('contenedorQR');
const qr = document.getElementById('formulario');

const QR = new QRCode(contenedorQR);

qr.addEventListener('submit', (e) => {
	e.preventDefault();
	QR.makeCode("www.facebook.com");
});
