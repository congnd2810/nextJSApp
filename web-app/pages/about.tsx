// import Header from "../components/header";
// import { GetStaticPathsContext, GetStaticProps, GetStaticPropsContext } from "next";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Header from "../components/header";
// const Header = dynamic(() => import('../components/header'), {ssr: false})

export interface AboutPageProps {
  posts: any[];
}

export default function AboutPage({posts}: AboutPageProps) {
  const [postList, setPostList] = useState([])
  const router = useRouter()
  console.log(router.query)

  useEffect(() => {
    (async () => {
      const res1 = await fetch('https://api.publicapis.org/entries')
      const data1 = await res1.json()
      setPostList(data1.country)
    })()
  }, [])
  return (<div>
    <Header/>
    <h1>about fish</h1>
    {/* <ul>
      {posts.map(fish => <li key={fish.taxon.id}>{fish.taxon.english_common_name}</li>)}
    </ul> */}
    <ul>
      {postList.map((name: any) => <li key={name.country_id}>{name.probability}</li>)}
    </ul> 
  </div>)
}

// export const getStaticProps: GetStaticProps<AboutPageProps> = async (
//   context: GetStaticPropsContext
// ) => {
//   console.log('static props');
//   const res = await fetch('https://api.inaturalist.org/v1/observations/species_counts?verifiable=true&page=1&spam=false&iconic_taxa%5B%5D=Actinopterygii&locale=en-US&per_page=50')
//   const data = await res.json();
//   return {
//     props: { posts: data.results },
//   };
// };
