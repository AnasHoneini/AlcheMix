
/* global AFRAME, THREE*/
function createAtomBox(id, atomName, atomNumber, pos) {
  // Create a new A-Frame entity
  var entity = document.createElement('a-entity');
  var entityGround = document.createElement('a-entity');
  // Set the id attribute
  if (id.length > 0){
    entity.setAttribute('id', id);
    entityGround.setAttribute('id', 'ground-' + id);
  }
  // Adjust position
  let x1 = pos.x * 3 * 1.05; // margin multiplier
  let y1 = pos.y * 3 * 1.05; // margin multiplier
  let z1 = pos.z * 3;
  
  
  entity.setAttribute('position', {x: x1, y: y1, z: z1});
  entityGround.setAttribute('position', {x: -x1, y: z1, z: y1});
  
  // Add classes
  entity.classList.add('atom-box');
  
  // Add plane to ground Names
  var plane = document.createElement('a-plane');
  plane.setAttribute('color', '#F8F8FF');
  plane.setAttribute('scale', '3 3 3');
  plane.setAttribute('rotation', '-90 -180 0');
  plane.setAttribute('position', '0 0 1.5');
  plane.setAttribute('side', 'double');
  plane.classList.add('atom-ground');
  entityGround.appendChild(plane);
  
  // Add frame to ground Names
  var ring = document.createElement('a-ring');
  ring.setAttribute('segments-theta', '4');
  ring.setAttribute('radius-inner', '1.8');
  ring.setAttribute('radius-outer', '2.2');
  ring.setAttribute('position', '0 0.01 1.5');
  ring.setAttribute('rotation', '90 45 0');
  ring.setAttribute('color', 'black');
  ring.setAttribute('side', 'double');
  ring.setAttribute('open-ended', 'true');
  entityGround.appendChild(ring);
  
  // Create a document fragment to hold the boxes
  var fragment = document.createDocumentFragment();
  
  // Create and set attributes for each box component
  var boxAttributes = [
    { mixin: 'atom-box-corner', width: '3.25', height: '3', depth: '0.25', rotation: '90 0 0', position: '0 -1.5 0' },
    { mixin: 'atom-box-corner', width: '3.25', height: '3', depth: '0.25', rotation: '0 0 0', position: '0 0 -1.5' },
    { mixin: 'atom-box-corner', width: '3', height: '3.25', depth: '0.25', rotation: '0 -90 0', position: '1.5 0 0' },
    { mixin: 'atom-box-corner', width: '3', height: '3.25', depth: '0.25', rotation: '0 90 0', position: '-1.5 0 0' },
    { mixin: 'atom-box-corner', width: '3.25', height: '3', depth: '0.25', rotation: '90 0 0', position: '0 1.5 0' }
  ];
  
  boxAttributes.forEach(function(attribute) {
    var box = document.createElement('a-box');
    for (var key in attribute) {
      box.setAttribute(key, attribute[key]);
    }
    fragment.appendChild(box);
  });
  
  // Append boxes to the entity
  entity.appendChild(fragment);
  
  // Create and set attributes for atom name
  var atomNameText = document.createElement('a-text');
  atomNameText.setAttribute('class', 'box-atom-name');
  atomNameText.setAttribute('value', atomName);
  atomNameText.setAttribute('align', 'center');
  atomNameText.setAttribute('color', 'black');
  atomNameText.setAttribute('wrap-count', '12');
  atomNameText.setAttribute('position', '0 0 1.5');
  atomNameText.setAttribute('rotation', '0 0 0');
  atomNameText.setAttribute('scale', '2.5 2.5 2.5');
  entity.appendChild(atomNameText);
  var atomNameText2 = document.createElement('a-text');
  atomNameText2.setAttribute('class', 'box-atom-name');
  atomNameText2.setAttribute('value', atomName);
  atomNameText2.setAttribute('align', 'center');
  atomNameText2.setAttribute('color', 'black');
  atomNameText2.setAttribute('wrap-count', '12');
  atomNameText2.setAttribute('position', '0 0 1.5');
  atomNameText2.setAttribute('side', 'double');
  atomNameText2.setAttribute('rotation', '-90 -180 0');
  atomNameText2.setAttribute('scale', '2.5 2.5 2.5');
  entityGround.appendChild(atomNameText2);
  
  // Create and set attributes for atom number
  var atomNumberText = document.createElement('a-text');
  atomNumberText.setAttribute('class', 'box-atom-number');
  atomNumberText.setAttribute('value', atomNumber);
  atomNumberText.setAttribute('align', 'right');
  atomNumberText.setAttribute('color', 'black');
  atomNumberText.setAttribute('wrap-count', '12');
  atomNumberText.setAttribute('position', '1 1 1.5');
  atomNumberText.setAttribute('rotation', '0 0 0');
  atomNumberText.setAttribute('scale', '1 1 1');
  entity.appendChild(atomNumberText);
  var atomNumberText2 = document.createElement('a-text');
  atomNumberText2.setAttribute('class', 'box-atom-number');
  atomNumberText2.setAttribute('value', atomNumber);
  atomNumberText2.setAttribute('align', 'right');
  atomNumberText2.setAttribute('color', 'black');
  atomNumberText2.setAttribute('wrap-count', '12');
  atomNumberText2.setAttribute('position', '-1 0 2.5');
  atomNumberText2.setAttribute('side', 'double');
  atomNumberText2.setAttribute('rotation', '-90 -180 0');
  atomNumberText2.setAttribute('scale', '1 1 1');
  entityGround.appendChild(atomNumberText2);
  
  // Append the entity to the scene
  parentEntityTable.appendChild(entity);
  // entityGround.addEventListener()
  parentEntityGround.appendChild(entityGround);
}
var parentEntityTable = document.querySelector('#periodic-table');
var parentEntityGround = document.querySelector('#periodic-table-ground');
var user = document.querySelector('#rig');
      var elements = [
        { id: 'H-box', atomName: 'H', atomNumber: '1', pos: { x: 0, y: -2, z: 0 } },
        { id: 'He-box', atomName: 'He', atomNumber: '2', pos: { x: 17, y: -2, z: 0 } },
        { id: 'Li-box', atomName: 'Li', atomNumber: '3', pos: { x: 0, y: -3, z: 0 } },
        { id: 'Be-box', atomName: 'Be', atomNumber: '4', pos: { x: 1, y: -3, z: 0 } },
        { id: 'B-box', atomName: 'B', atomNumber: '5', pos: { x: 12, y: -3, z: 0 } },
        { id: 'C-box', atomName: 'C', atomNumber: '6', pos: { x: 13, y: -3, z: 0 } },
        { id: 'N-box', atomName: 'N', atomNumber: '7', pos: { x: 14, y: -3, z: 0 } },
        { id: 'O-box', atomName: 'O', atomNumber: '8', pos: { x: 15, y: -3, z: 0 } },
        { id: 'F-box', atomName: 'F', atomNumber: '9', pos: { x: 16, y: -3, z: 0 } },
        { id: 'Ne-box', atomName: 'Ne', atomNumber: '10', pos: { x: 17, y: -3, z: 0 } },
        { id: 'Na-box', atomName: 'Na', atomNumber: '11', pos: { x: 0, y: -4, z: 0 } },
        { id: 'Mg-box', atomName: 'Mg', atomNumber: '12', pos: { x: 1, y: -4, z: 0 } },
        { id: 'Al-box', atomName: 'Al', atomNumber: '13', pos: { x: 12, y: -4, z: 0 } },
        { id: 'Si-box', atomName: 'Si', atomNumber: '14', pos: { x: 13, y: -4, z: 0 } },
        { id: 'P-box', atomName: 'P', atomNumber: '15', pos: { x: 14, y: -4, z: 0 } },
        { id: 'S-box', atomName: 'S', atomNumber: '16', pos: { x: 15, y: -4, z: 0} },
        { id: 'Cl-box', atomName: 'Cl', atomNumber: '17', pos: { x: 16, y: -4, z: 0 } },
        { id: 'Ar-box', atomName: 'Ar', atomNumber: '18', pos: { x: 17, y: -4, z: 0 } },
        { id: 'K-box', atomName: 'K', atomNumber: '19', pos: { x: 0, y: -5, z: 0 } },
        { id: 'Ca-box', atomName: 'Ca', atomNumber: '20', pos: { x: 1, y: -5, z: 0 } },
        { id: 'Sc-box', atomName: 'Sc', atomNumber: '21', pos: { x: 2, y: -5, z: 0 } },
        { id: 'Ti-box', atomName: 'Ti', atomNumber: '22', pos: { x: 3, y: -5, z: 0 } },
        { id: 'V-box', atomName: 'V', atomNumber: '23', pos: { x: 4, y: -5, z: 0 } },
        { id: 'Cr-box', atomName: 'Cr', atomNumber: '24', pos: { x: 5, y: -5, z: 0 } },
        { id: 'Mn-box', atomName: 'Mn', atomNumber: '25', pos: { x: 6, y: -5, z: 0 } },
        { id: 'Fe-box', atomName: 'Fe', atomNumber: '26', pos: { x: 7, y: -5, z: 0 } },
        { id: 'Co-box', atomName: 'Co', atomNumber: '27', pos: { x: 8, y: -5, z: 0 } },
        { id: 'Ni-box', atomName: 'Ni', atomNumber: '28', pos: { x: 9, y: -5, z: 0 } },
        { id: 'Cu-box', atomName: 'Cu', atomNumber: '29', pos: { x: 10, y: -5, z: 0 } },
        { id: 'Zn-box', atomName: 'Zn', atomNumber: '30', pos: { x: 11, y: -5, z: 0 } },
        { id: 'Ga-box', atomName: 'Ga', atomNumber: '31', pos: { x: 12, y: -5, z: 0 } },
        { id: 'Ge-box', atomName: 'Ge', atomNumber: '32', pos: { x: 13, y: -5, z: 0 } },
        { id: 'As-box', atomName: 'As', atomNumber: '33', pos: { x: 14, y: -5, z: 0 } },
        { id: 'Se-box', atomName: 'Se', atomNumber: '34', pos: { x: 15, y: -5, z: 0 } },
        { id: 'Br-box', atomName: 'Br', atomNumber: '35', pos: { x: 16, y: -5, z: 0 } },
        { id: 'Kr-box', atomName: 'Kr', atomNumber: '36', pos: { x: 17, y: -5, z: 0 } },
        { id: 'Rb-box', atomName: 'Rb', atomNumber: '37', pos: { x: 0, y: -6, z: 0 } },
        { id: 'Sr-box', atomName: 'Sr', atomNumber: '38', pos: { x: 1, y: -6, z: 0 } },
        { id: 'Y-box', atomName: 'Y', atomNumber: '39', pos: { x: 2, y: -6, z: 0 } },
        { id: 'Zr-box', atomName: 'Zr', atomNumber: '40', pos: { x: 3, y: -6, z: 0 } },
        { id: 'Nb-box', atomName: 'Nb', atomNumber: '41', pos: { x: 4, y: -6, z: 0 } },
        { id: 'Mo-box', atomName: 'Mo', atomNumber: '42', pos: { x: 5, y: -6, z: 0 } },
        { id: 'Tc-box', atomName: 'Tc', atomNumber: '43', pos: { x: 6, y: -6, z: 0 } },
        { id: 'Ru-box', atomName: 'Ru', atomNumber: '44', pos: { x: 7, y: -6, z: 0 } },
        { id: 'Rh-box', atomName: 'Rh', atomNumber: '45', pos: { x: 8, y: -6, z: 0 } },
        { id: 'Pd-box', atomName: 'Pd', atomNumber: '46', pos: { x: 9, y: -6, z: 0 } },
        { id: 'Ag-box', atomName: 'Ag', atomNumber: '47', pos: { x: 10, y: -6, z: 0 } },
        { id: 'Cd-box', atomName: 'Cd', atomNumber: '48', pos: { x: 11, y: -6, z: 0 } },
        { id: 'In-box', atomName: 'In', atomNumber: '49', pos: { x: 12, y: -6, z: 0 } },
        { id: 'Sn-box', atomName: 'Sn', atomNumber: '50', pos: { x: 13, y: -6, z: 0 } },
        { id: 'Sb-box', atomName: 'Sb', atomNumber: '51', pos: { x: 14, y: -6, z: 0 } },
        { id: 'Te-box', atomName: 'Te', atomNumber: '52', pos: { x: 15, y: -6, z: 0 } },
        { id: 'I-box', atomName: 'I', atomNumber: '53', pos: { x: 16, y: -6, z: 0 } },
        { id: 'Xe-box', atomName: 'Xe', atomNumber: '54', pos: { x: 17, y: -6, z: 0 } },
        { id: 'Cs-box', atomName: 'Cs', atomNumber: '55', pos: { x: 0, y: -7, z: 0 } },
        { id: 'Ba-box', atomName: 'Ba', atomNumber: '56', pos: { x: 1, y: -7, z: 0 } },
        { id: 'dummy1-box', atomName: '...', atomNumber: '', pos: { x: 2, y: -7, z: 0 } },
        { id: 'Hf-box', atomName: 'Hf', atomNumber: '72', pos: { x: 3, y: -7, z: 0 } },
        { id: 'Ta-box', atomName: 'Ta', atomNumber: '73', pos: { x: 4, y: -7, z: 0 } },
        { id: 'W-box', atomName: 'W', atomNumber: '74', pos: { x: 5, y: -7, z: 0 } },
        { id: 'Re-box', atomName: 'Re', atomNumber: '75', pos: { x: 6, y: -7, z: 0 } },
        { id: 'Os-box', atomName: 'Os', atomNumber: '76', pos: { x: 7, y: -7, z: 0 } },
        { id: 'Ir-box', atomName: 'Ir', atomNumber: '77', pos: { x: 8, y: -7, z: 0 } },
        { id: 'Pt-box', atomName: 'Pt', atomNumber: '78', pos: { x: 9, y: -7, z: 0 } },
        { id: 'Au-box', atomName: 'Au', atomNumber: '79', pos: { x: 10, y: -7, z: 0 } },
        { id: 'Hg-box', atomName: 'Hg', atomNumber: '80', pos: { x: 11, y: -7, z: 0 } },
        { id: 'Tl-box', atomName: 'Tl', atomNumber: '81', pos: { x: 12, y: -7, z: 0 } },
        { id: 'Pb-box', atomName: 'Pb', atomNumber: '82', pos: { x: 13, y: -7, z: 0 } },
        { id: 'Bi-box', atomName: 'Bi', atomNumber: '83', pos: { x: 14, y: -7, z: 0 } },
        { id: 'Po-box', atomName: 'Po', atomNumber: '84', pos: { x: 15, y: -7, z: 0 } },
        { id: 'At-box', atomName: 'At', atomNumber: '85', pos: { x: 16, y: -7, z: 0 } },
        { id: 'Rn-box', atomName: 'Rn', atomNumber: '86', pos: { x: 17, y: -7, z: 0 } },
        { id: 'Fr-box', atomName: 'Fr', atomNumber: '87', pos: { x: 0, y: -8, z: 0 } },
        { id: 'Ra-box', atomName: 'Ra', atomNumber: '88', pos: { x: 1, y: -8, z: 0 } },
        { id: 'dummy2-box', atomName: '...', atomNumber: '', pos: { x: 2, y: -8, z: 0 } },
        { id: 'Rf-box', atomName: 'Rf', atomNumber: '104', pos: { x: 3, y: -8, z: 0 } },
        { id: 'Db-box', atomName: 'Db', atomNumber: '105', pos: { x: 4, y: -8, z: 0 } },
        { id: 'Sg-box', atomName: 'Sg', atomNumber: '106', pos: { x: 5, y: -8, z: 0 } },
        { id: 'Bh-box', atomName: 'Bh', atomNumber: '107', pos: { x: 6, y: -8, z: 0 } },
        { id: 'Hs-box', atomName: 'Hs', atomNumber: '108', pos: { x: 7, y: -8, z: 0 } },
        { id: 'Mt-box', atomName: 'Mt', atomNumber: '109', pos: { x: 8, y: -8, z: 0 } },
        { id: 'Ds-box', atomName: 'Ds', atomNumber: '110', pos: { x: 9, y: -8, z: 0 } },
        { id: 'Rg-box', atomName: 'Rg', atomNumber: '111', pos: { x: 10, y: -8, z: 0 } },
        { id: 'Cn-box', atomName: 'Cn', atomNumber: '112', pos: { x: 11, y: -8, z: 0 } },
        { id: 'Nh-box', atomName: 'Nh', atomNumber: '113', pos: { x: 12, y: -8, z: 0 } },
        { id: 'Fl-box', atomName: 'Fl', atomNumber: '114', pos: { x: 13, y: -8, z: 0 } },
        { id: 'Mc-box', atomName: 'Mc', atomNumber: '115', pos: { x: 14, y: -8, z: 0 } },
        { id: 'Lv-box', atomName: 'Lv', atomNumber: '116', pos: { x: 15, y: -8, z: 0 } },
        { id: 'Ts-box', atomName: 'Ts', atomNumber: '117', pos: { x: 16, y: -8, z: 0 } },
        { id: 'Og-box', atomName: 'Og', atomNumber: '118', pos: { x: 17, y: -8, z: 0 } }
      ];
      // Loop through elements and create atom boxes
      elements.forEach(element => {
        this.createAtomBox(element.id, element.atomName, element.atomNumber, element.pos);
      });
