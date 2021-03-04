
    let print=function() {
        console.log("Hello world");
    }
print();
function printer(fun){
    fun();
}
printer(print);

var person={
     "name":"Sabe",
      "age":22,
      PrintName: function (){
         console.log(this.name)
      }
}

person.PrintName();

let vechilename = "ford";

function  printVehicleName (){
    console.log(vechilename);
}


var Vechile={
    vehiclename:"Ferrari",
    getVehicleName: function () {
        return function () {
            console.log(vechilename);
        };
    }

}
    printVehicleName();

 var execute=Vechile.getVehicleName();
execute=execute.bind(Vechile);
execute();