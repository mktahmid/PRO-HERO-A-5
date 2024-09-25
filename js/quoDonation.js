const Totalbalance = getTextElementById('balance')
document.getElementById('aid-btn').addEventListener('click', function (event) {
  event.preventDefault();
  const aidDonation = getInputFieldValueById('aid-input')
  console.log(aidDonation)
  if(isNaN(aidDonation)){
    alert('Failed to cash out.');
    return;
    }
    else if(aidDonation > Totalbalance){
      alert('You do not have enough money to cash out');
      return;
    }
    const aidBalance = getTextElementById('aid-balance')
    console.log(aidBalance);
    const addaid = aidDonation + aidBalance 
    console.log(addaid);
    

    document.getElementById('aid-balance').innerText = addaid
})



