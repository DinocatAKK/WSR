import Card from './Card/Card';
import styles from './Cards.module.css';
const Cards = () => {
    return ( 
        <div className={styles.Cards}>
            <Card CardImg={'/img/1.png'} CardTitle={"Грейпфрутовый сок"} CardText={"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}></Card>
            <Card CardImg={'/img/2.png'} CardTitle={"Персиковый сок"} CardText={"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}></Card>
            <Card CardImg={'/img/3.png'} CardTitle={"Манго сок"} CardText={"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}></Card>
            <Card CardImg={'/img/4.png'} CardTitle={"Драгон сок"} CardText={"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}></Card>
        </div>
     );
}
 
export default Cards;