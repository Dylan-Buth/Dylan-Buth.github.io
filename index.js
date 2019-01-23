navigator.usb.requestDevice({ filters: [{ vendorId: 1351 }] })
    .then(device => {
    console.log(device.productName);      // "Arduino Micro"
console.log(device.manufacturerName); // "Arduino LLC"
})
.catch(error => { console.log(error); });