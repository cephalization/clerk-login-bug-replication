import { SignOutButton } from "@clerk/remix";

const Dashboard = () => {
  return (
    <div>
      Logged In Dashboard
      <SignOutButton />
    </div>
  );
};

export default Dashboard;
