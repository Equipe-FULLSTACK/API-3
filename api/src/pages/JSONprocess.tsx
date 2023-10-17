import React, { useEffect, useState } from 'react';

function JSONprocess() {
const posicaoID = window.location.href.indexOf("id=");
const id = window.location.href.substring(posicaoID+3);
  const [seuJSON, setSeuJSON] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/p?p'+id)
      .then(response => response.json())
      .then(data => setSeuJSON(data))
      .catch(error => console.error('Erro ao buscar o JSON', error));
  }, []);
  
var json = JSON.stringify(seuJSON, null, 2);
json = json.replaceAll("\"id\":", "\"processId\":");
json = json.replaceAll("\"name\":", "\"processName\":");
json = json.replaceAll("\"status\":", "\"processStatus\":");
json = json.replaceAll("\"created\":", "\"processDateCreated\":");
json = json.replaceAll("\"deadline\":", "\"processDateFinished\":");
json = json.replaceAll("\"description\":", "\"processDescription\":");


  return (
    <div>
      <pre>{json}</pre>
    </div>
  );
}

export default JSONprocess;