console.log("periodic table created");



/////   What this JS code will produce as HTML elmts (With some additional stuff not shown below) ////

//         <!-- Open Box in the shape of a cube -->
// <!--        <a-entity mixin="atom-box" id="atom-box-H" class="atom-box"> -->
//           <!-- Bottom -->
// <!--           <a-box mixin="atom-box-corner" width="3.25" height="3" depth="0.25" rotation="90 0 0" position="0 -1.5 0"></a-box> -->
//           <!-- Back -->
// <!--           <a-box mixin="atom-box-corner" width="3.25" height="3" depth="0.25" rotation="0 0 0" position="0 0 -1.5"></a-box> -->
//           <!-- Right -->
// <!--           <a-box mixin="atom-box-corner" width="3" height="3.25" depth="0.25" rotation="0 -90 0" position="1.5 0 0"></a-box> -->
//           <!-- Left -->
// <!--           <a-box mixin="atom-box-corner" width="3" height="3.25" depth="0.25" rotation="0 90 0" position="-1.5 0 0"></a-box> -->
//           <!-- Top -->
// <!--           <a-box mixin="atom-box-corner" width="3.25" height="3" depth="0.25" rotation="90 0 0" position="0 1.5 0"></a-box> -->
//           <!-- Atom -->
// <!--           <a-text class="box-atom-name" value="H" align="center" color="black" wrap-count="12" -->
// <!--                     position="0 0 1.5" rotation="0 0 0" scale="2.5 2.5 2.5"></a-text> -->
//           <!-- Atomic Number -->
// <!--           <a-text class="box-atom-number" value="1" align="right" color="black" wrap-count="12" -->
// <!--                      position="1 1 1.5" rotation="0 0 0" scale="1 1 1"></a-text> -->
// <!--         </a-entity> -->
