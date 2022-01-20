const main=(()=>
{

    const quantitypants=document.querySelector("#quantitypants")

    const MinusP=document.querySelector("#MinusP")

    const PlusP=document.querySelector("#PlusP")

    const extendedpants=document.querySelector("#extendedpants")

    let defualtquantityp=0

    let defualtextended=0

    MinusP.addEventListener("click",()=>
    {
        defualtquantityp-=1

        if(defualtquantityp<0)
        {
            defualtquantityp=0
        }

        defualtextended-=40.99

        if(defualtextended<0)
        {
            defualtextended=0
        }

        extendedpants.innerText=`$${defualtextended.toFixed(2)}`

        quantitypants.innerText= `${defualtquantityp.toFixed(0)}`
    })

    PlusP.addEventListener("click",()=>
    {
        defualtquantityp+=1

        quantitypants.innerText= `${defualtquantityp.toFixed(0)}`

        defualtextended+=40.99

        extendedpants.innerText=`$${defualtextended.toFixed(2)}`

    })




    const quantityShirt=document.querySelector("#quantityShirt")

    const MinusS=document.querySelector("#MinusS")

    const PlusS=document.querySelector("#PlusS")

    const extendedShirt=document.querySelector("#extendedShirt")


    let defualtquantitys=0

    let defualtextendeds=0

    MinusS.addEventListener("click",()=>
    {
        defualtquantitys-=1

        if(defualtquantitys<0)
        {
            defualtquantitys=0
        }

        defualtextendeds-=40.99

        if(defualtextendeds<0)
        {
            defualtextendeds=0
        }

        extendedShirt.innerText=`$${defualtextendeds.toFixed(2)}`

        quantityShirt.innerText= `${defualtquantitys.toFixed(0)}`
    })

    PlusS.addEventListener("click",()=>
    {
        defualtquantitys+=1

        quantityShirt.innerText= `${defualtquantitys.toFixed(0)}`

        defualtextendeds+=40.99

        extendedShirt.innerText=`$${defualtextendeds.toFixed(2)}`

    })


    const calculate=document.querySelector("#calculate")

    const subtotal=document.querySelector("#subtotal")

    const tax=document.querySelector("#tax")

    const total=document.querySelector("#total")


    calculate.addEventListener("click",()=>
    {

        const subtotalprint=defualtextended+defualtextendeds

        subtotal.innerText=`$${subtotalprint.toFixed(2)}`

        
        const taxdisplay= 13/100*subtotalprint

        tax.innerText=`$${taxdisplay.toFixed(2)}`


        const totaldisplay=subtotalprint + taxdisplay

        total.innerText=`$${totaldisplay.toFixed(2)}`
    })


    const promocode=document.querySelector("#promocode")

    const inputvalue=document.querySelector("#inputvalue")

    const hiddenbutton=document.querySelector("#hiddenb")


    promocode.addEventListener("click", ()=>
    {
        inputvalue.classList.remove("hide");

        hiddenbutton.classList.remove("hide")

    })

    hiddenbutton.addEventListener("click",()=>
    {
        const inputvaluevalue=inputvalue.value;

        if(inputvaluevalue === "NOTAX")
        {
            const newprice=defualtextended+defualtextendeds

            subtotal.innerText=`$${newprice.toFixed(2)}`

            tax.innerText=`0`

            total.innerText=`$${newprice.toFixed(2)}`
        }

        else if(inputvaluevalue==="FIFTYFIFTY")
        {
            const subtotalprint=defualtextended+defualtextendeds

            const subtotal50off=subtotalprint-(50/100*subtotalprint)

            subtotal.innerText=`$${subtotal50off.toFixed(2)}`


            const taxdisplay= 13/100*subtotal50off

            tax.innerText=`$${taxdisplay.toFixed(2)}`


            const totaldisplay=subtotal50off + taxdisplay

            total.innerText=`$${totaldisplay.toFixed(2)}`
    
    






        }

        

    })


})();