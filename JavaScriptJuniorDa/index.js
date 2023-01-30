let array1 = ["María", "Josefa", "Roberta"];
let array2 = ["Pedro", "Marcelo", array1, "Jose"];

forLista:
for (let array in array2){
  if (array == 2){

    for (let array of array1) {

      if (array == "María") {
      break;
    }
      
    console.log(array);
    }

  } else {
    console.log(array2[array]);
  }
}

// > Pedro Marcelo Josefa Roberta Jose