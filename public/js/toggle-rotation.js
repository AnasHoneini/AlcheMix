document.addEventListener("DOMContentLoaded", function () {
  // Ensure the DOM is fully loaded before attaching event listeners
  let isRotating = false; // Track rotation state

  document
    .querySelector("#rotatableEntity")
    .addEventListener("click", function () {
      // Toggle the rotation state
      isRotating = !isRotating;

      if (isRotating) {
        // If not rotating, start rotation
        this.setAttribute(
          "animation",
          "property: rotation; to: 0 360 0; loop: true; dur: 5000"
        );
      } else {
        // If rotating, stop rotation by removing the animation attribute
        this.removeAttribute("animation");
      }
    });
});
