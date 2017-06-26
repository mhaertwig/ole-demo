<template>
  <div id="map"></div>
</template>

<script>
export default {
  name: 'demo',
  data () {
    return {
      msg: ''
    }
  },
  mounted() {
    var editLayer = new ol.layer.Vector({
      source: new ol.source.Vector()
    });

    var map = new ol.Map({
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM()
        }),
        editLayer
      ],
      target: 'map',
      view: new ol.View({
        center: [873708.375917, 6105425.847789],
        zoom: 15
      })
    });
    var editor = new ole.Editor(map);
    var cad = new ole.CadControl({
      source: editLayer.getSource()
    });
    var draw = new ole.DrawControl({
      source: editLayer.getSource()
    });
    var drawLine = new ole.DrawControl({
        type: 'LineString',
      source: editLayer.getSource()
    });
    var rotate = new ole.RotateControl({
      source: editLayer.getSource()
    });
    var drawPoly = new ole.DrawControl({
      type: 'Polygon',
      source: editLayer.getSource()
    });
    var move = new ole.MoveControl({
      type: 'Polygon',
      source: editLayer.getSource()
    });
    var modify = new ole.ModifyControl({
      source: editLayer.getSource()
    });
    editor.addControls([cad, draw, drawLine, drawPoly, modify, move, rotate]);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #map {
    position: absolute;
    left: 0;
    top: 62px;
    bottom: 0;
    right: 0;
  }
</style>
