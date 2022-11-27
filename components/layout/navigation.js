import Link from "next/link";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link href="/companies">
            <span>Companies</span>
          </Link>
        </li>
        <li>
          <Link href="/users">
            <span>Users</span>
          </Link>
        </li>
        <li>
          <Link href="/jobs">
            <span>Jobs</span>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <span>About</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
