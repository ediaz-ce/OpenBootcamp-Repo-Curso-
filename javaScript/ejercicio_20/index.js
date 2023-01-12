let map;

function initMap() {
    const posicion = {
        lat: 40.551277,
        lng: -3.638197
    }
    map = new google.maps.Map(document.getElementById("map"), {
        center: posicion,
        zoom: 8,
    })

    const marker = new google.maps.Marker({
        position: { lat: 40.417124, lng: -3.703510 },
        map,
        title: "Sol"
    })
    const marker2 = new google.maps.Marker({
        position: {lat: 40.453984, lng: -3.484122},
        map,
        title: "Torrejón de Ardoz"
    })
    const marker3 = new google.maps.Marker({
        position: {lat: 40.305827, lng: -3.732905},
        map,
        title: "Getafe"
    })
}

window.initMap = initMap;