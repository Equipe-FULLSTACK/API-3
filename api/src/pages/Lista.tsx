
import React, { useEffect, useState } from 'react';

function Lista() {
  const [seuJSON, setSeuJSON] = useState(null);

  useEffect(() => {
    // Substitua 'seuarquivo.json' pelo caminho do arquivo JSON que você deseja buscar.
    fetch('http://localhost:3000/')
      .then(response => response.json())
      .then(data => setSeuJSON(data))
      .catch(error => console.error('Erro ao buscar o JSON', error));
  }, []);

  if (!seuJSON) {
    return <div>Carregando...</div>;
  }

  // Aqui você pode renderizar o JSON na sua página.
  return (
    <div>
      <pre>{JSON.stringify(seuJSON, null, 2)}</pre>
    </div>
  );
}

export default Lista;