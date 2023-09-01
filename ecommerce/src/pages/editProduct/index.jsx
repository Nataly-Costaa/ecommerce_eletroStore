import "./editProduct.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL_API } from "../../api";

export const EditProduct = () => {
  const { id } = useParams();

  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: 0,
    id_user: 0,
  });

  useEffect(() => {
    axios.get(`${BASE_URL_API}/produto`).then((response) => {
      const { title, description, price, id_user } = response.data;
      setProduct({
        title: title || "",
        description: description || "",
        price: price || 0,
        id_user: id_user || 0,
      });
    });
  }, [id]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.put(`${BASE_URL_API}/produto/${id}`, product);
  };

  return (
    <article>
      <section className="conteiner">
        <form onSubmit={handleSubmit}>
          <fieldset className="fieldset-edit">
            <legend>Edite seu produto</legend>

            <div className="input-group">
              <label>
                Título
                <input
                  type="text"
                  name="title"
                  value={product.title}
                  onChange={handleInputChange}
                />
              </label>
            </div>

            <div className="input-group">
              <label>
                Descrição
                <input
                  type="text"
                  name="description"
                  value={product.description}
                  onChange={handleInputChange}
                />
              </label>
            </div>

            <div className="input-group">
              <label>
                Preço
                <input
                  type="number"
                  name="price"
                  value={product.price}
                  onChange={handleInputChange}
                />
              </label>
            </div>

            <div className="input-group">
              <label>
                ID do Usuário
                <input
                  type="number"
                  name="id_user"
                  value={product.id_user}
                  onChange={handleInputChange}
                />
              </label>
            </div>

            <button type="submit" className="btn">
              Salvar Alterações
            </button>
          </fieldset>
        </form>
      </section>
    </article>
  );
};
