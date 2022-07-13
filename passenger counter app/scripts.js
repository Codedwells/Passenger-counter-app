let passengersCount=0 ;
let currentCount = 0;

function increment()
{
    passengersCount += 1 ;
    document.getElementById("num-count").innerText = passengersCount ;   
}



function saveData()
{
    currentCount = passengersCount ;
    // alert("Current Data Saved.") ;
    document.getElementById("savedCounts").textContent +=  currentCount + " >> " ;


    console.log(currentCount) ;
}

function showCurrentCount()
{   
    document.getElementById("num-count").innerText = currentCount ;
    alert("Show Previous Data?") ;

}

function clearData()
{
    alert("Clear Data?") ;
    document.getElementById("num-count").innerText = 0 ; 
    passengersCount=0
}
