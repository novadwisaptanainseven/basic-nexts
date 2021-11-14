import { useRouter } from "next/router";
import Layout from "../../components/Layout/index.tsx";

const UserDetail = ({ user }) => {
  const router = useRouter();
  const { id } = router.query;

  console.log(user);

  return (
    <Layout pageTitle="Users Page">
      <h1>User Detail | {id}</h1>
      <p>
        <b>Name: </b>
        {user.name}
      </p>
      <p>
        <b>Email: </b>
        {user.email}
      </p>
      <p>
        <b>Phone: </b>
        {user.phone}
      </p>
      <p>
        <b>Website: </b>
        {user.website}
      </p>
    </Layout>
  );
};

export default UserDetail;

export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const dataUsers = await res.json();
  const paths = dataUsers.map((user) => ({
    params: {
      id: `${user.id}`,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { id } = context.params;

  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const user = await res.json();

  return {
    props: {
      user,
    },
  };
}
