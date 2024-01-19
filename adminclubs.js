let eventList=[];
let clubList=[];

function hideforms(){
    let hideclubform = document.getElementById("clubform");
    hideclubform.hidden="true";
    let hideeventform = document.getElementById("eventform");
    hideeventform.hidden="true";
}
function showClubForm(){
    let clubformstatus = document.getElementById("clubform");
    if (clubformstatus.style.display==="block"){
        clubformstatus.style.display="none";
    }
    else{
        clubformstatus.style.display="block";
    }
}
function showEventForm(){
    let eventformstatus = document.getElementById("eventform");
    if (eventformstatus.style.display==="block"){
    eventformstatus.style.display="none";
    }
    else{
        eventformstatus.style.display="block";
    }
}
function submitClubFun(){
    let clubNametmp = document.getElementById("clubname").value;
    let clubAdresstmp = document.getElementById("clubadress").value;
    let clubCitytmp = document.getElementById("clubcity").value;
    let clubPriceListtmp = document.getElementById("pricelist").value;
    let clubDescriptiontmp = document.getElementById("clubdescription").value;
    if(!(clubNametmp&&clubAdresstmp)){
        window.alert("Club name or club adress not added!");
        return;
    }
    clubAdresstmp=clubAdresstmp.concat(", ",clubCitytmp);
    const clubtmp={
        clubName:clubNametmp,
        clubAdress:clubAdresstmp,
        clubPriceList:clubPriceListtmp,
        clubDescription:clubDescriptiontmp
    }
    clubList.push(clubtmp);
    window.alert("Club sucessfuly added!")
    document.getElementById("clubform").reset();
    return console.log(clubList);
}
function submitEventFun(){
    let eventNametmp=document.getElementById("eventname").value;
    let eventClubtmp=document.getElementById("selectclub").value;
    let eventTimetmp=document.getElementById("eventtime").value;
    let eventDatetmp=document.getElementById("eventdate").value;
    let eventDresscodetmp=document.getElementById("dresscode").value;
    let eventDescriptiontmp=document.getElementById("eventdescription").value;
    if(!(eventNametmp&&eventDatetmp&&eventTimetmp)){
        window.alert("Crucial information not added!");
        return;
    }
    if(eventDatetmp>"2024-12-31" || eventDatetmp<"2023-11-30"){
        window.alert("Please entry a valid date!");
        return;
    }
    const eventtmp={
        eventName:eventNametmp,
        eventDate:eventDatetmp,
        eventTime:eventTimetmp,
        eventClub:eventClubtmp,
        eventDresscode:eventDresscodetmp,
        eventDescription:eventDescriptiontmp,
    }
    eventList.push(eventtmp);
    window.alert("Event sucessfully added!");
    document.getElementById("eventform").reset();
    return console.log(eventList);   
}