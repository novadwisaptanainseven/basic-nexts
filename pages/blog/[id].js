import { useRouter } from "next/router";
import Layout from "../../components/Layout/index.tsx";

const DetailBlog = ({ blog }) => {
  const router = useRouter();

  const goBackToParent = () => {
    router.back();
  };

  return (
    <Layout pageTitle="Detail Blog">
      <h1>{blog.title}</h1>
      <p>{blog.body}</p>
      <a onClick={goBackToParent} style={{ cursor: "pointer" }}>
        &larr; Kembali ke halaman sebelumnya
      </a>
    </Layout>
  );
};

export default DetailBlog;

export async function getStaticPaths() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const dataBlog = await res.json();
  const paths = dataBlog.map((post) => ({
    params: {
      id: `${post.id}`,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { id } = context.params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const blog = await res.json();

  return {
    props: {
      blog,
    },
  };
}
