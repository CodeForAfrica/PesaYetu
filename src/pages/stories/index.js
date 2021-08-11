import { useRouter } from "next/router";

const DEFAULT_INSIGHTS_PAGE = "/stories/news";

function Index() {
  const router = useRouter();
  // Make sure we're in the browser
  if (typeof window !== "undefined") {
    router.push(DEFAULT_INSIGHTS_PAGE);
  }
}

export async function getServerSideProps(context) {
  // Check we're on the server via context.res
  if (context.res) {
    context.res.writeHead(302, { Location: DEFAULT_INSIGHTS_PAGE });
    context.res.end();
  }
  return {
    props: {},
  };
}
export default Index;
