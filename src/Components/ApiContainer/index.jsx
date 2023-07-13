import styles from "./container.module.css"
import { useState, useEffect } from "react";
import axiosCustom from "../../axios/axios-config";

const ContainerApi = () => {
    const [ posts, setPosts ] = useState([]);

    useEffect(() => {
      request();
    },[])
    
    const request = () => {
      axiosCustom.get("/posts")
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => console.log('deu ruim', error));
    }
  
    return (
        <div className={styles.container}>
            <h1>ÚLTIMOS POSTS</h1>
            { posts.length === 0 ? (
                <p>Carregando...</p> ) : (
                    posts.map((objeto) => (
                        <div className={styles.posts} key={objeto.key}>
                            <h2>{objeto.title}</h2>
                            <p>{objeto.body}</p>
                            {/* <Link className={styles.btn} to={`/posts/${objeto.id}`}>Ler mais</Link> */}
                        </div>
                    ))
            )}
        </div>
    );
  }

  export default ContainerApi;