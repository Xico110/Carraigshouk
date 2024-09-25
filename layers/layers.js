var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Coir46_1 = new ol.format.GeoJSON();
var features_Coir46_1 = format_Coir46_1.readFeatures(json_Coir46_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Coir46_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Coir46_1.addFeatures(features_Coir46_1);
var lyr_Coir46_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Coir46_1, 
                style: style_Coir46_1,
                popuplayertitle: "Coir (46)",
                interactive: true,
                title: '<img src="styles/legend/Coir46_1.png" /> Coir (46)'
            });
var format_TimberDams44_2 = new ol.format.GeoJSON();
var features_TimberDams44_2 = format_TimberDams44_2.readFeatures(json_TimberDams44_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TimberDams44_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TimberDams44_2.addFeatures(features_TimberDams44_2);
var lyr_TimberDams44_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TimberDams44_2, 
                style: style_TimberDams44_2,
                popuplayertitle: "Timber Dams (44)",
                interactive: true,
                title: '<img src="styles/legend/TimberDams44_2.png" /> Timber Dams (44)'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Coir46_1.setVisible(true);lyr_TimberDams44_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Coir46_1,lyr_TimberDams44_2];
lyr_Coir46_1.set('fieldAliases', {'Name': 'Name', 'X': 'X', 'Y': 'Y', });
lyr_TimberDams44_2.set('fieldAliases', {'Name': 'Name', 'X': 'X', 'Y': 'Y', });
lyr_Coir46_1.set('fieldImages', {'Name': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_TimberDams44_2.set('fieldImages', {'Name': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_Coir46_1.set('fieldLabels', {'Name': 'header label - visible with data', 'X': 'hidden field', 'Y': 'hidden field', });
lyr_TimberDams44_2.set('fieldLabels', {'Name': 'header label - visible with data', 'X': 'hidden field', 'Y': 'hidden field', });
lyr_TimberDams44_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});