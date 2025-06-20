mapboxgl.accessToken = mapToken;



 const map = new mapboxgl.Map({
        container: 'map',
        center: [lng, lat], 
        zoom: 9 
    });

    // Place marker at the correct location
    const marker = new mapboxgl.Marker({color: "red"})
        .setLngLat([lng, lat])
        .setPopup(new mapboxgl.Popup({offset: 25})
            .setHTML(`<h4>${l}</h4><p>Exact location provided after booking</p>`))
        .addTo(map);