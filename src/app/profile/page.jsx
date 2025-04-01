import { getSession } from "@auth0/nextjs-auth0";
import React from "react";
import Footer from "@/components/footer/Footer";
import Header from "@/components/Header";

export default async function ProfileServer() {
  const { user } = await getSession();

  return (
    <>
      <Header />
      <div className="mt-[85px]">
        {user && (
          <div>
            <img src={user.picture} alt={user.name} />
            <h2>{user.name}</h2>
            <p>{user.email}</p>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}
