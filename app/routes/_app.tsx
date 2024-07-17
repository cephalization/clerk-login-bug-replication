import { getAuth } from "@clerk/remix/ssr.server";
import { LoaderFunctionArgs, redirect } from "@remix-run/node";
import { Outlet } from "@remix-run/react";

export const loader = async (args: LoaderFunctionArgs) => {
  const { userId } = await getAuth(args);

  console.log(userId);

  if (!userId) {
    return redirect("/sign-in");
  }

  return { userId };
};

export default function AuthenticatedApp() {
  return <Outlet></Outlet>;
}
