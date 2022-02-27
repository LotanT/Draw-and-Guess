import { Link } from 'react-router-dom';

export function Welcome() {
  return (
    <section className="welcome main-layout">
      <div className="header">Welcome to Draw and Guess</div>
      <Link to="/wait" className="main-btn play">
        Start to Play!
      </Link>
    </section>
  );
}
