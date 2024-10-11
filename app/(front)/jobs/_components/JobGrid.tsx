"use client"
import { Flex, Grid, rem, Title, Card, Image, Text, Group, Badge, Button, Container } from "@mantine/core";

export const JobGrid = ({ jobs, meta }: { jobs: Array<any>, meta: any }) => {
  return (
    <Container size={'xl'} mt="xl">
      <Grid>
        {
          jobs?.map((job, jIndex) => {
            return (
              <JobItem job={job} key={jIndex} />
            );
          })
        }
      </Grid>
    </Container>
  );
}

const JobItem = ({ job }: { job: any }) => {
  return (
    <Grid.Col span={{ md: 3, lg: 3, xl: 4, sm: 2, xs: 1 }}>
      <Card shadow="sm" padding="lg" radius="md" withBorder component="a" href={`/jobs/${job.slug || job.documentId}`}>
        <Card.Section>
          <Image
            src={job?.image?.url ? job?.image?.url  : 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png'}
            height={160}
            alt="Norway"
          />
        </Card.Section>

        <Group justify="space-between" mt="md" mb="xs">
          <Text fw={500}>{job.job_title}</Text>
          <Badge color="pink">OPEN</Badge>
        </Group>

        <Text size="sm" lineClamp={2} c="dimmed">{job.simple_description || String(job.description).slice(200)}</Text>

        <Button color="blue" fullWidth mt="md" radius="md">
          OPEN
        </Button>
      </Card>
    </Grid.Col>
  )
}