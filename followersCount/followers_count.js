let count = 0;
function increaseCount(){
    count++;//increment count by 1
    displayCount(); //Dsplay the count
    checkCountValue(); //Check count value and display message
}

function displayCount(){
    document.getElementById('countDisplay').innerHTML=count; //Display the count in HTML
}

function checkCountValue(){
    if(count===10) {
        alert("Your Instagram post gained 10 followers! Congratulations!");
    } else if(count===20) {
        alert("Your Instagram post gained 20 followers! Congratulations!");
    }
}