import styles from '../styles/CityCard.module.css'

function CityCard({city}) {

  return (
    <div className={styles.card}>
        <h2>{city.name}</h2>
        <img className={styles.image} src={city.imageUrl} alt={city.name} />
        <p>{city.description}</p>
        <ul>
           {city.facts.map((fact, index) => (
             <li key={index}>{fact}</li>
           ))}
         </ul>
    </div>
  );
}

export default CityCard;