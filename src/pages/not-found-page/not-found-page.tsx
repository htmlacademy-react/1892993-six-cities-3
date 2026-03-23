import {Link} from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const divStyle = {
  display: 'flex',
  flexDirection: 'column' as const,
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '30px',
};

function NotFoundPage(): JSX.Element {
  return (
    <div style={divStyle}>
      <Helmet>
        <title>404</title>
      </Helmet>
      <span>404</span>
      <p>Страница не найдена</p>
      <Link to="/">
        Вернуться на главную страницу
      </Link>
    </div>
  );
}

export default NotFoundPage;
