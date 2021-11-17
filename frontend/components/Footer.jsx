import Image from 'next/image'
import img_1 from'../public/img_1.png'
import img_2 from'../public/img_2.png'
import img_3 from'../public/img_3.png'
import img_4 from'../public/img_4.png'
import img_5 from'../public/img_5.png'
import img_6 from'../public/img_6.png'

const Footer = () => {
    return (
        <footer className="container">
            <div className="partners">
                <div>
                    <img src={img_1.src} alt="" />
                </div>
                <div>
                    <img src={img_2.src} alt="" />
                </div>
                <div>
                    <img src={img_3.src} alt="" />
                </div>
                <div>
                    <img src={img_4.src} alt="" />
                </div>
                <div>
                    <img src={img_5.src} alt="" />
                </div>
                <div>
                    <img src={img_6.src} alt="" />
                </div>
            </div> 
            <div className="useful-links-wrapper">
                <div className="useful-links">
                    <b>Абітурієнту</b>
                    <p>Правила прийому</p>
                    <p>Оплата за навчання</p>
                    <p>Приймальної комісії</p>
                    <p>Підготовчі курси</p>
                </div>
                <div className="useful-links">
                    <b>Інформація</b>
                    <p>Про нас</p>
                    <p>Контакти</p>
                    <p>Адміністрація</p>
                    <p>Розклад роботи</p>
                </div>
                <div className="useful-links">
                    <b>Студенту</b>
                    <p>Розклад пар</p>
                    <p>Розклад дзвінків</p>
                    <p>Студенту</p>
                    <p>ONELINE навчання</p>
                </div>
                <div className="useful-links">
                    <b>Соц мережі</b>
                    <p>Instagram</p>
                    <p>Telegram</p>
                    <p>YouTube</p>
                    <p>Facebook</p>
                </div>
            </div>
            <span>
                Авторські права © 2013 - 2021 Самбірський технікум економіки та інформатики. Усі права захищені.
            </span>
        </footer>
    )
}


export default Footer
