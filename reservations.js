document.querySelector("button").addEventListener('click', function(e)
{
    e.preventDefault();
    const form = document.querySelector("form");
    Array.from(form.querySelectorAll("input")).forEach(function(inp)
    {
    if(inp.checked === true){
        const s = prompt("Reservation under name:")
        //console.log(inp.id);
        if(inp.id == "one"){
           document.getElementById("a").innerHTML = `You reserved <b>regular table</b> under name <b>${s}</b>. Minimum spending of money is <b>70€</b>.`
           document.getElementById("a").style.display = "block";
        }
        else if(inp.id == "two"){
            document.getElementById("a").innerHTML = `You reserved <b>regular table upper floor</b> under name <b>${s}</b>. Minimum spending of money is <b>100€</b>.` 
            document.getElementById("a").style.display = "block";
        }
        else if(inp.id == "three"){
            document.getElementById("a").innerHTML = `You reserved <b>regular table near the stage</b> under name <b>${s}</b>. Minimum spending of money is <b>120€</b>.` 
            document.getElementById("a").style.display = "block";  
        }
        else if(inp.id == "four"){
            document.getElementById("a").innerHTML = `You reserved <b>VIP table</b> under name <b>${s}</b>. Minimum spending of money is <b>190€</b>.`
            document.getElementById("a").style.display = "block";
        }
        else if(inp.id == "five"){
            document.getElementById("a").innerHTML = `You reserved <b>VIP table upper floor</b> under name <b>${s}</b>. Minimum spending of money is <b>200€</b>.` 
            document.getElementById("a").style.display = "block";
        }
    }
    });



});
