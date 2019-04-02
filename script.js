const planet = [
{
    "name": "Alderaan",
    "rotation_period": "24",
    "orbital_period": "364",
    "diameter": "12500"
},
{
    "name": "Yavin IV", 
    "rotation_period": "24", 
    "orbital_period": "4818", 
    "diameter": "10200"
},
{
    "name": "Hoth", 
    "rotation_period": "23", 
    "orbital_period": "549", 
    "diameter": "7200"
},
{
    "name": "Dagobah", 
    "rotation_period": "23", 
    "orbital_period": "341", 
    "diameter": "8900"
},
{
    "name": "Bespin", 
    "rotation_period": "12", 
    "orbital_period": "5110", 
    "diameter": "118000"
},
{
    "name": "Endor", 
    "rotation_period": "18", 
    "orbital_period": "402", 
    "diameter": "4900"
},
{
    "name": "Naboo", 
    "rotation_period": "26", 
    "orbital_period": "312", 
    "diameter": "12120"
},
{
    "name": "Coruscant", 
    "rotation_period": "24", 
    "orbital_period": "368", 
    "diameter": "12240"
},
{
    "name": "Kamino", 
    "rotation_period": "27", 
    "orbital_period": "463", 
    "diameter": "19720"
},
{
    "name": "Geonosis", 
    "rotation_period": "30", 
    "orbital_period": "256", 
    "diameter": "11370"
}
]

const isi = document.getElementById('konten')

for (let i = 0; i < planet.length; i++){
    let tr = "<tr>";
    tr += "<td>" + planet[i].name + "<td>" + planet[i].rotation_period + "<td>" + planet[i].orbital_period + "<td>" + planet[i].diameter;
    tbody.innerHTML += tr;
}

const button = document.getElementById('cari');
button.addEventListener('click', function(){
    let planetName = planet.filter(key => key.rotation_period === document.getElementById('input').value);
    for (let i = 0; i < planetName.length; i++){
        let tr = "<tr>";
        tr += "<td>" + planetName[i].name + "<td>" + planetName[i].rotation_period + "<td>" + planetName[i].orbital_period + "<td>" + planetName[i].diameter;
        tbody.innerHTML += tr;   
    }
})