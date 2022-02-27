var config = {
    style: 'mapbox://styles/rirenepc/cl03o91fc000214o6x2w3en90',
    accessToken: 'pk.eyJ1IjoicmlyZW5lcGMiLCJhIjoiY2t5Y3I5aGMyMHJ1ajJxbzg0dHcwZDQ1ciJ9.HiXD6rAKpTTbv9tVhVPhMA',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'light',
    use3dTerrain: true,
    title: 'Senderos',
    subtitle: 'Senderos más importantes de La Palma',
    byline: 'M2B ',
    footer: 'Source: senderosLaPalma, Visitlapalma',
    chapters: [
        {
            id: 'ruta1',
            alignment: 'left',
            hidden: false,
            title: 'CUBO DE LA GALGA',
            image: 'https://upload.wikimedia.org/wikipedia/commons/f/f5/Cubo_de_la_Galga-Puntallana-La_Palma.jpg',
            description: 'Se trata de un sendero circular de baja dificultad que tiene unos 11 kilómetros y una duración aproximada de cuatro horas. Existe una variante que consiste en dejar el coche en el túnel de La Galga (donde se encuentra un Punto de Información Ambiental), entrar a pie en el Cubo de la Galga y volver a salir por donde mismo. Es la opción más corta. Esta caminata permite admirar la laurisilva de la isla y discurre por una zona fresca y sombreada, por lo que resulta apta para toda la familia. Es uno de esos senderos de La Palma que te dan la sensación de estar entrando en un bosque del que va a salir, en breve, un duende. Nos recuerda porqué La Palma es conocida también como La Isla Verde y un auténtico muestrario de su principal icono: su naturaleza y vegetación.',
            location: {
                center: [-17.77777778300900, 28.76736291179302],
                zoom: 14,
                pitch: 40,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },{
            id: 'Ruta2',
            alignment: 'right',
            hidden: false,
            title: 'CAMINO REAL DE LA COSTA. BARLOVENTO-GARAFÍA',
            image: 'https://www.visitlapalma.es/wp-content/uploads/2017/12/LaPalma_DragoCostaNorte2_Sa%C3%BAlSantos.jpg',
            description: 'Larga ruta de senderismo que atraviesa uno de los paisajes más tradicionales y auténticos de la isla: caminos centenarios bien conservados, un paisaje rural intacto, los cardones en Juan Adalid y Barranco de la Luz y el mar. Mar del norte, casi siempre bravo. Una de las rutas de senderismo más bonitas de la isla',
            location: {
                center: [-17.836407531088927, 28.829395936572137],
                zoom: 14.5,
                pitch: 60,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },{
            id: 'ruta3',
            alignment: 'left',
            hidden: false,
            title: 'TAZACORTE - ROQUE DE LOS MUCHACHOS',
            image: 'https://i0.wp.com/vagamundosviajeros.com/wp-content/uploads/2021/01/canarias-la-palma-roque-de-los-muchachos-observatorio-astronomico-atardecer.jpeg?resize=760%2C489&ssl=1',
            description: 'Bajada dura y continua además de muy técnica en bastantes tramos donde se desciende del techo de la isla, los 2426 m del Roque de los Muchachos, al puerto de Tazacorte siguiendo el GR-131 del Bastón de la isla. Fantástico contraste de paisajes a medida que se baja de la cumbre hasta el mar.',
            location: {
                center: [-17.921009149331415, 28.699141827778746],
                zoom: 13.5,
                pitch: 80,
                bearing: -13.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },{
            id: 'ruta4',
            alignment: 'left',
            hidden: false,
            title: 'Pico Bejenado. Parque Nacional de la Caldera de Taburiente',
            image: '',
            description: '<iframe width="560" height="315" src="https://www.youtube.com/embed/TLbK0YocAUQ?start=23" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
            location: {
                center: [-17.879256203010862, 28.695301364826165],
                zoom: 14,
                pitch: 60,
                bearing: -10.2
            },
             mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },{
            id: 'ruta5',
            alignment: 'right',
            hidden: false,
            title: 'Volcán de San Juan',
            image: 'https://www.holaislascanarias.com/sites/default/files/styles/16_9_desktop/public/resources/header_images/Ruta-Volcanes_052-cab-D.jpg?itok=fNqd1MfO',
            description: 'Situada entre las comarcas centro y sur de la isla de La Palma, la ruta de los Volcanes ofrece un trekking natural a lo largo de lo que en su día fue una importante vía de comunicación entre comarcas palmeras. Este camino, acondicionado y señalado, transcurre a través de los municipios de El Paso, Mazo y Fuencaliente, dentro del Parque Natural de Cumbre Vieja. Con vegetación escasa y pendientes de exigencia alta, conviene vestir equipación adecuada, como un buen calzado de montaña y protección para la cabeza, así como llevar abundante agua y alimentos, ya que se trata de un sendero de 6-8 horas de duración (según la persona).',
            location: {
                center: [-17.840453086474368, 28.59595155123793],
                zoom: 14,
                pitch: 60,
                bearing: -10.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },{
            id: 'mapaAlojamientos',
            alignment: 'center',
            hidden: false,
            title: 'Alojamientos turísticos',
            image: '',
            description: '<iframe width="100%" height="800px" src="../LP_alojamientos.html"></iframe>',
            location: {
                center: [-17.840453086474368, 28.59595155123793],
                zoom: 14,
                pitch: 60,
                bearing: -10.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },{
            id: 'mapaRutas',
            alignment: 'center',
            hidden: false,
            title: 'Rutas en el mapa',
            image: '',
            description: '<iframe width="100%" height="800px" src="../LP_mapa-rutas3d.html"></iframe>',
            location: {
                center: [-17.840453086474368, 28.59595155123793],
                zoom: 14,
                pitch: 60,
                bearing: -10.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
