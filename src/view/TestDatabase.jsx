import { useEffect, useState } from 'react';

function TestDatabase() {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('http://localhost:3001/api/players')
      .then((res) => {
        if (!res.ok) throw new Error('Erreur de l\'API');
        return res.json();
      })
      .then((data) => {
        setPlayers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur : {error}</p>;

  return (
    <div>
      <h2>Liste des joueurs</h2>
      <ul>
        {players.map((p) => (
          <li key={p.id_player}>
            {p.pseudo} - Inventaire : {JSON.stringify(p.inventory)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TestDatabase;