import styles from "../styles/Page404.module.css";
import { useEffect } from "react";
import { useRouter } from "next/router";

const Page404 = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 2000);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>404</h1>
        <div className={styles.line}></div>
        <h1>Not Found</h1>
      </div>
      <h2 className={styles.description}>
        Oops... Halaman yang Anda Cari Tidak Ditemukan
      </h2>
    </div>
  );
};

export default Page404;
