import { GetStaticPaths, GetStaticPathsContext, GetStaticProps, GetStaticPropsContext } from "next";
import { useRouter } from "next/router";
import { ReactElement } from "react";
import { MainLayout } from "../../components/layout";

export interface UserProps {
  user: any;
}

export default function UserPage({user}: UserProps) {
  const router = useRouter();
  if (router.isFallback) {
    return <div style={{fontSize: '2rem', textAlign: 'center'}}><strong>Loading...</strong></div>
  }
  // const { time, date } = router.query
  if (!user) return null
  const userKeys = Object.keys(user)
  return <div>
    <h1>about user</h1>
    <ul>
      {userKeys.map(key => <li key={key}>{key}: {user[key]}</li>)}
    </ul>
  </div>
}

UserPage.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>
    {page}
  </MainLayout>
}

export const getStaticPaths: GetStaticPaths = async () => {
  console.log('get static paths')
  const page1 = await fetch('https://test-api-production-6b9f.up.railway.app/api/v1/users?page=1')
  const dataPage1 = await page1.json()
  return {
    paths: dataPage1.map((u: any) => {return {params: {userId: String(u.id)}}}),
    // paths: [
    //   {params: {postId: '1'}},
    //   {params: {postId: '2'}},
    //   {params: {postId: '3'}},
    //   {params: {postId: '4'}}
    // ],
    fallback: true
  }
}

export const getStaticProps: GetStaticProps<UserProps> = async (
  context: GetStaticPropsContext
) => {
  const userId = context.params?.userId
  if (!userId) return {notFound: true}
  const res = await fetch(`https://test-api-production-6b9f.up.railway.app/api/v1/users/${userId}`)
  const data = await res.json();
  return {
    props: { user: data },
    revalidate: 5
  };
};