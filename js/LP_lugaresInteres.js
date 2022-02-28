var layerAlojamientos;
var urlAlojamientos = "datos/museos.geojson";

function addDatosAlojamientos() {

    var puntosCluster = L.markerClusterGroup();

        layerAlojamientos  = new L.GeoJSON.AJAX(urlAlojamientos, {
            onEachFeature: function (feature, layer) {
                popupContent = "<b>" + feature.properties.Nombre + "</b>";
                layer.bindPopup(popupContent);
            },
            pointToLayer: function (feature, latlng) {
                puntosCluster.addLayer(L.marker(latlng));
                return L.circleMarker(latlng, {
                    radius: 6,
                    fillColor: "#00ff00",
                    color: "#ffffff",
                    weight: 3,
                    opacity: 0.6,
                    fillOpacity: 0.8
                });
            }
        })

        map.setView([28.682473373472106, -17.85810861749634],11);
        controlCapas.addOverlay(layerAlojamientos,"Alojamientos");
        
        controlCapas.addOverlay(puntosCluster,"Cluster");

        var searchControl = new L.Control.Search({
            layer: layerAlojamientos,
            initial:false,
            propertyName: 'NOMBRE',
            circleLocation: true,
            moveToLocation: function (latlng) {
                map.setView(latlng, 11);
            }
        });

        searchControl.on('search:locationfound', function(e) {
            e.layer.openPopup();
        });
        map.addControl(searchControl);


}//fin funcion