const getInfoPrompt = () =>{
    const number = prompt('give a number')
    const numberValue = parseInt(number);
    if(typeof(numberValue) === 'number'){
        alert(numberValue + 200)
    }
    // else{
    //     alert('give a valid number')
    // }
}

const getLocationInfo = () => {
    const location = confirm('do you want to get your location?');
    // console.log(location);
    if(location === true){
        console.log(location.href = 'http://127.0.0.1:5500/index.html');
    }
    else{
        console.log("no I don't want coz I have google map");
    }
}