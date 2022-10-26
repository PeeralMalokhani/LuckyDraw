var names=['peeral','Mukhtiar','Inam','zulifqar','sajjad'];
function RandomName(names) {
    var PersonsName=names.length;
    var n=Math.floor(Math.random()*PersonsName);
    var PersonPosition=names[n];
    return PersonPosition +" will give the total bill";
        
}
RandomName(names);