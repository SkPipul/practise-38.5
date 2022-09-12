function wishing(callingHim, name){
    callingHim(name);
}

function callingHim(name){
    console.log('Happy birthday', name);
}

function callingHer(name){
    console.log('areee utooo', name);
}

wishing(callingHim, 'pipul')
wishing(callingHer, 'she')