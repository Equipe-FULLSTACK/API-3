import React, { useEffect, useState } from 'react';

function JSONtask() {
const posicaoID = window.location.href.indexOf("id=");
const id = window.location.href.substring(posicaoID+3);
  const [seuJSON, setSeuJSON] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/t?t'+id)
      .then(response => response.json())
      .then(data => setSeuJSON(data))
      .catch(error => console.error('Erro ao buscar o JSON', error));
  }, []);
  
var json = JSON.stringify(seuJSON, null, 2);
json = json.replaceAll("\"id\":", "\"evidenceId\":");
json = json.replaceAll("\"task\":", "\"evidenceTaskId\":");
json = json.replaceAll("\"name\":", "\"evidenceName\":");
json = json.replaceAll("\"status\":", "\"evidenceStatus\":");
json = json.replaceAll("\"created\":", "\"evidenceDateCreated\":");
json = json.replaceAll("\"deadline\":", "\"evidenceDateFinished\":");
json = json.replaceAll("\"description\":", "\"evidenceDescription\":");


  return (
    <div>
      <pre>{json}</pre>
    </div>
  );
}

export default JSONtask;