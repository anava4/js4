let user = [-1, 5, "cat", false, 10.2, true, "dog"];
user1 = user.toString();

let separate1 = sort(user);
printObject(separate1);
arrayPrint(user);

function arrayPrint (param) {
    let list = document.getElementById("list");
    list.innerHTML = "<h2>Array:</h2>" + "<p> [" + param.toString() + "]</p>";
}

function printObject(obj){
    let view = document.getElementById("view");

    for(let property in obj){
        view.innerHTML += "<li>" + property + ": [" + obj[property].toString() + "]<br></li>";
    }
}

function sort(param){
    let obj = {
        strings: [],
        numbers: [],
        booleans: []
    };
    param.forEach(function(val){parse(val, obj)});
    return obj;
}

function parse(param, obj){
    if(typeof param == "string"){
        obj.strings.push(param);
    }
    else if(typeof param == "number"){
        obj.numbers.push(param);
    }
    else if(typeof param == "boolean"){
        obj.booleans.push(param);
    }
}



