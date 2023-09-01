import "./putDeletProduct.css";
import { BASE_URL_API } from "../../api";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const PutDeleteProduct = () => {
  const [produtos, setProdutos] = useState([]);

  const fetchProducts = () => {
    axios.get(BASE_URL_API + "/produto").then((resposta) => {
      setProdutos(resposta.data);
    });
  };

  const deleteProduct = (id) => {
    axios
      .delete(`${BASE_URL_API}/produto/${id}`)
      .then((response) => {
        console.log("Produto excluído com sucesso:", response.data);
        setProdutos(produtos.filter((produto) => produto.ID !== id)); // Usar ID, não id
      })
      .catch((error) => {
        console.error("Erro ao excluir produto:", error);
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <article>
      <h1>Editar ou deletar produtos</h1>
      <div className="bloco-put-delete">
        {produtos.map((el, index) => (
          <section key={index} className="conteiner put-delete">
            <p className="title">{el.title}</p>

            <hr />

            <div className="btn-delete-edit">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  deleteProduct(el.ID);
                }} className="btn-delete">
                Excluir
              </button>
              <button className="btn-edit">
                <Link to={`/editar/${el.ID}`}>Editar</Link>
              </button>
            </div>
          </section>
        ))}
      </div>
    </article>
  );
};
