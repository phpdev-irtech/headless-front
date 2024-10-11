import { Container, Title } from "@mantine/core";
import { ContentfulClient } from "libs";
import { Metadata } from "next";
import { cookies } from "next/headers";
import contentful from 'contentful';

export const dynamic = 'force-dynamic'

export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = cookies();
  let seoData = null;
  let seoImageData = null;
  try {
    const options = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': process.env.STRAPI_API_SECRET || ''
      },
    };
    const homeRequest = await fetch(
      `${process.env.STRAPI_BASE_URL}/home?populate=*`,
      options
    )

    seoData = await homeRequest.json();

    const imageRes = await fetch(
      `${process.env.STRAPI_BASE_URL}/upload/files/${seoData?.data?.SEO.id}`,
      options
    );
    seoImageData = await imageRes.json();
    console.log({ seoData })
  } catch (err: unknown) {
    console.error(err);
  }

  return {
    title: seoData?.data?.SEO?.metaTitle,
    description: seoData?.data?.SEO?.metaDescription,
    openGraph: {
      images: [`${process.env.NEXT_PUBLIC_STRAPI_ASSETS_PREFIX}${seoImageData?.url}`],
    },
  }
}

export default async function HomePage() {

  const contentfulRequest = await ContentfulClient.getEntry('477ALQB46Y9gIrqKXnjNPm');
  console.log({contentfulRequest});
  return (
    <Container>
      <Title>Jobs page demonstration</Title>
    </Container>
  )
}
