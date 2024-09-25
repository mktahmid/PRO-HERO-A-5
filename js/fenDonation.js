const totalbalance = getTextElementById('balance')
document.getElementById('feni-btn').addEventListener('click', function (event) {
  event.preventDefault();
  const feniDonation = getInputFieldValueById('feni-input')
  console.log(feniDonation);

      if(isNaN(feniDonation)){
      alert('Failed to cash out.');
        return;
        }
      else if(feniDonation > totalbalance){
        alert('You do not have enough money to cash out');
        return;
}
const feniBalance = getTextElementById('feni-balance')
console.log(feniBalance);
const addfeni = feniBalance + feniDonation 
console.log(addfeni);

document.getElementById('feni-balance').innerText = addfeni

})