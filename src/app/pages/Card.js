import styles from './../page.module.css';


const Card = (props) =>{
    return(
        <div className ="col-sm-3"> 
            <div className={styles.card}>
                <img src={props.src}/>
                <p>{props.snapped}</p>
                <p>{props.power}</p>
                <p>{props.name}</p>
            </div>
        </div>
    )
}

export default Card;