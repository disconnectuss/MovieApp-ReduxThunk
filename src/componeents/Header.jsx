import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Link to={"/"}>
        <img
          className="max-w-32 rounded-full p-4"
          src="https://t3.ftcdn.net/jpg/05/90/75/40/360_F_590754013_CoFRYEcAmLREfB3k8vjzuyStsDbMAnqC.jpg"
          alt=""
        />
      </Link>
    </div>
  );
};

export default Header;
