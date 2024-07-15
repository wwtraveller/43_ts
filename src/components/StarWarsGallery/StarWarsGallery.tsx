import HeroCard from "../heroCard/HeroCard";
import { forceUsers } from "./data";
import styles from "./starWarsGallery.module.css"
function StarWarsGallery () {
    return (
        <div className="lesson-container">
            <div className={styles.forceUsersGrid}>
            {forceUsers.map((hero,index) => (
                <HeroCard key={index} age={hero.age} isDark={hero.isDark} name={hero.name} image={hero.image} />
                
            ) )}
            </div>
        </div>
    );
}
export default StarWarsGallery;