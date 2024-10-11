"use client"
import { AssetUtils } from "@/utils/index";
import { Badge, Container, Divider, Flex, Grid, Image, Paper, Stack, Text, Title } from "@mantine/core";
import 'ckeditor5/ckeditor5.css';

export const RelatedJob = ({ relatedJobs }: { relatedJobs: any }) => {
  return (
    <>
      <Title order={3}>Related jobs</Title>
      <Stack gap={8}>
        {
          relatedJobs?.map((job: any, index: number) => {
            return (
              <Flex key={index} direction="row" component="a" href={`/jobs/${job.slug}`} style={{textDecoration: "none", color: "#2c2c2c"}}>
                <Image src={job?.image?.url} alt="alt" width={50} height={50} fallbackSrc={"https://placehold.co/600x400?text=Not found"} radius={8} mr={8}/>
                <Flex direction={"column"}>
                  <Title order={6}>{job?.job_title}</Title>
                  <Text lineClamp={1} size="xs">{job?.simple_description || ''}</Text>
                </Flex>
                <Divider/>
              </Flex>
            )
          })
        }
      </Stack>
    </>
  );
}