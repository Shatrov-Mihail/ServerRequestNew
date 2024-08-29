import { Link } from 'react-router-dom';

export const NotFound = () => (
  <div>
    <h1>Ошибка 404</h1>
    <p>Страница не найдена</p>
    <Link to="/">Вернуться на главную</Link>
  </div>
);