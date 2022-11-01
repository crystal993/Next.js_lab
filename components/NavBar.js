import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./NavBar.module.css";

export default function NavBar() {
  // router에 관한 모든 정보를 불러올 수 있다.
  const router = useRouter();
  console.log(router);

  return (
    // 클래스 이름을 쓸 때 프로퍼티 형식으로 쓴다.
    <nav className={styles.nav}>
      <Link
        className="hello"
        style={{ color: router.pathname === "/" ? "red" : "blue" }}
        href="/"
      >
        Home
      </Link>
      <Link
        style={{ color: router.pathname === "/about" ? "red" : "blue" }}
        href="/about"
      >
        About
      </Link>
    </nav>
  );
}
