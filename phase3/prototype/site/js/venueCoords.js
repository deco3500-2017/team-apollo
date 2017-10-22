//An array to store all of the venues as objects with an ID and its coordinates
var venueArray = new Array();

//All of the geofence data for all of the venues
var AEBCoords = [{
  lng: 153.015701,
  lat: -27.499112
},
{
  lng: 153.015550,
  lat: -27.499226
},
{
  lng: 153.014697,
  lat: -27.499464
},
{
  lng: 153.014751,
  lat: -27.499845
},
{
  lng: 153.015443,
  lat: -27.499640
},
{
  lng: 153.015684,
  lat: -27.499869
},
{
  lng: 153.015894,
  lat: -27.499688
},
{
  lng: 153.015701,
  lat: -27.499112
}
];

var AEBPoint = {
  lng: 153.015082,
  lat: -27.499623,
}

var redroomCoords = [{
  lng: 153.015845,
  lat: -27.497537
},
{
  lng: 153.015845,
  lat: -27.497558
},
{
  lng: 153.016132,
  lat: -27.497561
},
{
  lng: 153.016122,
  lat: -27.497363
},
{
  lng: 153.015776,
  lat: -27.497349
},
{
  lng: 153.015762,
  lat: -27.497558
},
{
  lng: 153.015845,
  lat: -27.497537
}
];

var RECoords = [{
  lng: 152.992493,
  lat: -27.486261
},
{
  lng: 152.992717,
  lat: -27.486239
},
{
  lng: 152.992736,
  lat: -27.486249
},
{
  lng: 152.992731,
  lat: -27.486342
},
{
  lng: 152.992686,
  lat: -27.486341
},
{
  lng: 152.992689,
  lat: -27.486396
},
{
  lng: 152.992486,
  lat: -27.486396
},
{
  lng: 152.992463,
  lat: -27.486266
},
{
  lng: 152.992493,
  lat: -27.486261
}
];

var regattaCoords = [{
  lng: 152.995965,
  lat: -27.482792
},
{
  lng: 152.996362,
  lat: -27.482904
},
{
  lng: 152.996576,
  lat: -27.482485
},
{
  lng: 152.996137,
  lat: -27.482330
},
{
  lng: 152.995965,
  lat: -27.482792
}
];

var normanCoords = [{
  lng: 153.035131,
  lat: -27.491758
},
{
  lng: 153.035053,
  lat: -27.492160
},
{
  lng: 153.035576,
  lat: -27.492236
},
{
  lng: 153.035603,
  lat: -27.492143
},
{
  lng: 153.035785,
  lat: -27.492153
},
{
  lng: 153.035812,
  lat: -27.491967
},
{
  lng: 153.035654,
  lat: -27.491839
},
{
  lng: 153.035131,
  lat: -27.491758
}
];

var archiveCoords = [{
  lng: 153.012546,
  lat: -27.478963
},
{
  lng: 153.012506,
  lat: -27.479216
},
{
  lng: 153.012654,
  lat: -27.479258
},
{
  lng: 153.012713,
  lat: -27.479311
},
{
  lng: 153.012954,
  lat: -27.479173
},
{
  lng: 153.012745,
  lat: -27.478882
},
{
  lng: 153.012546,
  lat: -27.478963
}
];

var boundaryCoords = [{
  lng: 153.012061,
  lat: -27.478849
},
{
  lng: 153.012021,
  lat: -27.479092
},
{
  lng: 153.012318,
  lat: -27.479135
},
{
  lng: 153.012359,
  lat: -27.478901
},
{
  lng: 153.012061,
  lat: -27.478849
}
];

var lycheeCoords = [{
  lng: 153.012637,
  lat: -27.478316
},
{
  lng: 153.012613,
  lat: -27.478480
},
{
  lng: 153.012796,
  lat: -27.478502
},
{
  lng: 153.012815,
  lat: -27.478347
},
{
  lng: 153.012637,
  lat: -27.478316
}
];

var foxCoords = [{
  lng: 153.017254,
  lat: -27.474149
},
{
  lng: 153.017398,
  lat: -27.474371
},
{
  lng: 153.017667,
  lat: -27.474235
},
{
  lng: 153.017514,
  lat: -27.474023
},
{
  lng: 153.017254,
  lat: -27.474149
}
];

var treasuryCoords = [{
  lng: 153.023369,
  lat: -27.472572
},
{
  lng: 153.023672,
  lat: -27.472372
},
{
  lng: 153.024037,
  lat: -27.472836
},
{
  lng: 153.023739,
  lat: -27.473017
},
{
  lng: 153.023369,
  lat: -27.472572
}
];

var SECoords = [{
  lng: 153.028272,
  lat: -27.469592
},
{
  lng: 153.028599,
  lat: -27.469340
},
{
  lng: 153.028798,
  lat: -27.469533
},
{
  lng: 153.028468,
  lat: -27.469785
},
{
  lng: 153.028272,
  lat: -27.469592
}
];

var ricsCoords = [{
  lng: 153.034787,
  lat: -27.458351
},
{
  lng: 153.034860,
  lat: -27.458408
},
{
  lng: 153.034791,
  lat: -27.458502
},
{
  lng: 153.034858,
  lat: -27.458561
},
{
  lng: 153.034779,
  lat: -27.458627
},
{
  lng: 153.034610,
  lat: -27.458497
},
{
  lng: 153.034787,
  lat: -27.458351
}
];

var foundryCoords = [{
  lng: 153.033054,
  lat: -27.457600
},
{
  lng: 153.033269,
  lat: -27.457769
},
{
  lng: 153.033524,
  lat: -27.457521
},
{
  lng: 153.033282,
  lat: -27.457364
},
{
  lng: 153.033054,
  lat: -27.457600
}
];

//Obects used to relate a geofence back to the venue in the database. IDs match their IDs in the database.
var redroom = {
  coords: redroomCoords,
  id: 1
};

venueArray.push(redroom);

var thefox = {
  coords: foxCoords,
  id: 2
};

venueArray.push(thefox);

var archive = {
  coords: archiveCoords,
  id: 3
};

venueArray.push(archive);

var lychee = {
  coords: lycheeCoords,
  id: 4
};

venueArray.push(lychee);

var norman = {
  coords: normanCoords,
  id: 5
};

venueArray.push(norman);

var treasury = {
  coords: treasuryCoords,
  id: 6
};

venueArray.push(treasury);

var aeb = {
  coords: AEBCoords,
  id: 7
};

venueArray.push(aeb);

var re = {
  coords: RECoords,
  id: 8
};

venueArray.push(re);

var regatta = {
  coords: regattaCoords,
  id: 9
};

venueArray.push(regatta);

var boundary = {
  coords: boundaryCoords,
  id: 10
};

venueArray.push(boundary);

var rics = {
  coords: ricsCoords,
  id: 11
};

venueArray.push(rics);

var stockexchange = {
  coords: SECoords,
  id: 12
};

venueArray.push(stockexchange);

var foundry = {
  coords: foundryCoords,
  id: 13
};

venueArray.push(foundry);


var lukesHouseCoords = [{
  lng: 153.020346,
  lat: -27.509033
},
{
  lng: 153.020175,
  lat: -27.510717
},
{
  lng: 153.023103,
  lat: -27.511002
},
{
  lng: 153.023618,
  lat: -27.509185
},
{
  lng: 153.020346,
  lat: -27.509033
}
];

var lukesHouse = {
  coords: lukesHouseCoords,
  id: 14
};

venueArray.push(lukesHouse);
