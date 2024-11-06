const urlEstados = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados';
const estadosHTML = document.getElementById("estados");
const cidadesHTML = document.getElementById("cidades");

  window.addEventListener('load', async function(){

     const request = await fetch(urlEstados);
     const response = await request.json();
     
     const options = document.createElement("optgroup");
     options.setAttribute('label','Selecione o estado')
     response.forEach(function(estadosHTML){
        options.innerHTML += '<option>'+estadosHTML.sigla+'</option>';
     });

     estadosHTML.append(options);
  });
     estadosHTML.addEventListener('change', async function(){

        const urlCidades = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados/'+estadosHTML.value+'/municipios';
        const request = await fetch(urlCidades);
        const response = await request.json();
        var options = '';

        response.forEach(function(cidadesHTML){
           options += '<option>'+cidadesHTML.nome+'</option>';
        });

        cidadesHTML.innerHTML = options;
     });