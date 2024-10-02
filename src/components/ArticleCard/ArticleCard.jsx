import s from "./ArticleCard.module.css";
import ArticlesContext from "../../context/ArticlesContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

export const ArticleCard = () => {
  const data = useContext(ArticlesContext);

  // Проверка на отсутствие данных или пустой массив
  if (!data || !data.articles || data.articles.length === 0) {
    return <div>Loading articles...</div>; // Показать сообщение или загрузку
  }

  const article = data.articles[0];

  
  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <Link to={`/articles/${article.id}`}>
      <div className={s.container}>
        <img className={s.img} src={article.photo} alt="article" />
        <p className={s.category}>{article.category}</p>
        <h2 className={s.title}>{article.title}</h2>
        <div className={s.textwrapper}>
          <p className={s.text}>{article.body}</p>
        </div>
      </div>
    </Link>
  );
};
