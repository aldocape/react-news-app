import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header className="App-header">
      <Link to="/">
        <img src="./logo.png" alt="logo" />
      </Link>
    </header>
  );
}
