const getVehicle = async (type) =>{
   const response = await fetch(`https://parallelum.com.br/fipe/api/v1/${type}/marcas`)
   const data = await response.json()
    await console.log(data) 
    const divResult = document.querySelector('#result')
    divResult.innerHTML = ''
    data.map((marca)=>{
        divResult.innerHTML += `<p>${marca.nome}</p>` 
    })
}