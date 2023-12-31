// root/src/app/page.tsx

import Chat from "@/components/Chat";
import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Home() {
  // const session = await getServerSession(authOptions);
  const session = true;

  if (!session) {
    console.log("Session -- ", session);
    redirect("/api/auth/signin");
  }

  return (
    <>
    {session ? <Chat/> : 
      <section className="w-full h-screen flex flex-col bg-white pt-14">
        <div className="flex flex-col items-center justify-center">
          Unauthorized
        </div>
      </section>}
        

    </>
  );
}
