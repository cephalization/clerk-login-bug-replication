import { getAuth } from "@clerk/remix/ssr.server";
import {
  redirect,
  type LoaderFunctionArgs,
  type MetaFunction,
} from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Clerk Login Bug Reproduction" },
    { name: "description", content: "Clerk Login Bug Reproduction" },
  ];
};

export const loader = async (args: LoaderFunctionArgs) => {
  const { userId } = await getAuth(args);

  if (userId) {
    return redirect("/dashboard");
  }

  return { userId };
};

export default function Index() {
  return (
    <div className="font-sans p-4">
      <ul className="list-disc mt-4 pl-6 space-y-2">
        <li>
          <a href="/sign-in">Sign In</a>
        </li>
      </ul>
    </div>
  );
}
