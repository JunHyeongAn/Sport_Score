import { useEffect, useState } from "react";
import Match from "./components/Match";
import styles from './css/Match.module.css';

function App() {
  const apiKey = "17da4bb421710424707bbcbeb9cc950f";
  const [loading, setLoading] = useState(true);
  const [sports, setSports] = useState([]);
  const [sportKey, setSportKey] = useState("soccer_epl");

  const getSports = async() => {
    const json = await (
      await fetch(`https://api.the-odds-api.com/v4/sports/${sportKey}/scores?apiKey=${apiKey}&daysFrom=3`)
    ).json();
    
    setSports(json);
    setLoading(false);
  }

  useEffect(() => {
    getSports();
  }, []);
  console.log(sports);
  return (
    <div className="App">
      <h1>live sports</h1>
      {loading ? <h2>Loading...</h2> : 
        <table className={styles.match_table}>
          <thead>
            <tr>
              <th>Home</th><th>Away</th><th>Match Time</th><th>Match Type</th>
            </tr>
          </thead>
          <tbody>
            {sports.map((sport) => (
              <Match 
                homeTeam={sport.home_team}
                awayTeam={sport.away_team}
                matchTime={sport.commence_time}
                key={sport.id}
                title={sport.sport_title}
              />
            ))}
          </tbody>
        </table>
      }
    </div>
  );
}

export default App;
