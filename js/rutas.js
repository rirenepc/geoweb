   function addRutas() {

            var url = 'datos/rutas.geojson';
            map.addSource('rutas', { type: 'geojson', data: url});

            map.addLayer({
            'id': 'route',
            'type': 'line',
            'source': 'rutas',
            'layout': {
            'line-join': 'round',
            'line-cap': 'round'
            },
            'paint': {
            'line-color': '#ff0000',
            'line-width': 3
            }
            });

} //fin funcion

function addAccidentes(){
    var url= 'datos/accidentes2017.geojson';
    map.addSource('accidentes-source',{
        type: 'geojson',
        data: url
    });

    map.addLayer({
            'id': 'accidentes',
            'type': 'circle',
            'source': 'accidentes-source',
            'paint': {
            'circle-color': '#ffff00',
            'circle-radius': 6,
            'circle-stroke-width' : 2,
            'circle-stroke-color' : '#00ff00',
            }
            });
}
function zoomToRutas(valores) {

   var coord = valores.split("/");

    map.flyTo({
            center: [coord[2], coord[1]],
            zoom: coord[0]
        });

    } //fin funcion