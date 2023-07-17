
import { Card } from 'primereact/card';
import styles from "./MovieCard.module.css";

export function MovieCard({movie}){
    const header = (
        <img alt="Card" 
        src={movie.posterUrl} />
    );
    return(
        <div className={styles.card}>
        <Card title={movie.name}
        header={header} 
        className="md:w-25rem">
                <div className={styles.content}>
                    <hr />
                    <div className={styles.ratings}>
                        <div>
                        <img src='https://pixner.net/boleto/demo/assets/images/movie/tomato.png'></img>
                        &nbsp;&nbsp;
                        <span>{movie.rating}</span>
                        </div>
                       
                        <div>
                        <img src="https://pixner.net/boleto/demo/assets/images/movie/cake.png" alt="" />
                        &nbsp;&nbsp;
                        <span>{movie.rating}</span>
                        </div>
                    </div>
                </div>
        </Card>
        </div>
    )
}
