import { SignIn } from "@clerk/remix";

const SignInPage = () => {
  return <SignIn fallbackRedirectUrl={"/dashboard"} />;
};

export default SignInPage;
