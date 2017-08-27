function printData(){
    var a = document.getElementById("variable1").value ;
    var b = document.getElementById("variable2").value ;
    // alert(a);
    // alert(b);
    // we can also do arithmetic operations
    // we should parse the "text" ti Integer
    a = parseInt(a);
    b = parseInt(b);
    alert((a+b));
}