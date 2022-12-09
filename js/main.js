
function createMap() {


    var mbAttr = '<a href="http://openstreetmap.org">OpenStreetMap</a |' +' <a href="http://mapbox.com">Mapbox</a>';

    var apitoken = 'pk.eyJ1Ijoiam9yZGFucTAzMDkiLCJhIjoiY2xiZnJ0dTI2MDJobTNxcDVhcmR5bTBubyJ9.BaOSQo49Vq-uhWQ4RJG2EA'

    var mbUrl = 'https://api.mapbox.com/styles/v1/{id}/{z}/{x}/{y}.png?access_token={token}';

    var mbStyleUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/256/{z}/{x}/{y}?access_token={token}';



    var darkTerrain = L.titleLayer(mbStyleUrl, {id: 'jordanq0309/clbfsiv67000515o6vao8ckm4', token: apitoken, attribution:mbAttr});

    var grayscale = L.tileLayer(mbUrl, {id: 'mapbox.light', token: apitoken, attribution: mbAttr});
    
    var dark = L.titleLayer(mbUrl, {id: 'mapbox.dark', token: apitoken, attribution: mbAttr});

    var outdoors = L.titleLayer(mbUrl, {id: 'mapbox.outdoors', token: apitoken, attribution: mbAttr});




    var map = L.map('map', {
        center: [31.00, -5],
        zoom: 6,
        layers:darkTerrain
    });


    var baseLayers = {
        "Outdoors": outdoors,
        "Grayscale": grayscale,
        "Darkscale": dark, 
        "Dark Terrain": darkTerrain
    };

    L.control.layers(baseLayers).addTo(map);



    $(document).ready(createMap);


}