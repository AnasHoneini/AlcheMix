/* global AFRAME */

AFRAME.registerComponent('collision_detection', {
    dependencies: ['raycaster'],
    init: function () {
      this.el.addEventListener('raycaster-intersection', (event) => {
        this.color = event.detail.els[0].getAttribute('color');
        let id = event.detail.els[0].parentNode.getAttribute('id').substring(7);
        this.referencedBox = document.querySelector('#' + id);
        this.colorBoxes = this.referencedBox.querySelectorAll('a-box');
        this.colorBoxes.forEach(e => {
          e.setAttribute('color', 'green');
        });
        event.detail.els[0].setAttribute('color', 'green');
        this.el.emit("show-text", {id: id});
      });
      this.el.addEventListener('raycaster-intersection-cleared', (event) => {
        this.colorBoxes.forEach(e => {
          e.setAttribute('color', this.color);
        });
        event.detail.clearedEls[0].setAttribute('color', ""+this.color);
        this.el.emit("show-text", {id: ""});
      });
    },
});