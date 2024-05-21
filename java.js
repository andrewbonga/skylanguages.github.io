document.addEventListener('DOMContentLoaded', function() {
    var toggleButton = document.getElementById('cabinet-toggle');
    var cabinetContent = document.getElementById('cabinet-content');
  
    toggleButton.addEventListener('click', function() {
      cabinetContent.style.display = (cabinetContent.style.display === 'none') ? 'block' : 'none';
    });
  
    cabinetContent.addEventListener('focusout', function() {
      cabinetContent.style.display = 'none';
    });
  });