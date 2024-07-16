import { ligaSans } from "@/config/fonts.config";
import { redirect } from "next/navigation";

export default function Logout() {
  redirect("/flexion/login");

  return (
    <>
      <h1 className={ligaSans.className + " text-2xl m-4"}>
        Logging you out...
      </h1>
    </>
  );
}
