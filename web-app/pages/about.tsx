import { GetStaticPathsContext, GetStaticProps, GetStaticPropsContext } from "next";
import { useRouter } from "next/router";

export interface AboutPageProps {
  posts: any[];
}

export default function AboutPage({posts}: AboutPageProps) {
  const router = useRouter();
  const { time, date } = router.query
  return <div>
    <h1>about fish</h1>
    <ul>
      {posts.map(fish => <li key={fish.taxon.id}>{fish.taxon.english_common_name}</li>)}
    </ul>
    <p>{time}, {date}</p>
  </div>
}

export const getStaticProps: GetStaticProps<AboutPageProps> = async (
  context: GetStaticPropsContext
) => {
  console.log('static props');
  const res = await fetch('https://api.inaturalist.org/v1/observations/species_counts?verifiable=true&page=1&spam=false&iconic_taxa%5B%5D=Actinopterygii&locale=en-US&per_page=50')
  const data = await res.json();
  return {
    props: { posts: data.results },
  };
};
