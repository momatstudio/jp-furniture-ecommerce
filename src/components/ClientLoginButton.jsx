"use client";
import React from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/navigation";
import { CiUser } from "react-icons/ci";

export default function ClientLoginButton() {
  const { user, error, isLoading } = useUser();
  const router = useRouter();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <>
      {isLoading === false && user ? (
        <button
          href={"/profile"}
          className="hidden md:flex h-[40px] w-[40px] rounded-full ml-4"
          onClick={() => router.push("/profile")}
        >
          <img
            src={user?.picture || "/default-avatar.png"}
            // width={25}
            height={25}
            className="rounded-full"
            alt={user?.name || "User avatar"}
          />
        </button>
      ) : (
        <button className="hidden md:flex items-center text-sm cursor-pointer hover:text-[#A42300] py-2 ml-4">
          <CiUser
            className="mx-1"
            size={22}
            onClick={() => router.push("/api/auth/login")}
          />
        </button>
      )}
    </>
  );
}
