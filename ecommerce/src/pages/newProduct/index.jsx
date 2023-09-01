import "./newProduct.css";
import { BASE_URL_API } from "../../api";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const NewProduct = () => {
  const [id, setID] = useState(0);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [id_user, setIdUser] = useState(0);

  const sendProduct = () => {
    axios
      .post(`${BASE_URL_API}/produto`, {
        id: id,
        titulo: title,
        descricao: description,
        preco: price,
        id_usuario: id_user,
      })
      .then((r) => console.log(r))
      .catch((e) => console.log(e));
  };

  return (
    <article className="new-product">
      <ul className="editDelete-btn">
        <li>
          <Link to={`/putDeleteProduct`} className="color">
            Editar ou Deletar Produto
          </Link>
        </li>
      </ul>
      <section className="conteiner">
        <form className="form-container">
          <fieldset>
            <legend>Adicione um novo produto</legend>

            <div className="input-group">
              <label htmlFor="id">
                ID do produto
                <input type="number" onChange={(e) => setID(e.target.value)} />
              </label>
            </div>

            <div className="input-group">
              <label htmlFor="title">
                Título do produto
                <input type="text" onChange={(e) => setTitle(e.target.value)} />
              </label>
            </div>

            <div className="input-group">
              <label htmlFor="description">
                Descrição do produto
                <input
                  type="text"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </label>
            </div>

            <div className="input-group">
              <label htmlFor="price">
                Valor do produto
                <input
                  type="number"
                  onChange={(e) => setPrice(e.target.value)}
                />
              </label>
            </div>

            <div className="input-group">
              <label htmlFor="idUser">
                ID do Usúario
                <input
                  type="number"
                  onChange={(e) => setIdUser(e.target.value)}
                />
              </label>
            </div>

            <button onClick={sendProduct} className="btn">Enviar</button>
          </fieldset>
        </form>
      </section>
    </article>
  );
};
