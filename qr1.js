
let qr = null;

function generateCard() {
  const ssid = document.getElementById('ssid').value;
  const password = document.getElementById('password').value;
  const encryption = document.getElementById('encryption').value;
  
  if (!ssid) {
    alert('Please enter WiFi name (SSID)');
    return;
  }

  // Format WiFi QR code string
  let qrString = `WIFI:S:${ssid};`;
  if (encryption !== 'nopass') {
    qrString += `T:${encryption};P:${password};`;
  } else {
    qrString += 'T:nopass;';
  }
  qrString += ';';

  // Display card
  document.getElementById('wifiCard').style.display = 'block';
  document.getElementById('ssidDisplay').textContent = `Network: ${ssid}`;
  document.getElementById('passwordDisplay').textContent = 
    encryption !== 'nopass' ? `Password: ${password}` : 'No Password Required';

  // Generate QR code
  if (qr) {
    qr.clear();
    qr.makeCode(qrString);
  } else {
    qr = new QRCode("qrcode", {
      text: qrString,
      width: 256,
      height: 256,
      colorDark: "#000000",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.H
    });
  }
}
