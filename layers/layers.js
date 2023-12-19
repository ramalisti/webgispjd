var wms_layers = [];

var format_PEMUKIMAN1_0 = new ol.format.GeoJSON();
var features_PEMUKIMAN1_0 = format_PEMUKIMAN1_0.readFeatures(json_PEMUKIMAN1_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PEMUKIMAN1_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEMUKIMAN1_0.addFeatures(features_PEMUKIMAN1_0);
var lyr_PEMUKIMAN1_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PEMUKIMAN1_0, 
                style: style_PEMUKIMAN1_0,
                interactive: true,
                title: '<img src="styles/legend/PEMUKIMAN1_0.png" /> PEMUKIMAN 1'
            });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_BANGUNAN_2 = new ol.format.GeoJSON();
var features_BANGUNAN_2 = format_BANGUNAN_2.readFeatures(json_BANGUNAN_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BANGUNAN_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BANGUNAN_2.addFeatures(features_BANGUNAN_2);
var lyr_BANGUNAN_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BANGUNAN_2, 
                style: style_BANGUNAN_2,
                interactive: true,
                title: '<img src="styles/legend/BANGUNAN_2.png" /> BANGUNAN'
            });
var format_LAHANTERBUKA2_3 = new ol.format.GeoJSON();
var features_LAHANTERBUKA2_3 = format_LAHANTERBUKA2_3.readFeatures(json_LAHANTERBUKA2_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LAHANTERBUKA2_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LAHANTERBUKA2_3.addFeatures(features_LAHANTERBUKA2_3);
var lyr_LAHANTERBUKA2_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LAHANTERBUKA2_3, 
                style: style_LAHANTERBUKA2_3,
                interactive: true,
                title: '<img src="styles/legend/LAHANTERBUKA2_3.png" /> LAHAN TERBUKA2'
            });
var format_SUNGAI_4 = new ol.format.GeoJSON();
var features_SUNGAI_4 = format_SUNGAI_4.readFeatures(json_SUNGAI_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUNGAI_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUNGAI_4.addFeatures(features_SUNGAI_4);
var lyr_SUNGAI_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SUNGAI_4, 
                style: style_SUNGAI_4,
                interactive: true,
                title: '<img src="styles/legend/SUNGAI_4.png" /> SUNGAI'
            });
var format_JALAN_5 = new ol.format.GeoJSON();
var features_JALAN_5 = format_JALAN_5.readFeatures(json_JALAN_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JALAN_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JALAN_5.addFeatures(features_JALAN_5);
var lyr_JALAN_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JALAN_5, 
                style: style_JALAN_5,
                interactive: true,
                title: '<img src="styles/legend/JALAN_5.png" /> JALAN'
            });
var format_JEMBATAN_6 = new ol.format.GeoJSON();
var features_JEMBATAN_6 = format_JEMBATAN_6.readFeatures(json_JEMBATAN_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JEMBATAN_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JEMBATAN_6.addFeatures(features_JEMBATAN_6);
var lyr_JEMBATAN_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JEMBATAN_6, 
                style: style_JEMBATAN_6,
                interactive: true,
                title: '<img src="styles/legend/JEMBATAN_6.png" /> JEMBATAN'
            });
var format_JALANTOL_7 = new ol.format.GeoJSON();
var features_JALANTOL_7 = format_JALANTOL_7.readFeatures(json_JALANTOL_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JALANTOL_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JALANTOL_7.addFeatures(features_JALANTOL_7);
var lyr_JALANTOL_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JALANTOL_7, 
                style: style_JALANTOL_7,
                interactive: true,
                title: '<img src="styles/legend/JALANTOL_7.png" /> JALAN TOL'
            });

