import { useRouter } from "next/router";
import Layout from "../../components/Layout/index.tsx";
import styles from "../../styles/Blog.module.css";

const Blog = ({ dataBlog }) => {
  const router = useRouter();

  const goToDetailBlog = (id) => {
    router.push(`/blog/${id}`);
  };

  return (
    <Layout pageTitle="Blog Page">
      <h1>This is Blog</h1>
      <div className={styles.container}>
        {dataBlog.map((item) => (
          <div
            key={item.id}
            className={styles.card}
            onClick={() => goToDetailBlog(item.id)}
          >
            <h2>{item.title}</h2>
            <p>{item.body}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Blog;

export async function getServerSideProps() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const dataBlog = await res.json();

  return {
    props: {
      dataBlog,
    },
  };
}
