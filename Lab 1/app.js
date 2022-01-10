const main=(()=>
{

    const SumAll=document.querySelector("#SumAll");

    SumAll.addEventListener("click",()=>{

        const num1=document.querySelector("#num1")
        const num2=document.querySelector("#num2")

        const Realnum1= parseInt(num1.value);
        const Realnum2= parseInt(num2.value);

        const sum=Realnum1+Realnum2

        alert(`The the sum of the two number are ${sum}`);

        num1.value="";
        num2.value="";
        num1.focus()
    })

    const weightButton=document.querySelector("#PoundsConvert");

    weightButton.addEventListener("click",()=>
    {

        const name=document.querySelector("#Fullname")
        const Kg=document.querySelector("#Weight")

        const RealName= name.value
        const Realweight= parseInt(Kg.value);

        const pounds=parseInt(Realweight *2.2)

        alert(`Hello ${RealName} your weight in pounds is ${pounds} pounds`);

        name.value="";
        Kg.value="";
        name.focus()
    })

    const Markbutton=document.querySelector("#GradeButton");

    Markbutton.addEventListener("click",()=>{

        const studentname=document.querySelector("#StudentName")
        const studentnum=document.querySelector("#StudentNumber")
        const marks=document.querySelector("#Marks")

        const studname= studentname.value;
        const studnum= parseInt(studentnum.value);
        const mark= parseInt(marks.value);

        if(mark >= 90)
        {
            alert(`Student ${studname} and number${studnum} scored an A`);
            studname="";
            studnum="";
            mark="";
            studentname.focus()

        }
        else if(mark >= 80 && mark <= 89.99)
        {
            alert(`Student ${studname} and number${studnum} scored an B`);
            studname="";
            studnum="";
            mark="";
            studentname.focus()

        }
        else if(mark >= 70 && mark <= 79.99)
        {
            alert(`Student ${studname} and number${studnum} scored an C`);
            studname="";
            studnum="";
            mark="";
            studentname.focus()

        }
        else if(mark >= 60 && mark <= 69.99)
        {
            alert(`Student ${studname} and number${studnum} scored an D`);
            studname="";
            studnum="";
            mark="";
            studentname.focus()

        } 
        else 
        {
            alert(`Student ${studname} and number${studnum} scored an F`);
            studname="";
            studnum="";
            mark="";
            studentname.focus()

        }

    })


    const ParcelButton=document.querySelector("#parcelbutton");

    ParcelButton.addEventListener("click",()=>{

        const weightparcel=document.querySelector("#Parcelweight")

        const parcelvalue=parseInt(weightparcel.value) 

        if(parcelvalue<2.5)
        {
            Price=parseFloat(parcelvalue * 3.50)
            alert(`The price of your parcel is $${Price}`);
        }

        else if(parcelvalue >=2.5 && parcelvalue <=5)
        {
            Price=parseFloat(parcelvalue * 2.85)
            alert(`The price of your parcel is $${Price}`);

        }
        else if(parcelvalue >5 && parcelvalue <=7)
        {
            Price=parseFloat(parcelvalue * 2.45)
            alert(`The price of your parcel is $${Price}`);
        }
            
        else
        {
            Price=parseFloat(parcelvalue * 3.25)
            alert(`The price of your parcel is $${Price}`);

        }

    })

    const TaxButton= document.querySelector("#TaxButton");

    TaxButton.addEventListener("click", ()=>
    {
        const taxincome=document.querySelector("#TaxableIncome");
        const taxvalue=parseFloat(taxincome.value);
        
        if(taxvalue>=1 && taxvalue<=4461.99)
        {
            alert(`You have no tax to pay.`);
        }
        else if(taxvalue>=4462 && taxvalue<=17893.99)
        {
            tax=taxvalue-4462
            taxpayed=tax*.30
            alert(`You have to pay $${taxpayed}`);
        }
        else if(taxvalue>=17894 && taxvalue<=29499.99) 
        {
            tax=taxvalue-17894
            taxpayed=(tax*.35)+4119
            alert(`You have to pay $${taxpayed}`);
        }
        else if(taxvalue>=29500 && taxvalue<=45787.99)  
        {
            tax=taxvalue-29500
            taxpayed=(tax*.46)+8656
            alert(`You have to pay $${taxpayed}`);
        }
     
        else if(taxvalue>=45788 )
        {
            tax=taxvalue-45788
            taxpayed=(tax*.60)+11179
            alert(`You have to pay $${taxpayed}`);
        }

    
    });

    

})();