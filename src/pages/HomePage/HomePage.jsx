import React from 'react';
import { Link } from 'react-router-dom';
import styles from './homepage.module.css'

const HomePage = () => {
    return (
        <>
            <section className={styles.search__section}>
                <div className={styles.container}>
                    <div className={styles.search__wrapper}>
                        <div className={styles.text}>
                            <h1>Определить халяльность продукта</h1>
                            <p>Инструмент для проверки качества продукта</p>
                        </div>
                        <div className={styles.buttons}>
                            <input type="search" placeholder="Найдите или вставьте состав продукта здесь" />
                            <button type="button">Получить ответ</button>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className={styles.container}>
                    <div className={styles.instruction__wrapper}>
                        <div className={styles.instruction}>
                            <h2>Как определить халяльность продукта онлайн</h2>
                            <ul>
                                <li>
                                    <span class={styles.number}>
                                        <img src="https://x2download.app/x2download/imgs/link-solid.png" alt="" width="32" height="32" />
                                    </span>
                                    <span>Вставьте или введите состав продукта в поле поиска.</span>
                                </li>
                                <li>
                                    <span className={styles.number}>
                                        <img src="https://x2download.app/x2download/imgs/settings.png" alt="" width="32" height="32" />
                                    </span>
                                    <span>Проверьте правильность написания состава продукта и нажмите на кнопку "Получить ответ".</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HomePage;