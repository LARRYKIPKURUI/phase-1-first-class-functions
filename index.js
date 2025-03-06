
//function 1 // spy is a callback function

function receivesAFunction (spy) {
    spy();
}

function returnsANamedFunction () {
   
    return function returnedFunction () {
        console.log('I\'m a named function that has been returned');
    }
}

//returns an anonymous function 
function returnsAnAnonymousFunction () {
    return function () {
    return 'Im an anonymous function ';
    }
    
}