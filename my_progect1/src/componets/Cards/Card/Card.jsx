import styles from './Card.module.css'
const Card = ({CardImg,CardTitle,CardText}) => {
    return (
        <div className={styles.Content}>    
            <div>
                <img src={CardImg} alt={""} />
            </div>
            <div>
                <h2>{CardTitle}</h2>
                <p>{CardText}</p>
            </div>
        </div>
     );
}
 
export default Card;
