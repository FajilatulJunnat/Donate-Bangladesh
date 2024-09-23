document.getElementById('btn-donation').addEventListener('click',function(){
    showSectionById('donation-section')
    activeBtnColor('btn-donation')
    

})
document.getElementById('btn-history').addEventListener('click',function(){
    showSectionById('history-section')
    activeBtnColor('btn-history')
})



function showSectionById(id) {
    document.getElementById('donation-section').classList.add('hidden') 
    document.getElementById('history-section').classList.add('hidden') 
    
 //    show the section with the provide as id
 document.getElementById(id).classList.remove('hidden')
 
 }

//  button color on active
function activeBtnColor(id) {
    document.getElementById('btn-donation').classList.remove('bg-buttoncolor')
    document.getElementById('btn-history').classList.remove('bg-buttoncolor')

    document.getElementById(id).classList.add('bg-buttoncolor')
}