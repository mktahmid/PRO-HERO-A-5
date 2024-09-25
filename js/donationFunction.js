function getInputFieldValueById(id){
  const inputValue = document.getElementById(id).value
  const inputNumber = parseFloat(inputValue)
  return inputNumber
}

function getTextElementById(id){
  const textValue = document.getElementById(id).innerText
  const textNumber = parseFloat(textValue)
  return textNumber
}



// function showSectionById(id){
//   // hide all the sections
//   document.getElementById('donate-section').classList.add('hidden');
//   document.getElementById('history-section').classList.add('hidden');

  
//   // show the section with the provide id as parameter
//   document.getElementById(id).classList.remove('hidden');
// }


// show the cash out form
document.getElementById('history-btn').addEventListener('click' ,function () {

  // show cash out button click
  document.getElementById('donation-section','aid-section').classList.remove('hidden')

  // hide add money form
  document.getElementById('history-section').classList.add('hidden')
})

// show btn add money clicked
document.getElementById('donation-btn').addEventListener('click', function () {
  document.getElementById('donation-section','aid-section').classList.remove('hidden')
  document.getElementById('history-section').classList.add('hidden')

})




    






