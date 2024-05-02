/* global AFRAME, THREE */
AFRAME.registerComponent('static_rotation', {
    init: function () {
      // Get references to the parent and child entities
      this.child = this.el.object3D;
      this.holder = document.querySelector('#raycaster-holder').object3D;
    },
    tick: function() {
      this.el.object3D.position.setFromMatrixPosition(this.holder.matrixWorld);
    }
});