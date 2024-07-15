import styles from "./heroCardd.module.css"

interface IHeroCardProps {
    name:string,
    age: number,
    isDark: boolean,
    lightsaberColors?:string[],
    image: string
}
function HeroCard({isDark, age, name, image, lightsaberColors}: IHeroCardProps) {
    return (
        <div className={`${isDark ? styles.dark : styles.light} ${styles.card}`}>
                    <h4>{name}</h4>
                    <p>Age: {age}</p>
                    <img width={200} src={image} alt="" />
                    <div>

                    </div>
                    <p>
                        Lightsaber colors: {" "}
                        {lightsaberColors?.map(color => (
                            <span>{color} </span>
                        ))}
                    </p>
        </div>
    )
}

export default HeroCard;