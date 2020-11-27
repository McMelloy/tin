let country = {
    name: "Denmark",
    population_mil: 5.837,
    capital: "Copenhagen",
    currency: "danish krone",
    description: function(){
        return this.name + " is a country with " + this.population_mil + " millions of population, capital is " + this.capital +" and currency is " + this.currency;
    },
    go_full_euro: function() {
        this.currency = "euro";
    }
}

function list_object(object){
    for(var x in object){
      console.log(object[x], " => ", typeof object[x]);
    }
  }
  
  list_object(country);