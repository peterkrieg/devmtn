var animals = [
{
  name: 'Dog',
  kingdom: 'Animalia',
  phylum: 'Chordata',
  class: 'Mammalia',
  order: 'Carnivora',
  family: 'Canidae',
  species: 'Canis lupus'
},
{
  name: 'Cat',
  kingdom: 'Animalia',
  phylum: 'Chordata',
  class: 'Mammalia',
  order: 'Carnivora',
  family: 'Felidae',
  species: 'Felis catus'
},
{
  name: 'Hippopotamus',
  kingdom: 'Animalia',
  phylum: 'Chordata',
  class: 'Mammalia',
  order: 'Artiodactyla',
  family: 'Hippopotamidae',
  species: 'Hippopotamus amphibius'
},
{
  name: 'Playtpus',
  kingdom: 'Animalia',
  phylum: 'Chordata',
  class: 'Mammalia',
  order: 'Monotremata',
  family: 'Ornithorhynchidae',
  species: 'Ornithorhynchus anatinus'
},
{
  name: 'Lizard',
  kingdom: 'Animalia',
  phylum: 'Chordata',
  class: 'Reptilia',
  order: 'Squamata',
  family: 'Agamidae',
  species: 'Pogona vitticeps'
},
{
  name: 'Blackbird',
  kingdom: 'Animalia',
  phylum: 'Chordata',
  class: 'Aves',
  order: 'Passeriformes',
  family: 'Turdidae',
  species: 'Turdus merula'
}
];




function findSums(){
  var newObj = {
    name:{},
    kingdom: {},
    phylum: {},
    class: {},
    order: {},
    family:{},
    species: {}
  };

  for(var i=0; i<animals.length; i++){
    var currObj = animals[i];
    for(var prop in currObj){
      var currValue = currObj[prop];
      if(newObj[prop].hasOwnProperty(currValue)){
        newObj[prop][currValue]++;
      }
      else{
        newObj[prop][currValue] = 1;
      }
    }
  }

  return newObj;
}

findSums();



//_________________________toy problem 11/17/15__________________________

//Make this code work
var counter = getCounter();
counter(); //2
counter(); //4
counter(); //6
counter(); //8
counter(); //10


function getCounter(){
  var counter = 0;
  return function incrementByTwo(){
    counter+=2;
    return counter;
  }
}




































