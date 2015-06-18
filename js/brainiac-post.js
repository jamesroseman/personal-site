//$(document).on('ready',function(){
  // var x = document.getElementById("demo");
  // var showPosition = function(position){
  //   //x.innerHTML = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude; 
  //   console.log(position);
  // };

  // if (navigator.geolocation){
  //   navigator.geolocation.getCurrentPosition(showPosition);
  // }
  // else{
  //   x.innerHTML = "Geolocation is not supported by this browser.";
  // }

  var dummy; // Dummy variable to be filled with junk

  // Sigma graph
  sigma.parsers.json('/content/LocalizationSigmaExampleData.json', {
    container: 'LocalizationProject1Graph',
    settings: {
      defaultNodeColor: '#ec5148',
      labelThreshold: 10
    }
  });

  // Add a point to the map
  var addToMap = function (lat, long, map, image){
    var myLatlng = new google.maps.LatLng(lat,long);
    dummy = new google.maps.Marker({
      position: myLatlng,
      map: map,
      icon: image
    });
  };

  // Main function, initializes the map and sets socket listeners
  var initialize = function () {
    // Create the map and set center location
    var myLatlng = new google.maps.LatLng(39.0997,-94.5783);

    var mapOptions = {
      zoom: 3,
      center: myLatlng,
      disableDefaultUI: true,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    };

    map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

    addToMap(40.7974,-74.481536,map,'/images/localization/teal_marker.jpg');
    addToMap(34.020029,-118.286931,map,'/images/localization/teal_marker.jpg');
    addToMap(29.426468,-98.491233,map,'/images/localization/teal_marker.jpg');
    addToMap(37.62261,-122.37804,map,'/images/localization/teal_marker.jpg');
    addToMap(61.59938,-149.126804,map,'/images/localization/teal_marker.jpg');
    addToMap(39.653671,-104.959502,map,'/images/localization/teal_marker.jpg');
    addToMap(47.850015,-122.279457,map,'/images/localization/teal_marker.jpg');
    addToMap(52.114942,-106.632519,map,'/images/localization/teal_marker.jpg');
    addToMap(47.622767,-122.33668,map,'/images/localization/teal_marker.jpg');
    addToMap(41.643112,-88.001369,map,'/images/localization/teal_marker.jpg');
  };

  // Main function, initializes the map and sets socket listeners
  var initialize_2 = function () {
    // Create the map and set center location
    var myLatlng = new google.maps.LatLng(40.7974,-74.481536);

    var mapOptions = {
      zoom: 10,
      center: myLatlng,
      disableDefaultUI: true,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    };

    map = new google.maps.Map(document.getElementById("map-canvas-2"), mapOptions);

    addToMap(40.7974,-74.481536,map,'/images/localization/teal_marker.jpg');
    addToMap(40.8600608260719,-74.43369456542476,map,'/images/localization/red_marker.jpg');
    addToMap(40.83355333981307,-74.39870532449352,map,'/images/localization/red_marker.jpg');
    addToMap(40.76118749496363,-74.3987955699618,map,'/images/localization/red_marker.jpg');
    addToMap(40.73471945216056,-74.43378481107229,map,'/images/localization/red_marker.jpg');
    addToMap(40.73471945216056,-74.52928718892775,map,'/images/localization/red_marker.jpg');
    addToMap(40.76118749496363,-74.56427643003822,map,'/images/localization/red_marker.jpg');
    addToMap(40.83355333981307,-74.56436667550652,map,'/images/localization/red_marker.jpg');
    addToMap(40.8600608260719,-74.52937743457527,map,'/images/localization/red_marker.jpg');

    var lineCoordinates = [
      new google.maps.LatLng(40.8600608260719,-74.43369456542476),
      new google.maps.LatLng(40.83355333981307,-74.39870532449352),
      new google.maps.LatLng(40.76118749496363,-74.3987955699618),
      new google.maps.LatLng(40.73471945216056,-74.43378481107229),
      new google.maps.LatLng(40.73471945216056,-74.52928718892775),
      new google.maps.LatLng(40.76118749496363,-74.56427643003822),
      new google.maps.LatLng(40.83355333981307,-74.56436667550652),
      new google.maps.LatLng(40.8600608260719,-74.52937743457527),
      new google.maps.LatLng(40.8600608260719,-74.43369456542476),
    ];
    var line = new google.maps.Polyline({
      path: lineCoordinates,
      geodesic: true,
      strokeColor: '#FF0000',
      strokeOpacity: 1.0,
      strokeWeight: 2
    });
    line.setMap(map);
  };






