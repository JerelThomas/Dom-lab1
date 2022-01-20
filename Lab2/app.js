const main=(()=>
{

const loanbutton=document.querySelector("#monthlypayments");

loanbutton.addEventListener("click",()=>
{

    const loan=document.querySelector("#loaninput");
    const loanvaule=parseFloat(loan.value);

    const loanterm=document.querySelector("#loanterm");
    const loantermvalue=parseInt(loanterm.value);
    
    const payments=loantermvalue*12

    const  monthly_interest=((5/100)/12 )

    const monthly_interest2=1+((5/100)/12 )

    const calculation= Math.pow(monthly_interest2 , -payments) 
    const calculation2=1-calculation

    const calculation3=monthly_interest * loanvaule

    const monthly_insalments=parseFloat(calculation3/calculation2) 

    const modal=document.querySelector("#modal")

    modal.innerText=`$${monthly_insalments.toFixed(2)}`

    loan.value="";
    loanterm.value="";

    loan.focus();


    const redbox=document.querySelector(".red_box")

    redbox.classList.remove("hide");


})

const redbox=document.querySelector(".red_box")

redbox.addEventListener("click",()=>
{
    redbox.classList.add("hide");

})






})();