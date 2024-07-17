fetchData();

async function fetchData(){

  try{

const pokemonName=document.getElementById("pokemonName").value.toLowerCase();

     const response=await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
     if(!response.ok){
        throw new Error("Couldn't fetch Data ");
     }
     const data=await response.json();
     const pokemonSprit=data.sprites.front_default;
     const imageElement=document.getElementById("imageElement");

     imageElement.src=pokemonSprit;
     imageElement.style.display="block";
    }
    catch(error){
     console.error(error);
    }
}
