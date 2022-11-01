import { GetStaticPaths, GetStaticPathsContext, GetStaticProps, GetStaticPropsContext } from "next";
import { useRouter } from "next/router";

export interface PostPageProps {
  posts: any[];
}

export default function AboutPage({posts}: PostPageProps) {
  const router = useRouter();
  // const { time, date } = router.query
  if (!posts) return null
  return <div>
    <h1>about fish</h1>
    <ul>
      {posts.map(fish => <li key={fish.taxon.id}>{fish.taxon.english_common_name}</li>)}
    </ul>
    {/* <p>{time}, {date}</p> */}
  </div>
}

export const getStaticPaths: GetStaticPaths = async () => {
  console.log('static paths')
  return {
    paths: [
      {params: {postId: '1'}},
      {params: {postId: '2'}},
      {params: {postId: '3'}},
      {params: {postId: '4'}}
    ],
    fallback: false
  }
}

export const getStaticProps: GetStaticProps<PostPageProps> = async (
  context: GetStaticPropsContext
) => {
  console.log('static props', context.params?.postId);
  const res = await fetch('https://api.inaturalist.org/v1/observations/species_counts?verifiable=true&page=1&spam=false&iconic_taxa%5B%5D=Actinopterygii&locale=en-US&per_page=50')
  const data = await res.json();
  return {
    props: { posts: data.results },
  };
};
