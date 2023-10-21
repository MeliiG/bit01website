function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8
    });

    var marker = new google.maps.Marker({
        map: map,
        draggable: true,
        animation: google.maps.Animation.DROP,
        position: { lat: -34.397, lng: 150.644 }
    });

    google.maps.event.addListener(marker, 'dragend', function (event) {
        var lat = event.latLng.lat();
        var lng = event.latLng.lng();
        console.log("Latitud: " + lat + " Longitud: " + lng);
        // Aquí puedes hacer algo con las coordenadas, como enviarlas a tu servidor.
    });
}

