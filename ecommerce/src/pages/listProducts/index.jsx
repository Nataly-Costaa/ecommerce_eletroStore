import "./listProducts.css";
import { useEffect, useState } from "react";
import { BASE_URL_API } from "../../api";
import axios from "axios";

export const ListProducts = () => {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL_API}/produto`)
      .then((resposta) => setProdutos(resposta.data));
  }, []);

  return (
    <article>
      <h1>Produtos Disponíveis</h1>
      <div className="bloco">
        {produtos.map((el, index) => {
          return (
            <section className="conteiner lista-product" key={index}>
              <p className="title-product">{el.title}</p>
              <hr />
              <p className="description">{el.description}</p>
              <p className="preco"><span>R$ {el.price}</span></p>
            </section>
          );
        })}
      </div>
    </article>
  );
};