lyr_PEMUKIMAN1_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_BANGUNAN_2.setVisible(true);lyr_LAHANTERBUKA2_3.setVisible(true);lyr_SUNGAI_4.setVisible(true);lyr_JALAN_5.setVisible(true);lyr_JEMBATAN_6.setVisible(true);lyr_JALANTOL_7.setVisible(true);
var layersList = [lyr_PEMUKIMAN1_0,lyr_OSMStandard_1,lyr_BANGUNAN_2,lyr_LAHANTERBUKA2_3,lyr_SUNGAI_4,lyr_JALAN_5,lyr_JEMBATAN_6,lyr_JALANTOL_7];
lyr_PEMUKIMAN1_0.set('fieldAliases', {'id': 'id', 'PL': 'PL', 'luas_ha': 'luas_ha', });
lyr_BANGUNAN_2.set('fieldAliases', {'id': 'id', 'luas_ha': 'luas_ha', });
lyr_LAHANTERBUKA2_3.set('fieldAliases', {'id': 'id', 'PL': 'PL', 'luas_ha': 'luas_ha', });
lyr_SUNGAI_4.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'JNSSNG': 'JNSSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_JALAN_5.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_JEMBATAN_6.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'TIPJMB': 'TIPJMB', 'FGSJMB': 'FGSJMB', 'TONJMB': 'TONJMB', 'TGGJMB': 'TGGJMB', 'JBTJMB': 'JBTJMB', 'LBRJMB': 'LBRJMB', 'MATJMB': 'MATJMB', 'STRJMB': 'STRJMB', 'DEKJMB': 'DEKJMB', 'BTSJMB': 'BTSJMB', 'AYUJMB': 'AYUJMB', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_JALANTOL_7.set('fieldAliases', {'id': 'id', });
lyr_PEMUKIMAN1_0.set('fieldImages', {'id': 'TextEdit', 'PL': 'TextEdit', 'luas_ha': 'TextEdit', });
lyr_BANGUNAN_2.set('fieldImages', {'id': 'TextEdit', 'luas_ha': 'TextEdit', });
lyr_LAHANTERBUKA2_3.set('fieldImages', {'id': 'TextEdit', 'PL': 'TextEdit', 'luas_ha': 'TextEdit', });
lyr_SUNGAI_4.set('fieldImages', {'NAMOBJ': 'TextEdit', 'JNSSNG': 'TextEdit', 'KLSSNG': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'NAMWS': 'TextEdit', 'NAMDAS': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_JALAN_5.set('fieldImages', {'NAMRJL': 'TextEdit', 'KONRJL': 'TextEdit', 'MATRJL': 'TextEdit', 'FGSRJL': 'TextEdit', 'UTKRJL': 'TextEdit', 'TOLRJL': 'TextEdit', 'WLYRJL': 'TextEdit', 'AUTRJL': 'TextEdit', 'KLSRJL': 'TextEdit', 'SPCRJL': 'TextEdit', 'JPARJL': 'TextEdit', 'ARHRJL': 'TextEdit', 'STARJL': 'TextEdit', 'KLLRJL': 'TextEdit', 'MEDRJL': 'TextEdit', 'LOCRJL': 'TextEdit', 'JARRJL': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_JEMBATAN_6.set('fieldImages', {'NAMOBJ': 'TextEdit', 'TIPJMB': 'TextEdit', 'FGSJMB': 'TextEdit', 'TONJMB': 'Range', 'TGGJMB': 'Range', 'JBTJMB': 'Range', 'LBRJMB': 'Range', 'MATJMB': 'TextEdit', 'STRJMB': 'TextEdit', 'DEKJMB': 'Range', 'BTSJMB': 'TextEdit', 'AYUJMB': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_JALANTOL_7.set('fieldImages', {'id': 'TextEdit', });
lyr_PEMUKIMAN1_0.set('fieldLabels', {'id': 'no label', 'PL': 'no label', 'luas_ha': 'no label', });
lyr_BANGUNAN_2.set('fieldLabels', {'id': 'no label', 'luas_ha': 'no label', });
lyr_LAHANTERBUKA2_3.set('fieldLabels', {'id': 'no label', 'PL': 'no label', 'luas_ha': 'no label', });
lyr_SUNGAI_4.set('fieldLabels', {'NAMOBJ': 'no label', 'JNSSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_JALAN_5.set('fieldLabels', {'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_JEMBATAN_6.set('fieldLabels', {'NAMOBJ': 'no label', 'TIPJMB': 'no label', 'FGSJMB': 'no label', 'TONJMB': 'no label', 'TGGJMB': 'no label', 'JBTJMB': 'no label', 'LBRJMB': 'no label', 'MATJMB': 'no label', 'STRJMB': 'no label', 'DEKJMB': 'no label', 'BTSJMB': 'no label', 'AYUJMB': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_JALANTOL_7.set('fieldLabels', {'id': 'no label', });
lyr_JALANTOL_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});