/*

  //      INTERACTIVE DEMO PART






  // K - 8
  // D - 5
  // Main function, initializes the map and sets socket listeners
  var initialize_3 = function () {
    // Create the map and set center location
    var myLatlng = new google.maps.LatLng(40.7974,-74.481536);

    var mapOptions = {
      zoom: 11,
      center: myLatlng,
      disableDefaultUI: true,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    };

    map = new google.maps.Map(document.getElementById("map-canvas-3"), mapOptions);

    addToMap(40.7974,-74.481536,map,'/images/localization/teal_marker.jpg');
    addToMap(40.8600608260719,-74.43369456542476,map,'/images/localization/red_marker.jpg')
    addToMap(40.83355333981307,-74.39870532449352,map,'/images/localization/red_marker.jpg')
    addToMap(40.76118749496363,-74.3987955699618,map,'/images/localization/red_marker.jpg')
    addToMap(40.73471945216056,-74.43378481107229,map,'/images/localization/red_marker.jpg')
    addToMap(40.73471945216056,-74.52928718892775,map,'/images/localization/red_marker.jpg')
    addToMap(40.76118749496363,-74.56427643003822,map,'/images/localization/red_marker.jpg')
    addToMap(40.83355333981307,-74.56436667550652,map,'/images/localization/red_marker.jpg')
    addToMap(40.8600608260719,-74.52937743457527,map,'/images/localization/red_marker.jpg')

    var lineCoordinates = [
      new google.maps.LatLng(40.8600608260719,-74.43369456542476),
      new google.maps.LatLng(40.83355333981307,-74.39870532449352),
      new google.maps.LatLng(40.76118749496363,-74.3987955699618),
      new google.maps.LatLng(40.73471945216056,-74.43378481107229),
      new google.maps.LatLng(40.73471945216056,-74.52928718892775),
      new google.maps.LatLng(40.76118749496363,-74.56427643003822),
      new google.maps.LatLng(40.83355333981307,-74.56436667550652),
      new google.maps.LatLng(40.8600608260719,-74.52937743457527),
      new google.maps.LatLng(40.8600608260719,-74.43369456542476)
    ];
    var line = new google.maps.Polyline({
      path: lineCoordinates,
      geodesic: true,
      strokeColor: '#FF0000',
      strokeOpacity: 1.0,
      strokeWeight: 2
    });
    line.setMap(map);
  };


  // Main function, initializes the map and sets socket listeners
  var initialize_4 = function () {
    // Create the map and set center location
    var myLatlng = new google.maps.LatLng(40.7974,-74.481536);

    var mapOptions = {
      zoom: 11,
      center: myLatlng,
      disableDefaultUI: true,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    };

    map = new google.maps.Map(document.getElementById("map-canvas-4"), mapOptions);

    addToMap(40.7974,-74.481536,map,'/images/localization/teal_marker.jpg');
    addToMap(40.86866529981319,-74.46491868699718,map,'/images/localization/red_marker.jpg');
    addToMap(40.865397073405106,-74.44880789660019,map,'/images/localization/red_marker.jpg');
    addToMap(40.8600608260719,-74.43369456542476,map,'/images/localization/red_marker.jpg');
    addToMap(40.85281917226581,-74.42003895550422,map,'/images/localization/red_marker.jpg');
    addToMap(40.84389272856604,-74.4082565424453,map,'/images/localization/red_marker.jpg');
    addToMap(40.83355333981307,-74.39870532449352,map,'/images/localization/red_marker.jpg');
    addToMap(40.822115744336855,-74.39167494612317,map,'/images/localization/red_marker.jpg');
    addToMap(40.80992794061432,-74.38737796630726,map,'/images/localization/red_marker.jpg');
    addToMap(40.78479555119942,-74.3874136069951,map,'/images/localization/red_marker.jpg');
    addToMap(40.77261459674544,-74.39174192872893,map,'/images/localization/red_marker.jpg');
    addToMap(40.76118749496363,-74.3987955699618,map,'/images/localization/red_marker.jpg');
    addToMap(40.750860978642706,-74.40835916587194,map,'/images/localization/red_marker.jpg');
    addToMap(40.74194823351135,-74.4201415790016,map,'/images/localization/red_marker.jpg');
    addToMap(40.73471945216056,-74.43378481107229,map,'/images/localization/red_marker.jpg');
    addToMap(40.72939369855739,-74.4488748794098,map,'/images/localization/red_marker.jpg');
    addToMap(40.72613232144918,-74.46495432781794,map,'/images/localization/red_marker.jpg');
    addToMap(40.72613232144918,-74.4981176721821,map,'/images/localization/red_marker.jpg');
    addToMap(40.72939369855739,-74.51419712059023,map,'/images/localization/red_marker.jpg');
    addToMap(40.73471945216056,-74.52928718892775,map,'/images/localization/red_marker.jpg');
    addToMap(40.74194823351135,-74.54293042099846,map,'/images/localization/red_marker.jpg');
    addToMap(40.750860978642706,-74.5547128341281,map,'/images/localization/red_marker.jpg');
    addToMap(40.76118749496363,-74.56427643003822,map,'/images/localization/red_marker.jpg');
    addToMap(40.77261459674544,-74.5713300712711,map,'/images/localization/red_marker.jpg');
    addToMap(40.78479555119942,-74.57565839300493,map,'/images/localization/red_marker.jpg');
    addToMap(40.80992794061432,-74.57569403369267,map,'/images/localization/red_marker.jpg');
    addToMap(40.822115744336855,-74.57139705387677,map,'/images/localization/red_marker.jpg');
    addToMap(40.83355333981307,-74.56436667550652,map,'/images/localization/red_marker.jpg');
    addToMap(40.84389272856604,-74.55481545755472,map,'/images/localization/red_marker.jpg');
    addToMap(40.85281917226581,-74.5430330444957,map,'/images/localization/red_marker.jpg');
    addToMap(40.8600608260719,-74.52937743457527,map,'/images/localization/red_marker.jpg');
    addToMap(40.865397073405106,-74.51426410339974,map,'/images/localization/red_marker.jpg');
    addToMap(40.86866529981319,-74.49815331300286,map,'/images/localization/red_marker.jpg');
      addToMap(40.8600608260719,-74.52937743457527,map,'/images/localization/red_marker.jpg');

    var lineCoordinates = [
      new google.maps.LatLng(40.86866529981319,-74.46491868699718),
      new google.maps.LatLng(40.865397073405106,-74.44880789660019),
      new google.maps.LatLng(40.8600608260719,-74.43369456542476),
      new google.maps.LatLng(40.85281917226581,-74.42003895550422),
      new google.maps.LatLng(40.84389272856604,-74.4082565424453),
      new google.maps.LatLng(40.83355333981307,-74.39870532449352),
      new google.maps.LatLng(40.822115744336855,-74.39167494612317),
      new google.maps.LatLng(40.80992794061432,-74.38737796630726),
      new google.maps.LatLng(40.78479555119942,-74.3874136069951),
      new google.maps.LatLng(40.77261459674544,-74.39174192872893),
      new google.maps.LatLng(40.76118749496363,-74.3987955699618),
      new google.maps.LatLng(40.750860978642706,-74.40835916587194),
      new google.maps.LatLng(40.74194823351135,-74.4201415790016),
      new google.maps.LatLng(40.73471945216056,-74.43378481107229),
      new google.maps.LatLng(40.72939369855739,-74.4488748794098),
      new google.maps.LatLng(40.72613232144918,-74.46495432781794),
      new google.maps.LatLng(40.72613232144918,-74.4981176721821),
      new google.maps.LatLng(40.72939369855739,-74.51419712059023),
      new google.maps.LatLng(40.73471945216056,-74.52928718892775),
      new google.maps.LatLng(40.74194823351135,-74.54293042099846),
      new google.maps.LatLng(40.750860978642706,-74.5547128341281),
      new google.maps.LatLng(40.76118749496363,-74.56427643003822),
      new google.maps.LatLng(40.77261459674544,-74.5713300712711),
      new google.maps.LatLng(40.78479555119942,-74.57565839300493),
      new google.maps.LatLng(40.80992794061432,-74.57569403369267),
      new google.maps.LatLng(40.822115744336855,-74.57139705387677),
      new google.maps.LatLng(40.83355333981307,-74.56436667550652),
      new google.maps.LatLng(40.84389272856604,-74.55481545755472),
      new google.maps.LatLng(40.85281917226581,-74.5430330444957),
      new google.maps.LatLng(40.8600608260719,-74.52937743457527),
      new google.maps.LatLng(40.865397073405106,-74.51426410339974),
      new google.maps.LatLng(40.86866529981319,-74.49815331300286),
      new google.maps.LatLng(40.86866529981319,-74.46491868699718)
    ];
    var line = new google.maps.Polyline({
      path: lineCoordinates,
      geodesic: true,
      strokeColor: '#FF0000',
      strokeOpacity: 1.0,
      strokeWeight: 2
    });
    line.setMap(map);
  };


  // Main function, initializes the map and sets socket listeners
  var initialize_5 = function () {
    // Create the map and set center location
    var myLatlng = new google.maps.LatLng(40.7974,-74.481536);

    var mapOptions = {
      zoom: 10,
      center: myLatlng,
      disableDefaultUI: true,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    };

    map = new google.maps.Map(document.getElementById("map-canvas-5"), mapOptions);

    addToMap(40.7974,-74.481536,map,'/images/localization/teal_marker.jpg');
    addToMap(40.92270153800204,-74.38576278145068,map,'/images/localization/red_marker.jpg');
    addToMap(40.86964719500793,-74.31578475030524,map,'/images/localization/red_marker.jpg');
    addToMap(40.7249161451046,-74.3161457295965,map,'/images/localization/red_marker.jpg');
    addToMap(40.672019574945686,-74.38612376360952,map,'/images/localization/red_marker.jpg');
    addToMap(40.672019574945686,-74.57694823639052,map,'/images/localization/red_marker.jpg');
    addToMap(40.7249161451046,-74.64692627040353,map,'/images/localization/red_marker.jpg');
    addToMap(40.86964719500793,-74.64728724969478,map,'/images/localization/red_marker.jpg');
    addToMap(40.92270153800204,-74.57730921854926,map,'/images/localization/red_marker.jpg');

    var lineCoordinates = [
      new google.maps.LatLng(40.92270153800204,-74.38576278145068),
      new google.maps.LatLng(40.86964719500793,-74.31578475030524),
      new google.maps.LatLng(40.7249161451046,-74.3161457295965),
      new google.maps.LatLng(40.672019574945686,-74.38612376360952),
      new google.maps.LatLng(40.672019574945686,-74.57694823639052),
      new google.maps.LatLng(40.7249161451046,-74.64692627040353),
      new google.maps.LatLng(40.86964719500793,-74.64728724969478),
      new google.maps.LatLng(40.92270153800204,-74.57730921854926),
      new google.maps.LatLng(40.92270153800204,-74.38576278145068)
    ];
    var line = new google.maps.Polyline({
      path: lineCoordinates,
      geodesic: true,
      strokeColor: '#FF0000',
      strokeOpacity: 1.0,
      strokeWeight: 2
    });
    line.setMap(map);
  };


  // Main function, initializes the map and sets socket listeners
  var initialize_6 = function () {
    // Create the map and set center location
    var myLatlng = new google.maps.LatLng(40.7974,-74.481536);

    var mapOptions = {
      zoom: 10,
      center: myLatlng,
      disableDefaultUI: true,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    };

    map = new google.maps.Map(document.getElementById("map-canvas-6"), mapOptions);

    addToMap(40.7974,-74.481536,map,'/images/localization/teal_marker.jpg');
    addToMap(40.93992785552874,-74.44826565062753,map,'/images/localization/red_marker.jpg');
    addToMap(40.933384539674584,-74.41601268399884,map,'/images/localization/red_marker.jpg');
    addToMap(40.92270153800204,-74.38576278145068,map,'/images/localization/red_marker.jpg');
    addToMap(40.908205356648,-74.35843928180682,map,'/images/localization/red_marker.jpg');
    addToMap(40.890338792527025,-74.33487461642355,map,'/images/localization/red_marker.jpg');
    addToMap(40.86964719500793,-74.31578475030524,map,'/images/localization/red_marker.jpg');
    addToMap(40.8467615946851,-74.30174743741316,map,'/images/localization/red_marker.jpg');
    addToMap(40.82237924860846,-74.29318494828802,map,'/images/localization/red_marker.jpg');
    addToMap(40.77211472048835,-74.29332750964603,map,'/images/localization/red_marker.jpg');
    addToMap(40.747759771126375,-74.30201536549511,map,'/images/localization/red_marker.jpg');
    addToMap(40.7249161451046,-74.3161457295965,map,'/images/localization/red_marker.jpg');
    addToMap(40.70427603685174,-74.33528510799201,map,'/images/localization/red_marker.jpg');
    addToMap(40.6864642666614,-74.35884977450777,map,'/images/localization/red_marker.jpg');
    addToMap(40.672019574945686,-74.38612376360952,map,'/images/localization/red_marker.jpg');
    addToMap(40.66137854814426,-74.41628061534176,map,'/images/localization/red_marker.jpg');
    addToMap(40.65486262950608,-74.44840821411404,map,'/images/localization/red_marker.jpg');
    addToMap(40.65486262950608,-74.51466378588599,map,'/images/localization/red_marker.jpg');
    addToMap(40.66137854814426,-74.54679138465826,map,'/images/localization/red_marker.jpg');
    addToMap(40.672019574945686,-74.57694823639052,map,'/images/localization/red_marker.jpg');
    addToMap(40.6864642666614,-74.60422222549226,map,'/images/localization/red_marker.jpg');
    addToMap(40.70427603685174,-74.62778689200802,map,'/images/localization/red_marker.jpg');
    addToMap(40.7249161451046,-74.64692627040353,map,'/images/localization/red_marker.jpg');
    addToMap(40.747759771126375,-74.66105663450483,map,'/images/localization/red_marker.jpg');
    addToMap(40.77211472048835,-74.66974449035389,map,'/images/localization/red_marker.jpg');
    addToMap(40.82237924860846,-74.66988705171202,map,'/images/localization/red_marker.jpg');
    addToMap(40.8467615946851,-74.66132456258687,map,'/images/localization/red_marker.jpg');
    addToMap(40.86964719500793,-74.64728724969478,map,'/images/localization/red_marker.jpg');
    addToMap(40.890338792527025,-74.62819738357648,map,'/images/localization/red_marker.jpg');
    addToMap(40.908205356648,-74.6046327181932,map,'/images/localization/red_marker.jpg');
    addToMap(40.92270153800204,-74.57730921854926,map,'/images/localization/red_marker.jpg');
    addToMap(40.933384539674584,-74.54705931600108,map,'/images/localization/red_marker.jpg');
    addToMap(40.93992785552874,-74.5148063493724,map,'/images/localization/red_marker.jpg');

    var lineCoordinates = [
      new google.maps.LatLng(40.93992785552874,-74.44826565062753),
      new google.maps.LatLng(40.933384539674584,-74.41601268399884),
      new google.maps.LatLng(40.92270153800204,-74.38576278145068),
      new google.maps.LatLng(40.908205356648,-74.35843928180682),
      new google.maps.LatLng(40.890338792527025,-74.33487461642355),
      new google.maps.LatLng(40.86964719500793,-74.31578475030524),
      new google.maps.LatLng(40.8467615946851,-74.30174743741316),
      new google.maps.LatLng(40.82237924860846,-74.29318494828802),
      new google.maps.LatLng(40.77211472048835,-74.29332750964603),
      new google.maps.LatLng(40.747759771126375,-74.30201536549511),
      new google.maps.LatLng(40.7249161451046,-74.3161457295965),
      new google.maps.LatLng(40.70427603685174,-74.33528510799201),
      new google.maps.LatLng(40.6864642666614,-74.35884977450777),
      new google.maps.LatLng(40.672019574945686,-74.38612376360952),
      new google.maps.LatLng(40.66137854814426,-74.41628061534176),
      new google.maps.LatLng(40.65486262950608,-74.44840821411404),
      new google.maps.LatLng(40.65486262950608,-74.51466378588599),
      new google.maps.LatLng(40.66137854814426,-74.54679138465826),
      new google.maps.LatLng(40.672019574945686,-74.57694823639052),
      new google.maps.LatLng(40.6864642666614,-74.60422222549226),
      new google.maps.LatLng(40.70427603685174,-74.62778689200802),
      new google.maps.LatLng(40.7249161451046,-74.64692627040353),
      new google.maps.LatLng(40.747759771126375,-74.66105663450483),
      new google.maps.LatLng(40.77211472048835,-74.66974449035389),
      new google.maps.LatLng(40.82237924860846,-74.66988705171202),
      new google.maps.LatLng(40.8467615946851,-74.66132456258687),
      new google.maps.LatLng(40.86964719500793,-74.64728724969478),
      new google.maps.LatLng(40.890338792527025,-74.62819738357648),
      new google.maps.LatLng(40.908205356648,-74.6046327181932),
      new google.maps.LatLng(40.92270153800204,-74.57730921854926),
      new google.maps.LatLng(40.933384539674584,-74.54705931600108),
      new google.maps.LatLng(40.93992785552874,-74.5148063493724),
      new google.maps.LatLng(40.93992785552874,-74.44826565062753),

    ];
    var line = new google.maps.Polyline({
      path: lineCoordinates,
      geodesic: true,
      strokeColor: '#FF0000',
      strokeOpacity: 1.0,
      strokeWeight: 2
    });
    line.setMap(map);
  };

  google.maps.event.addDomListener(window, 'load', initialize);
  google.maps.event.addDomListener(window, 'load', initialize_2);
  google.maps.event.addDomListener(window, 'load', initialize_3);
  google.maps.event.addDomListener(window, 'load', initialize_4);
  google.maps.event.addDomListener(window, 'load', initialize_5);
  google.maps.event.addDomListener(window, 'load', initialize_6);



  $('#3').on('mouseup',function(){
    if(!$('#map-canvas-3').hasClass('selected')){
      $('#map-canvas-3').toggleClass('hidden');
      $('#3').toggleClass('btn-success');
      $('a.selected').toggleClass('btn-success');
      $('a.selected').toggleClass('selected');
      $('#3').toggleClass('selected');      
      $('div.selected').toggleClass('hidden');
      $('div.selected').toggleClass('selected');
      $('#map-canvas-3').toggleClass('selected');
    }
  });
  $('#4').on('mouseup',function(){
    if(!$('#map-canvas-4').hasClass('selected')){
      $('#map-canvas-4').toggleClass('hidden');
      $('#4').toggleClass('btn-success');
      $('a.selected').toggleClass('btn-success');
      $('a.selected').toggleClass('selected');
      $('#4').toggleClass('selected');
      $('div.selected').toggleClass('hidden');
      $('div.selected').toggleClass('selected');
      $('#map-canvas-4').toggleClass('selected');
    }
  });
  $('#5').on('mouseup',function(){
    if(!$('#map-canvas-5').hasClass('selected')){
      $('#map-canvas-5').toggleClass('hidden');
      $('#5').toggleClass('btn-success');
      $('a.selected').toggleClass('btn-success');
      $('a.selected').toggleClass('selected');
      $('#5').toggleClass('selected');
      $('div.selected').toggleClass('hidden');
      $('div.selected').toggleClass('selected');
      $('#map-canvas-5').toggleClass('selected');
    }
  });
  $('#6').on('mouseup',function(){
    if(!$('#map-canvas-6').hasClass('selected')){
      $('#map-canvas-6').toggleClass('hidden');
      $('#6').toggleClass('btn-success');
      $('a.selected').toggleClass('btn-success');
      $('a.selected').toggleClass('selected');
      $('#6').toggleClass('selected');
      $('div.selected').toggleClass('hidden');
      $('div.selected').toggleClass('selected');
      $('#map-canvas-6').toggleClass('selected');
    }
  });

*/

initialize();
initialize_2();

//});