// import Header from "../components/header";
// import { GetStaticPathsContext, GetStaticProps, GetStaticPropsContext } from "next";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { GetStaticProps, GetStaticPropsContext } from "next";
import Header from "../components/common/header";
import { MainLayout } from "../components/layout";
import { ReactElement } from "react";
import { NextPageWithLayout } from "./_app";
// const Header = dynamic(() => import('../components/header'), {ssr: false})

export interface AboutPageProps {
  posts: any[];
}

export default function AboutPage({posts}: AboutPageProps) {
  const [postList, setPostList] = useState([])
  const router = useRouter()
  let page = router.query?.page

  // console.log('about query:', router.query?.page)

  useEffect(() => {
    if (!page) {page = '1'}
    (async () => {
      const res = await fetch(`https://test-api-production-6b9f.up.railway.app/api/v1/users?page=${page}`)
      const data = await res.json()
      setPostList(data)
    })()
  }, [page])
  console.log('about query:', router.query?.page)

  function handleNextClick() {
    router.push(
      {
        pathname: '/about',
        query: {
          page: (Number(page) || 1) + 1
        },
      },
      undefined,
      { shallow: true }
    )
  }
  return (<div>
    <Header/>
    <h1>Users</h1>
    <button onClick={handleNextClick}>Next Page</button>
    <ul>
      {postList.map((user: any) => <li key={user.id}>{user.name}</li>)}
    </ul> 
    <ul>
      {posts.map((user: any) => <li key={user.id}>{user.name}</li>)}
    </ul> 
  </div>)
}

AboutPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <MainLayout>
      {page}
    </MainLayout>
  )
}
export const getStaticProps: GetStaticProps<AboutPageProps> = async (
  context: GetStaticPropsContext
) => {
  console.log('static props');
  const res = await fetch('https://test-api-production-6b9f.up.railway.app/api/v1/users?page=1')
  const data = await res.json();
  return {
    props: { posts: data },
  };
};
