import styles from './Banner.module.css'
const Banner = () => {
    return ( 
        <div className={styles.banner}>
            <div>    
                <p>О пользе сока</p>
                <p>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do eiusmod tempor <br /> incididunt ut labore et dolore magna <br /> aliqua. </p>
            </div>
                <img src={"/img/Banner_img.jpg"} alt="" />
        </div>
     );
}
 
export default Banner;