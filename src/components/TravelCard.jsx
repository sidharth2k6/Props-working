
import styles from './TravelCard.module.css'

export default function TravelCard({ item }) {
  return (
    <div className={styles.card}>
      <img src={item.imageUrl} alt={item.title} className={styles.cardIimage} />
      <div className={styles.cardDetails}>
        <div className={styles.cardLocation}>
          <span className={styles.country}>{item.country}</span>
        </div>
        <h2 className={styles.cardTitle}>{item.title}</h2>
        <p className={styles.cardDate}>
          {item.startDate} - {item.endDate}
        </p>
        <p className={styles.cardDescription}>{item.description}</p>
      </div>
    </div>
  );
}
