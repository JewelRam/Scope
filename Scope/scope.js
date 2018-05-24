let name;
let suffix;
const llamaNamer = function () {
    const possibleNames = ["Larry", "Leon", "Leona", "Les", "Laura", "Lemony", "Lars", "Lekisha"]
    const randomizer = Math.floor(Math.random() * 7)
    
    
    
    const namer = function () {
    
         suffix = " the Llama"
         name = possibleNames[randomizer]
         return name + suffix
         
    }
   namer(); 
let nameMaker = namer();
return namer();
}

let nameMaker = llamaNamer()
console.log(nameMaker)