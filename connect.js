function addEvent(obj, type, fn) {
  if (obj.attachEvent) {
    obj['e' + type + fn] = fn;
    obj[type + fn] = function() {
      obj['e' + type + fn](window.event);
    }
    obj.attachEvent('on' + type, obj[type + fn]);
  } else obj.addEventListener(type, fn, false);
}

function switchStyles() {
  var selectedOption = this.options[this.selectedIndex],
      className = selectedOption.value;
  
  document.body.className = className;
  
  if (className === 'alternative-style') {
      var elementsToModify = document.querySelectorAll('.visually-impaired');
      for (var i = 0; i < elementsToModify.length; i++) {
          elementsToModify[i].style.fontSize = '24px'; 
          elementsToModify[i].style.color = '#ffffff'; 
          elementsToModify[i].style.backgroundColor = '#000000';
      }
  } else {
      var elementsToModify = document.querySelectorAll('.visually-impaired');
      for (var i = 0; i < elementsToModify.length; i++) {
          elementsToModify[i].style.fontSize = ''; 
          elementsToModify[i].style.color = ''; 
          elementsToModify[i].style.backgroundColor = ''; 
      }
  }
}

var styleSwitcher = document.getElementById("styleSwitcher");
addEvent(styleSwitcher, "change", switchStyles);
