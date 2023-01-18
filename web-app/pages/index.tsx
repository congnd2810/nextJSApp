import Link from "next/link";
import type { ReactElement } from "react";
import type { NextPageWithLayout } from "./_app";
import { MainLayout } from "../components/layout";

const Home: NextPageWithLayout = () => {
  return (
    <div>
      <ul>
        <li>
          <Link href="/about">
            <a>Go to about</a>
          </Link>
        </li>
        <li>
          <Link href="/users/1">
            <a>Also goes to pages/users/[id].js</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
export default Home;
