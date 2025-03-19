import ClientHome from "@/components/index/ClientHome";
// import { getSession } from "@auth0/nextjs-auth0";

export default function Home() {
  // const session = await getSession();
  // const userData = session?.user
  //   ? {
  //       name: session.user.name,
  //       email: session.user.email,
  //       picture: session.user.picture,
  //     }
  //   : null;

  return <ClientHome />;
}
