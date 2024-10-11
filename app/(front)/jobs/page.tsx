import { Flex, Grid, rem, Title, Card, Image, Text, Group } from "@mantine/core";
import { JobGrid } from "./_components/JobGrid";
import { cookies } from 'next/headers'

export const dynamic = 'force-dynamic'

export default async function JobsPage() {
  const cookieStore = cookies();
  let jobData = null;
  try {
    const options = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': process.env.STRAPI_API_SECRET || ''
      },
      caches: 'no-store'
    };
    console.log({ options, url: `${process.env.STRAPI_BASE_URL}/jobs?populate=*'` });
    const jobRequest = await fetch(
      `${process.env.STRAPI_BASE_URL}/jobs?populate=*`,
      options
    );

    jobData = await jobRequest.json();
    console.log({ jobData })
  } catch (err: unknown) {
    console.error(err);
  }
  return (
    <>
      <Flex align="center" justify="center" p={"xl"} style={{ backgroundColor: '#004c99', color: 'white' }}>
        <Title>Jobs</Title>
      </Flex>
      <JobGrid jobs={jobData.data} meta={jobData.meta}/>
    </>
  );
}