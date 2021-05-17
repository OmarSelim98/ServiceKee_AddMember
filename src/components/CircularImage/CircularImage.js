import styles from './CircularImage.module.css'

const CircularImage = ()=>{
    return(
        <div className={styles.imageContainer}>
            <div className={styles.circleImage}>
                <img src="https://via.placeholder.com/150x150"/>
            </div>
        </div>
    )
};

export default CircularImage;