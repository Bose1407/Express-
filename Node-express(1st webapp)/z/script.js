const { default: axios } = require("axios");
const resultfield = document.getElementById("result");
const inputField = document.getElementById("name");
async function fetchData(){
    const {data} = await axios.get('/api/person')
    const people = data.data.map((element)=>{
        return `<h4>${element.name}</h4>`
    })
    resultfield.innerHTML = people.join('')
    inputField.innerHTML=" ";

}
fetchData();