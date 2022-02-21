import styles from '../css/Match.module.css';

function Match({homeTeam, awayTeam, matchTime, title}) {
    return(
        <tr>
            <td>{homeTeam}</td>
            <td>{awayTeam}</td>
            <td>{matchTime}</td>
            <td className={styles.sport_title}>{title}</td>
        </tr>
    );
}

export default Match;