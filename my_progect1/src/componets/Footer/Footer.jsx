import styles from './Footer.module.css';
const Footer = () => {
    return ( 
        <footer>
            <div className={styles.content}>
                <p>Всё права защищены</p>
                <div className={styles.footer_img}>
                    <img src={"/img/1f.png"} alt="" />
                    <img src={"/img/2f.png"} alt="" />
                    <img src={"/img/3f.png"} alt="" />
                    <img src={"/img/4f.png"} alt="" />
                    <img src={"/img/5f.png"} alt="" />
                </div>
            </div>
        </footer>
        
     );
}
 
export default Footer;