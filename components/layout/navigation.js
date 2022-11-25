import Link from "next/link";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/home">
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link href="/home">
            <span>Companies</span>
          </Link>
        </li>
        <li>
          <Link href="/home">
            <span>Users</span>
          </Link>
        </li>
        <li>
          <Link href="/home">
            <span>Jobs</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
