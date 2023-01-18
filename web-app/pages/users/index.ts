import { NextApiRequest, NextApiResponse } from "next"
import { GetStaticPaths, GetStaticPathsContext, GetStaticProps, GetStaticPropsContext } from "next";

export interface UserProps {
  user: any;
}

export default async function handler (req: NextApiRequest, res: NextApiResponse, {user}: UserProps) {
  res.status(200).json(user)
}

export const getStaticProps: GetStaticProps<UserProps> = async (
  context: GetStaticPropsContext
) => {
  const userId = context.params?.userId
  if (!userId) return {notFound: true}
  const res = await fetch(`https://test-api-production-6b9f.up.railway.app/api/v1/users/1`)
  const data = await res.json();
  return {
    props: { user: data },
    revalidate: 5
  };
};