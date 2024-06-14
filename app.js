const menuEl=document.querySelector('.menu')
const itemsMobileEl=document.querySelector('.items-mobile')
const rightEl=document.querySelector('.right')
const inptEls=document.querySelectorAll('input')

const countries = [
    {
      name: "Canada",
      flag: "https://flagcdn.com/ca.svg",
      capital: "Ottawa",
      currency: "Canadian Dollar",
      continent: "North America",
      population: 37742154,
      language: "English/French"
    },
    {
      name: "Brazil",
      flag: "https://flagcdn.com/br.svg",
      capital: "Brasília",
      currency: "Brazilian Real",
      continent: "South America",
      population: 212559417,
      language: "Portuguese"
    },
    {
      name: "Japan",
      flag: "https://flagcdn.com/jp.svg",
      capital: "Tokyo",
      currency: "Japanese Yen",
      continent: "Asia",
      population: 126476461,
      language: "Japanese"
    },
    {
      name: "Germany",
      flag: "https://flagcdn.com/de.svg",
      capital: "Berlin",
      currency: "Euro",
      continent: "Europe",
      population: 83166711,
      language: "German"
    },
    {
      name: "Australia",
      flag: "https://flagcdn.com/au.svg",
      capital: "Canberra",
      currency: "Australian Dollar",
      continent: "Oceania",
      population: 25499884,
      language: "English"
    },
    {
      name: "India",
      flag: "https://flagcdn.com/in.svg",
      capital: "New Delhi",
      currency: "Indian Rupee",
      continent: "Asia",
      population: 1380004385,
      language: "Hindi/English"
    },
    {
      name: "South Africa",
      flag: "https://flagcdn.com/za.svg",
      capital: "Pretoria",
      currency: "South African Rand",
      continent: "Africa",
      population: 59308690,
      language: "Zulu/Xhosa/Afrikaans/English"
    },
    {
      name: "France",
      flag: "https://flagcdn.com/fr.svg",
      capital: "Paris",
      currency: "Euro",
      continent: "Europe",
      population: 65273511,
      language: "French"
    },
    {
      name: "Mexico",
      flag: "https://flagcdn.com/mx.svg",
      capital: "Mexico City",
      currency: "Mexican Peso",
      continent: "North America",
      population: 128932753,
      language: "Spanish"
    },
    {
      name: "Morocco",
      flag: "https://flagcdn.com/ma.svg",
      capital: "Rabat",
      currency: "Moroccan Dirham",
      continent: "Africa",
      population: 36910560,
      language: "Arabic/Berber"
    }
  ];
  
  

menuEl.addEventListener('click',() => { 
    itemsMobileEl.classList.toggle('show')
 })

inptEls.forEach((input) => { 
    input.addEventListener('click',(e) => { 
       let continentName=input.value
       let finalContries=[]
     let contriesByContinent=countries.filter((contry) => { 
        return contry.continent.toLocaleLowerCase()==continentName
      })
       
      contriesByContinent.length==0? finalContries=countries : finalContries=contriesByContinent
      console.log(finalContries);
      displayCards(finalContries)
   })
   
    })

 function displayCards(contries){
    rightEl.innerHTML=""
    let html=""
    contries.forEach(contry => {
        html+=`
        <div class="card">
                <img src="${contry.flag}" alt="">
                <h3>${contry.name}</h3>
                <p><span>Continent:</span>  ${contry.continent}</p>
                <p><span>Currency:</span>  ${contry.currency}</p>
                <p><span>Popullation:</span> ${contry.population}</p>
                <p><span>Language:</span>  ${contry.language}</p>
            </div>
        
        
        `
    });

    rightEl.innerHTML=html
 }

 displayCards(countries)