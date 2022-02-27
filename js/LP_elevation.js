
  // Full list options at "leaflet-elevation.js"
  var elevation_options = {

    // Default chart colors: theme lime-theme, magenta-theme, ...
    theme: "lightblue-theme",

    // Chart container outside/inside map container
    detached: true,

    // if (detached), the elevation chart container
    elevationDiv: "#elevation-div",

    // if (!detached) autohide chart profile on chart mouseleave
    autohide: false,

    // if (!detached) initial state of chart profile control
    collapsed: false,

    // if (!detached) control position on one of map corners
    position: "topright",

    // Autoupdate map center on chart mouseover.
    followMarker: true,

    // Autoupdate map bounds on chart update.
    autofitBounds: true,

    // Chart distance/elevation units.
    imperial: false,

    // [Lat, Long] vs [Long, Lat] points. (leaflet default: [Lat, Long])
    reverseCoords: false,

    // Acceleration chart profile: true || "summary" || "disabled" || false
    acceleration: false,

    // Slope chart profile: true || "summary" || "disabled" || false
    slope: false,

    // Speed chart profile: true || "summary" || "disabled" || false
    speed: false,

    // Display time info: true || "summary" || false
    time: false,

    // Display distance info: true || "summary"
    distance: true,

    // Display altitude info: true || "summary"
    altitude: true,

    // Summary track info style: "inline" || "multiline" || false
    summary: 'multiline',

    // Download link: "link" || false || "modal"
    downloadLink: 'link',

    // Toggle chart ruler filter
    ruler: true,

    // Toggle chart legend filter
    legend: true,

    // Toggle "leaflet-almostover" integration
    almostOver: true,

    // Toggle "leaflet-distance-markers" integration
    distanceMarkers: false,

    // Display track datetimes: true || false
    timestamps: false,

    // Display track waypoints: true || "markers" || "dots" || false
    waypoints: true,

    // Toggle custom waypoint icons: true || { associative array of <sym> tags } || false
    wptIcons: {
      '': L.divIcon({
        className: 'elevation-waypoint-marker',
        html: '<i class="elevation-waypoint-icon"></i>',
        iconSize: [30, 30],
        iconAnchor: [8, 30],
      }),
    },

    // Toggle waypoint labels: true || "markers" || "dots" || false
    wptLabels: true,

    // Render chart profiles as Canvas or SVG Paths
    preferCanvas: true,

  };

  // Instantiate map (leaflet-ui).
  var map = new L.Map('map', { mapTypeId: 'terrain', center: [41.4583, 12.7059], zoom: 5 });

  // Instantiate elevation control.
  var controlElevation = L.control.elevation(elevation_options).addTo(map);

  // Load track from url (allowed data types: "*.geojson", "*.gpx", "*.tcx")
  controlElevation.load("https://raruto.github.io/leaflet-elevation/examples/via-emilia.gpx");
