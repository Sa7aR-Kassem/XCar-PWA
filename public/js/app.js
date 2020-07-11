if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
    .then(reg => console.log('service worker registered'))
    .catch(err => console.log('service worker not registered', err));
}

// START NOTIFICATION 
Notification.requestPermission(function () {
  if (Notification.permission == 'granted') {
    // navigator.serviceWorker.getRegistration().then(function (reg) {
    //   var options = {
    //     body: 'Here is a notification body!',
    //     icon: 'images/example.png',
    //     vibrate: [100, 50, 100],
    //     data: {
    //       dateOfArrival: Date.now(),
    //       primaryKey: 1
    //     },
    //     actions: [{
    //         action: 'explore',
    //         title: 'Explore this new world',
    //         icon: 'images/checkmark.png'
    //       },
    //       {
    //         action: 'close',
    //         title: 'Close notification',
    //         icon: 'images/xmark.png'
    //       },
    //     ]
    //   };
    //   reg.showNotification('Hello world!', options);
    // });
  }
});
// END NOTIFICATION

// S T A R T    C A M E R A    I N T E G R A T I O N 
function upload() {
  return new Promise(async (resolve, reject) => {
    const filePicker = document.querySelector('input');

    if (!filePicker || !filePicker.files ||
      filePicker.files.length <= 0) {
      reject('No file selected.');
      return;
    }
    const myFile = filePicker.files[0];
    console.log(myFile);

    resolve();
  });
}
// END CAMERA INTEGRATION

// START GEOLOCATION
if (document.getElementById('locationResults')) {
  document.getElementById('locationResults').style.display = 'none';
  window.onload = function () {
    var button = document.getElementById('location');
    button.addEventListener('click', function () {

      var startPos;
      var geoOptions = {
        enableHighAccuracy: true,
        timeout: 10 * 1000
      }
      var geoSuccess = function (position) {
        startPos = position;
        document.getElementById('startLat').innerHTML = startPos.coords.latitude;
        document.getElementById('startLon').innerHTML = startPos.coords.longitude;
        document.getElementById('locationResults').style.display = 'block';
      };
      var geoError = function (error) {
        console.log('Error occurred. Error code: ' + error.code);
        // error.code can be:
        //   0: unknown error
        //   1: permission denied
        //   2: position unavailable (error response from location provider)
        //   3: timed out
      };
      navigator.geolocation.getCurrentPosition(geoSuccess, geoError, geoOptions);
    })


  }
}
// END GEOLOCATION