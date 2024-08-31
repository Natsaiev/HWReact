import styles from "./CityCard.module.css";

export const CityCard = ({city}) => {

return(
    <div className={styles.cardContainer}>
        <h3>{city.name}</h3>
        <div>
            <img src={city.image} alt={city.name} />
        </div>
        <p className={styles.description}>{city.description}</p>
        <ul className={styles.list}>
                {city.facts.map((fact, ind) => <li key={ind}>{fact}</li>)}
        </ul>
    </div>
)
}