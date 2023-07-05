import { Link } from "react-router-dom";
import NavBar from "../../Components/Nav";
import styles from "./Readme.module.css";

export default function() {
    return (
        <>
            <NavBar />
            <div className={styles.container}>

                <div className={styles.bloco}>
                    <h1>BlogApi</h1>
                    <p>Este projeto tem o objetivo de aplicar conhecimentos de requisições HTTP com finalidade de estudo!</p>
                </div>

                <div className={styles.bloco}>
                    <h3>Funcionalidades:</h3>
                    <p>
                        Esta aplicação simples se concentra no consumo de uma API que retorna textos aleatórios &#40;lorem ipsum&#41;.
                        Embora essa APi não permita o POST efetivo em seu banco de dados, a ideia do projeto é um CRUD a partir de um formulário. Este formulário deve coletar o título e o post do usuário corretamente &#40;é possível verificar o request feito com sucesso em ferramentas como o DevTools do Chrome seguindo o caminho &gt;Network&gt;posts&gt;Payload &#41;.
                    </p>
                </div>

                <div className={styles.bloco}>
                    <h3>Tecnologias adotadas:</h3>
                    <ul>
                        <li><strong>React:</strong> Aplicação feita a partir do "create react app".</li>
                        <li><strong>React Router Dom:</strong> Biblioteca utilizada para declarar as rotas da aplicação entre as páginas Home, Posts e Readme.</li>
                        <li><strong>Hooks:</strong> Utilizo o "useState" para gerenciar os dados retornados do request e armazená-los no estado do componente, e o "useEffect" para encapsular a lógica que executa a operação apenas quando o componente é renderizado pela primeira vez, evitando assim chamadas desnecessárias.</li>
                        <li><strong>Axios:</strong> O Axios é a lib utilizada para realizar a chamada para a API. Está declarada uma instância customizada com o nome de "axiosCustom" que recebe um objeto e define os cabeçalhos HTTP que serão enviados e contém a base da URL da API dentro dela, para posteriormente solicitar o request inserindo apenas o endpoint.
                        O objeto também é o utilizado para a requisição POST.</li>
                    </ul>
                </div>

                <div className={styles.bloco}>
                    <h3>Futuras implementações:</h3>
                    <p>
                        Como este projeto tem finalidade didática, terão novas implementações na medida em que novos conhecimentos forem sendo adquídos. 
                        Uma delas é a intenção de levar cada post clicado para uma outra página que contenha mais detalhes sobre aquele post específico.
                    </p>
                </div>

                <div className={styles.bloco}>
                    <h3>Status:</h3>
                    <p>
                        Em andamento.
                    </p>
                </div>

                <div className={styles.bloco}>
                    <h3>Notas:</h3>
                    <p>
                        <strong>Site da API utilizada:</strong> <Link to={`https://jsonplaceholder.typicode.com/`}>CliqueAqui</Link> 
                    </p>
                </div>
                    
                
            </div>
        </>
    );
}