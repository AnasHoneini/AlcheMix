// lab-station.js content
AFRAME.registerComponent('combine-elements', {
  init: function() {
    const container = document.querySelector('#reaction-container');
    const resultText = document.querySelector('#result-text');
    let hydrogenClose = false;
    let oxygenClose = false;

    function updateProximity() {
      const hPos = document.querySelector('#hydrogen').object3D.position;
      const oPos = document.querySelector('#oxygen').object3D.position;
      const cPos = container.object3D.position;

      hydrogenClose = hPos.distanceTo(cPos) < 1;
      oxygenClose = oPos.distanceTo(cPos) < 1;

      if (hydrogenClose && oxygenClose) {
        resultText.setAttribute('value', 'H2O created!');
        container.setAttribute('color', 'blue');
      } else {
        resultText.setAttribute('value', '');
        container.setAttribute('color', 'grey');
      }
    }

    this.el.sceneEl.addEventListener('loaded', () => {
      setInterval(updateProximity, 500);
    });
  }
});

document.querySelector('a-scene').setAttribute('combine-elements', '');
