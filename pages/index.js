import Layout from "../components/Layout/index.tsx";
import styles from "../styles/Home.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <Layout pageTitle="Home Page">
      <h1 className={styles["title-homepage"]}>Welcome Nova!</h1>
      <Image src="/mobil1.jpg" width="200" height="200" alt="gambar" />
    </Layout>
  );
}
