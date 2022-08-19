import { Link } from "react-router-dom";


function NotFound() {
  return (
    <>
      <main>
        <h2>Hey! You got a wrong URL.</h2>
        <p>Please enter correct URL! Thank you.</p>
      </main>
      <nav>
        <Link to="/">回首頁</Link>
      </nav>
    </>
  );
}

export default NotFound;
