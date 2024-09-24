
// card-1
document.getElementById('donate-now1').addEventListener('click',function(){
    const addDonate = GetInputValueById('donate-input')
    const availableDonate =GetTextFieldById('total-donate')
    const navAmount=GetTextFieldById('nav-amount')
    // check validation
    if (isNaN(addDonate)) {
        alert('Invalid Donation Amount')
        return
    }else if (addDonate<0) {
        alert('Invalid Donation Amount')
        return
    }else if (navAmount<addDonate) {
        alert('insufficient money')
        return
    }
    else{
        document.getElementById("my_modal_1").showModal();
         // tranjection history
         const heading=GetHeading('head-1')
        const div= document.createElement('div')
        div.classList.add('border','p-4','rounded-lg','mb-3')
        div.innerHTML =`
       <p class="text-xl font-bold"> ${addDonate} Taka is doneted for ${heading}</p>
              <p>Date: ${ new Date()}</p>
        `
        document.getElementById('history-container').appendChild(div)
        // modal button1
        document.getElementById('close').addEventListener('click',function(){
    
            const updateAmount=addDonate + availableDonate;
            document.getElementById("total-donate").innerText=updateAmount

            const updateNavAmount =navAmount - addDonate;
            document.getElementById('nav-amount').innerText=updateNavAmount;
        })
    }
})

// card-2
document.getElementById('donate-now2').addEventListener('click',function(){
    const addDonate2 = GetInputValueById('donate-input2')
    const availableDonate2 =GetTextFieldById('total-donate2')
    const navAmount=GetTextFieldById('nav-amount')
 
    // check validation
    if (isNaN(addDonate2)) {
        alert('Invalid Donation Amount')
        return
    }else if (addDonate2<0) {
        alert('Invalid Donation Amount')
        return
    }else if (navAmount<addDonate2) {
        alert('insufficient money')
        return
    }
    else{
        document.getElementById("my_modal_2").showModal();
                 // tranjection history
                 const heading2=GetHeading('head-2')
                 const div2= document.createElement('div')
                 div2.classList.add('border','p-4','rounded-lg','mb-3')
                 div2.innerHTML =`
                <p class="text-xl font-bold"> ${addDonate2} Taka is doneted for ${heading2}</p>
                       <p>Date: ${ new Date()}</p>
                 `
                 document.getElementById('history-container').appendChild(div2)
                 // modal button2
        document.getElementById('close2').addEventListener('click',function(){
            const updateAmount2=addDonate2 + availableDonate2;
            document.getElementById("total-donate2").innerText=updateAmount2
        
            const updateNavAmount =navAmount - addDonate2;
            document.getElementById('nav-amount').innerText=updateNavAmount;
            
        })
    }
})
// card-3
document.getElementById('donate-now3').addEventListener('click',function(){
    const addDonate3 = GetInputValueById('donate-input3')
    const availableDonate3 =GetTextFieldById('total-donate3')
    const navAmount=GetTextFieldById('nav-amount')
    // check validation
    if (isNaN(addDonate3)) {
        alert('Invalid Donation Amount')
        return
    }else if (addDonate3<0) {
        alert('Invalid Donation Amount')
        return
    }else if (navAmount<addDonate3) {
        alert('insufficient money')
        return
    }
    else{
        document.getElementById("my_modal_3").showModal();
         // tranjection history
         const heading3=GetHeading('head-3')
         const div3= document.createElement('div')
         div3.classList.add('border','p-4','rounded-lg','mb-3')
         div3.innerHTML =`
        <p class="text-xl font-bold"> ${addDonate3} Taka is doneted for ${heading3}</p>
               <p>Date: ${ new Date()}</p>
         `
         document.getElementById('history-container').appendChild(div3)
         // modal button3
        document.getElementById('close3').addEventListener('click',function(){
            const updateAmount3=addDonate3 + availableDonate3;
            document.getElementById("total-donate3").innerText=updateAmount3
        
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