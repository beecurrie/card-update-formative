
  $(document).ready(function(){

// Variables ----------------------------------------------------------
  var getButton = document.getElementById('submit');
  var updateImg = document.querySelector('.card img');
  var getCard = document.querySelector('.card');
  var getFont = document.getElementById('font');
  var getBorder = document.getElementById('border')
  var getImageSelect = document.getElementById('image');
  var getBackground = document.getElementById('background');
  var selectHeader = document.querySelector('.card h1');
  var selectBorder = document.getElementById('cardBorder');
  var getMessage = document.querySelector('#message');



  // Image Function--------------------------------------------------
  function updateImage (){
    var getImageSelectVal = getImageSelect.value;
    if (getImageSelectVal === 'christmas') {
      updateImg.src = 'assets/christmas.jpg';
    } else if (getImageSelectVal === 'birthday') {
      updateImg.src = 'assets/birthday.jpg';
    } else if (getImageSelectVal === 'valentines'){
      updateImg.src = 'assets/valentines.jpg';
    }
  };


// Background Function---------------------------------------------
  function updateColor (){
    var getBackgroundValue = getBackground.value;

    if (getBackgroundValue === 'celadon') {
      getCard.classList.add('celadonBackground');
    } else {
      getCard.classList.remove('celadonBackground');
    }
    if (getBackgroundValue === 'graphite') {
      getCard.classList.add('graphiteBackground');
    } else {
      getCard.classList.remove('graphiteBackground');
    }
    if (getBackgroundValue === 'rose') {
      getCard.classList.add('roseBackground');
    } else {
      getCard.classList.remove('roseBackground');
    }
  };

// Font Function----------------------------------------------------
function updateFont (){
    var getFontValue = getFont.value;

    if (getFontValue === 'handwriting') {
      selectHeader.classList.add('handwriting');
    } else {
      selectHeader.classList.remove('handwriting');
    }

    if (getFontValue === 'sketch') {
      selectHeader.classList.add('sketch');
    } else {
      selectHeader.classList.remove('sketch');
    }

    if (getFontValue === 'print') {
      selectHeader.classList.add('print');
    } else {
      selectHeader.classList.remove('print');
    }
  };

// Border Function -------------------------------------------------
function updateBorder (){
    var getBorderVal = getBorder.value;

    if (getBorderVal === 'none') {
      selectBorder.classList.add('noBorder');
    } else {
      selectBorder.classList.remove('noBorder');
    }
    if (getBorderVal === 'thin') {
      selectBorder.classList.add('smallBorder');
    } else {
      selectBorder.classList.remove('smallBorder');
    }
    if (getBorderVal === 'thick') {
      selectBorder.classList.add('bigBorder');
    } else {
      selectBorder.classList.remove('bigBorder');
    }
    if (getBorderVal === 'filled') {
      selectBorder.classList.add('filledBorder');
    } else {
      selectBorder.classList.remove('filledBorder');
    }
  };


// Message Function --------------------------------------------------
function updateMessage (){
    var userMessage = getMessage.value;
    selectHeader.innerHTML = userMessage;
};


// Click event to update the DOM
getButton.onclick = function(){
  updateImage(),
  updateColor(),
  updateFont(),
  updateBorder(),
  updateMessage();
};

});
// Document Ready ENDS
