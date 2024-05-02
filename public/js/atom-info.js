/* global AFRAME */

AFRAME.registerComponent('atom-info', {
  init: function() {
    // Extended object containing definitions for nuclei and electrons
    const atomDefinitions = {
      // Nuclei
      'hydrogen': 'Hydrogen: The lightest element, with one proton and one electron.',
      'oxygen': 'Oxygen: Essential for breathing, with eight protons and eight electrons.',
      'carbon': 'Carbon: The backbone of organic chemistry, with six protons and six electrons.',
      'nitrogen': 'Nitrogen: Makes up 78% of the Earth\'s atmosphere, with seven protons and seven electrons.',
      'helium': 'Helium: The second lightest element, used in balloons, with two protons and two electrons.',
      'neon': 'Neon: A noble gas that glows red in electric signs, with ten protons and ten electrons.',
      'argon': 'Argon: A noble gas used in light bulbs, with eighteen protons and eighteen electrons.',
      'sulfur': 'Sulfur: Known for its yellow crystals and a "rotten egg" smell, with sixteen protons and sixteen electrons.',
      
      // Example Electron Definitions
      'hydrogen-electron': 'Electron of Hydrogen: It orbits the nucleus at high speeds.',
      'oxygen-electron1': 'One of Oxygen\'s Electrons: Involved in forming water molecules.',
      // Add similar entries for other atoms' electrons as needed
    };

    this.el.addEventListener('click', function() {
      const atomId = this.getAttribute('id');
      const definition = atomDefinitions[atomId] || 'No definition found.';
      alert(definition); // Or, better yet, display this information in a UI element within your scene
    });
  }
});
