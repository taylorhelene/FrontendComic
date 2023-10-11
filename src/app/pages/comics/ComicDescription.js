import styles from '../../page.module.css'
const ComicDescription =(props)=>{
    return(
        <>
        <div className={styles.card}>
            <div className="container">
                <div className="row">
                    <div className="col-sm-4">
                        <img src={props.src} className={styles.image}/>
                    </div>
                    <p className="col-sm-6">{props.name}</p>
                </div>
            </div>
           
            </div>
        </>
    )
}
export default ComicDescription;