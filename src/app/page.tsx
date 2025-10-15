import prisma from "@/lib/db";
const Page = async () => {
  const users = await prisma.user.findMany();
  return <div className="text-red-500 font-bold">{JSON.stringify(users)}</div>;
};

export default Page;
