
// 
document.getElementById('donate-now1').addEventListener('click',function(){
    const addDonate = GetInputValueById('donate-input')
    const availableDonate =GetTextFieldById('total-donate')
    // check validation
    if (isNaN(addDonate)) {
        alert('Invalid Donation Amount')
        return
    }else if (addDonate<0) {
        alert('Invalid Donation Amount')
        return
    }
    else{
        document.getElementById("my_modal_1").showModal();
         // tranjection history
         const heading=GetHeading('head-1')
        const div= document.createElement('div')
        div.classList.add('border')
        div.innerHTML =`
       <p> ${addDonate} Taka is doneted for ${heading}</p>
              <p>Date: ${ new Date()}</p>
        `
        document.getElementById('history-container').appendChild(div)
        // modal button
        document.getElementById('close').addEventListener('click',function(){
    
            const updateAmount=addDonate + availableDonate;
            document.getElementById("total-donate").innerText=updateAmount
        
            const navAmount=GetTextFieldById('nav-amount')
            const updateNavAmount =navAmount - addDonate;
            document.getElementById('nav-amount').innerText=updateNavAmount;
        })
    }
})


document.getElementById('donate-now2').addEventListener('click',function(){
    const addDonate2 = GetInputValueById('donate-input2')
    const availableDonate2 =GetTextFieldById('total-donate2')
 
    // check validation
    if (isNaN(addDonate2)) {
        alert('Invalid Donation Amount')
        return
    }else if (addDonate2<0) {
        alert('Invalid Donation Amount')
        return
    }
    else{
        document.getElementById("my_modal_2").showModal();
        
        document.getElementById('close2').addEventListener('click',function(){
            const updateAmount2=addDonate2 + availableDonate2;
            document.getElementById("total-donate2").innerText=updateAmount2
        
            const navAmount=GetTextFieldById('nav-amount')
            const updateNavAmount =navAmount - addDonate2;
            document.getElementById('nav-amount').innerText=updateNavAmount;
            
        })
    }
})

document.getElementById('donate-now3').addEventListener('click',function(){
    const addDonate3 = GetInputValueById('donate-input3')
    const availableDonate3 =GetTextFieldById('total-donate3')
 
    // check validation
    if (isNaN(addDonate3)) {
        alert('Invalid Donation Amount')
        return
    }else if (addDonate3<0) {
        alert('Invalid Donation Amount')
        return
    }
    else{
        document.getElementById("my_modal_3").showModal();

        document.getElementById('close3').addEventListener('click',function(){
            const updateAmount3=addDonate3 + availableDonate3;
            document.getElementById("total-donate3").innerText=updateAmount3
        
            const navAmount=GetTextFieldById('nav-amount')
            const updateNavAmount =navAmount - addDonate3;
            document.getElementById('nav-amount').innerText=updateNavAmount;
            
        })
    }
})



// common function
// input field function
function GetInputValueById(id) {
    const inputMoney=document.getElementById(id);
    const inputMoneyValue=inputMoney.value;
     const inputMoneyNumber=parseFloat(inputMoneyValue);
     inputMoney.value = '';
return inputMoneyNumber
     
 }
 // inner text function
function GetTextFieldById(id) {
    const textField= document.getElementById(id).innerText;
    const textConvertNumber=parseFloat(textField)
    return textConvertNumber;
}


// inner text for heading
function GetHeading(id) {
    const head=document.getElementById(id).innerText
    return head
}