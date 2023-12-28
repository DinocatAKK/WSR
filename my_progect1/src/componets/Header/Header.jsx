import styles from './Header.module.css';
const Header = () => {
    return ( 
        <header className={styles.header}>
            <div className={styles.conteiner_logo}>
                <img src={"/img/logo.png"} alt="" />
                <nav>
                    <p>Главная</p>
                    <p>Напитки</p>
                    <p>Контакты</p>
                </nav>
            </div>
            <div className={styles.content}>
                <div className={styles.text}>
                    <p><span>Бодрящий</span><br/>апельсин</p>
                    <p>Вкус утреннего <br/> пробуждения</p>
                </div>
                <img src={"/img/header_img.png"} alt="" />
                <button>Купить</button>

            </div>
        </header>
    );
}
export default Header;