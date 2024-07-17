import { getAuth } from "@clerk/remix/ssr.server";
import { LoaderFunctionArgs, redirect } from "@remix-run/node";
import { Outlet } from "@remix-run/react";

export const loader = async (args: LoaderFunctionArgs) => {
  const { userId, getToken } = await getAuth(args);

  if (!userId) {
    return redirect("/sign-in");
  }

  const token = await getToken();

  if (!token) {
    throw new Error("No token found");
  }

  return { userId };
};

export default function AuthenticatedApp() {
  return <Outlet></Outlet>;
}
