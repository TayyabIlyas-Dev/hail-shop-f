import { UserProfile } from "@clerk/nextjs";

const Page =  () => {

  return (
    <div className="min-h-screen pt-24 pb-12 flex justify-center items-center bg-gray-50">


<UserProfile />
    </div>
  );
};

export default Page;