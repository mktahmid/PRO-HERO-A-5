const balance = getTextElementById('balance')
document.getElementById('noakhali-btn').addEventListener('click', function (event) {
        event.preventDefault();
        
        const noakhaliDonation = getInputFieldValueById('noakhali-input')
        console.log(noakhaliDonation);

        if(isNaN(noakhaliDonation)){
                alert('Failed to cash out.');
                return;
                }
        else if(noakhaliDonation > balance){
                alert('You do not have enough money to cash out');
                return;
                }
        const noakhaliBalance = getTextElementById('noakhali-balance')
        const newBalance = balance - noakhaliDonation
        document.getElementById('balance').innerText = newBalance 
        if(noakhaliDonation < newBalance){
                console.log(noakhaliBalance);
                const addNoa = noakhaliDonation + noakhaliBalance 
                document.getElementById('noakhali-balance').innerText = addNoa
                return addNoa
                }
                else{
                
                 
                }
        console.log(noakhaliBalance);
        const addNoa = noakhaliDonation + noakhaliBalance 
        document.getElementById('noakhali-balance').innerText = addNoa

}) 
