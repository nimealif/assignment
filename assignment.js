 
 
 //assignment 1. kilometerToMeter
 
 function kilometerToMeter(kilo){
   
    var meter = kilo * 1000;
    return meter;
    
 };


  //assignment 2. budgetCalculator

  function budgetCalculator(watch, phone, laptop){
    var result = watch*50 + phone*100 + laptop*500;
    return result;
};


  //assignment 3. hotelCost

  function hotelCost(din){
    var vara =0;
    
    if(din<=10){
        vara = din*100;    
    }
    else if( din <=20){
        var firstTenDays= 10*100;
        var remainig = din-10;
        var midTenDays = remainig *80;
        vara = firstTenDays + midTenDays;
    }
    else{
        var firstTenDays= 10*100; 
        var midTenDays = 10 *80;
        var remainig = din-20;
        var endmostDays =remainig * 50;
        var vara = firstTenDays + midTenDays + endmostDays;
    }
    return vara;
    };



      //assignment 4. megaFriend

      var friends = ["alif", "nayem", "roktim", "riyajul", "rifat", "josim"];

function megaFriend(arr) {
  var long1 = arr[0];
  for (i = 0; i < arr.length; i++) {
    if (arr[i].length > long1.length) {
      long1 = arr[i];
    }
  }
  return long1;
}


console.log(megaFriend(friends));




  



