   function addRutas() {

            var url = 'datos/cubo.geojson';
            map.addSource('cubo', { type: 'geojson', data: url});

            map.addLayer({
            'id': 'route',
            'type': 'line',
            'source': 'cubo',
            'layout': {
            'line-join': 'round',
            'line-cap': 'round'
            },
            'paint': {
            'line-color': '#8fdd4f',
            'line-width': 3.5
            }
            });

            var url = 'datos/barloventoGarafia.geojson';
            map.addSource('barloventoGarafia', { type: 'geojson', data: url});

            map.addLayer({
            'id': 'route2',
            'type': 'line',
            'source': 'barloventoGarafia',
            'layout': {
            'line-join': 'round',
            'line-cap': 'round'
            },
            'paint': {
            'line-color': '#8fdd4f',
            'line-width': 3.5
            }
            });

            var url = 'datos/tazacorteRoque.geojson';
            map.addSource('tazacorteRoque', { type: 'geojson', data: url});

            map.addLayer({
            'id': 'route3',
            'type': 'line',
            'source': 'tazacorteRoque',
            'layout': {
            'line-join': 'round',
            'line-cap': 'round'
            },
            'paint': {
            'line-color': '#8fdd4f',
            'line-width': 3
            }
            });

            var url = 'datos/volcanSanJuan.geojson';
            map.addSource('volcanSanJuan', { type: 'geojson', data: url});

            map.addLayer({
            'id': 'route4',
            'type': 'line',
            'source': 'volcanSanJuan',
            'layout': {
            'line-join': 'round',
            'line-cap': 'round'
            },
            'paint': {
            'line-color': '#8fdd4f',
            'line-width': 3
            }
            });

            var url = 'datos/calderaBejenado.geojson';
            map.addSource('calderaBejenado', { type: 'geojson', data: url});

            map.addLayer({
            'id': 'route5',
            'type': 'line',
            'source': 'calderaBejenado',
            'layout': {
            'line-join': 'round',
            'line-cap': 'round'
            },
            'paint': {
            'line-color': '#8fdd4f',
            'line-width': 3
            }
            });

} //fin funcion

function addAccidentes(){
    var url= 'datos/alojamientos_turisticos.geojson';
    map.addSource('alojamientos-source',{
        type: 'geojson',
        data: url
    });

    map.addLayer({
            'id': 'alojamientos',
            'type': 'circle',
            'source': 'alojamientos-source',
            'paint': {
            'circle-color': '#ffff00',
            'circle-radius': 6,
            'circle-stroke-width' : 2,
            'circle-stroke-color' : '#00ff00',
            }
            });
}

function cambiaColor(color){
    map.setPaintProperty('route', 'line-color', color);
}

function zoomToRutas(valores) {

   var coord = valores.split("/");

    map.flyTo({
            center: [coord[2], coord[1]],
            zoom: coord[0]
        });

    } //fin funcion