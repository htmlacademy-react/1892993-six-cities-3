import { Link } from 'react-router-dom';

function NotFoundPage(): JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link to="/" className="header__logo-link header__logo-link--active">
              <img
                className="header__logo"
                src="img/logo.svg"
                alt="6 cities logo"
                width={81}
                height={41}
              />
            </Link>
          </div>
        </div>
      </div>
      <main className="page__main page__main--index" style={{ textAlign: 'center' }}>
        <h3>404 Not Found</h3>
        <Link to="/" style={{ textDecoration: 'underline'}}> Вернуться на главную страницу</Link>
      </main>
    </header>
  );
}

export default NotFoundPage;
