
  $(document).ready(function(){

  // Variables
  var getButton = document.getElementById('submit');

  var getImg = document.querySelector('.card img');
  console.log(getImg);

  var updateImg = document.querySelector('.card img');

  //1. get the image input
  var getImageSelect = document.getElementById('image');
  console.log(getImageSelect);

  //2. get the image input value


// Function for button click update
function updateChoices (){
  var getImageSelectVal = getImageSelect.value;
  if (getImageSelectVal === 'christmas') {
      updateImg.src = 'assets/christmas.jpg';
  } else if (getImageSelectVal === 'birthday') {
    updateImg.src = 'assets/birthday.jpg';
  } else if (getImageSelectVal === 'valentines'){
    updateImg.src = 'assets/valentines.jpg';
    }
  console.log(getImageSelectVal);
};



// Click event to update the DOM
getButton.onclick = function(){
  updateChoices();
};

});
// Document Ready ENDS
