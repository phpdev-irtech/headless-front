import { Container, Flex, Title } from "@mantine/core";
import { AssetUtils } from "@/utils/index";
import { JobTitle } from "./_components/JobTitle";
import { JobDetail } from "./_components/JobDetail";
import "./_components/styles.scss";
import { cookies } from "next/headers";

type Props = {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export const dynamic = "force-dynamic";

export default async function DetailJobPage({ params, searchParams }: Props) {
  let detailData = null;
  let relatedData = null;
  const cookieStore = cookies();
  try {
    const options = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': process.env.STRAPI_API_SECRET || ''
      },
      caches: 'no-store'
    };
    const detailRequest = await fetch(
      `${process.env.STRAPI_BASE_URL}/jobs?filters[slug][$eq]=${params.slug}&populate=*`,
      options
    );
    const relatedRequest = await fetch(
      `${process.env.STRAPI_BASE_URL}/jobs?pagination[pageSize]=3&populate=image`,
      options
    );

    detailData = await detailRequest.json();
    relatedData = await relatedRequest.json();
    console.log({ detailData, relatedData })
  } catch (err: unknown) {
    console.error(err);
  }
  detailData = detailData?.data[0];
  console.log({jobtit: detailData})
  if(!detailData){
    return (
      <Container>
        <h1>Not fond job</h1>
      </Container>
    )
  }
  return (
    <>
      <JobTitle title={detailData?.job_title} url={detailData?.image?.url || ''}/>
      <JobDetail detail={detailData} related={relatedData}/>
    </>
  );
}