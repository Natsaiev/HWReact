import s from "./ArticleList.module.css";
import { Menu } from "../Menu";
import ArticlesContext from "../../context/ArticlesContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

export const ArticleList = () => {
  const data = useContext(ArticlesContext);

 
  if (!data || !Array.isArray(data.articles)) {
    return <div>Loading articles...</div>; 
  }

  return (
    <div className="main">
      <Menu />
      <br />
      {data.articles.map((article) => (
        <Link to={"/articles/" + article?.id} key={article?.id}>
          <div className={s.smallCard}>
            <img src={article?.photo} alt={article?.title} />
            <div className={s.innerContent}>
              <h4 className={s.header}>{article?.title}</h4>
              <p className={s.category}>{article?.category}</p>
              <div className={s.textwrapper}>
                <p className={s.text}>{article?.body}</p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
