
function inputValueCollect(input_type){
    const input =document.getElementById(input_type)
    const amount= parseFloat(input.value);
    input.value='';
    return amount
}


function update_field (field_type,amount,isAdd){
    const current_total=document.getElementById(field_type);
    const total_amougitnt=parseFloat(current_total.innerText);
   
   if(isAdd == true){
    current_total.innerText=total_amount+amount;
   }else current_total.innerText=total_amount-amount;
    
}



document.getElementById('deposit-button').addEventListener('click',function(){

    const deposite_amount= inputValueCollect('deposit-input')
    
   if(deposite_amount>0){
        update_field('deposit-total',deposite_amount,true)
        update_field('balance-total',deposite_amount,true)
   }
   
})

document.getElementById('withdraw-button').addEventListener('click',function(){
    
    
    const withdraw_amount= inputValueCollect('withdraw-input')
    
    if(withdraw_amount>0 ){
        update_field('withdraw-total',withdraw_amount,true)
        update_field('balance-total',withdraw_amount,false)
    }
   
   
    
})




