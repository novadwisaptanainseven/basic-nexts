import Layout from "../../components/Layout/index.tsx";
import { useRouter } from "next/router";
import styles from "./User.module.css";

const User = ({ data }) => {
  const router = useRouter();
  console.log(data);

  return (
    <Layout pageTitle="Users Page">
      <h1>Users Page</h1>
      {data.map((item, index) => (
        <div
          className={styles.card}
          key={index}
          onClick={() => router.push(`/user/${item.id}`)}
        >
          <ul>
            <li>
              <b>Nama: </b> {item.name}
            </li>
            <li>
              <b>Email: </b> {item.email}
            </li>
          </ul>
        </div>
      ))}
    </Layout>
  );
};
export default User;

export async function getStaticProps() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`, {
    headers: {
      Accept: "application/json, text/plain, */*",
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36",
    },
  });
  const dataApi = await res.json();

  return {
    props: {
      data: dataApi,
    },
  };
}
