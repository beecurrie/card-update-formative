
  $(document).ready(function(){

  // Variables
  var getButton = document.getElementById('submit');

  var getImg = document.querySelector('.card img');
  console.log(getImg);

  var updateImg = document.querySelector('.card img');




// Function for button click update
function updateChoices (){
  updateImg.src = 'assets/christmas.jpg';
};



// Click event to update the DOM
getButton.onclick = function(){
  updateChoices();
};

});
// Document Ready ENDS
