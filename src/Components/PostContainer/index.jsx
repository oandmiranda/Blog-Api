import postContainerStyle from "./PostContainer.module.css";
import styles from "../../Components/ApiContainer/container.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axiosCustom from "../../axios/axios-config";

export default function PostContainer() {
    const navigate = useNavigate(); // encaminhar usuário para Home após o submit
    const [title, setTitle] = useState();
    const [body, setBody] = useState();

    const createPost = (e) => {
        e.preventDefault();
        console.log(title, body);
        const newPost = { title, body, useriD: 1 };
        axiosCustom.post('/posts', {
            body: newPost,  
        })

        navigate('/')
    }

    return (
        <>
        <div className={postContainerStyle.container}>
             <h1>Inserir novo Post:</h1>
                <form onSubmit={ (e) => createPost(e) }>
                    <div className={postContainerStyle.formControl}>
                        <label htmlFor="title">Título:</label>
                        <input 
                            id="for"
                            name="text"
                            type="text"
                            placeholder="Digite o título"
                            onChange={ (e) => setTitle(e.target.value) }
                        />
                    </div>
                    <div className={postContainerStyle.formControl}>
                        <label htmlFor="body">Post:</label>
                        <textarea
                            id="body"
                            name="body"
                            placeholder="Digite seu post"
                            onChange={ (e) => setBody(e.target.value) }
                        ></textarea>
                    </div>
                        <input 
                            type="submit"
                            value="Criar post"
                            className={styles.btn}
                        />
                </form>
        </div>
        </>
    )
}