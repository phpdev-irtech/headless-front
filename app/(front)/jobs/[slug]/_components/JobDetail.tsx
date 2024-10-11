"use client"
import { Badge, Container, Flex, Grid, Text } from "@mantine/core";
import 'ckeditor5/ckeditor5.css';
import { RelatedJob } from "./RelatedJobs";

export const JobDetail = ({ detail, related }: { detail: any, related: any }) => {
  return (
    <>
      <div style={{ backgroundColor: "#cdcdcd", padding: 16, marginBottom: 16 }}>
        <Container>
          <Text>
            <Badge variant="filled" size="sm" color="blue" title={detail.job_type}>
              {detail.job_type}
            </Badge>
          </Text>
          <Text size="sm">Salary: {detail.salary}</Text>
          <Text size="sm">Address: {detail.address}</Text>
        </Container>
      </div>
      <Container>
        <Grid>
          <Grid.Col span={8}>
            <div className="ck-content" dangerouslySetInnerHTML={{ __html: detail.detail }}></div>
          </Grid.Col>
          <Grid.Col span={4}>
            <RelatedJob relatedJobs={related.data} />
          </Grid.Col>
        </Grid>
      </Container>
    </>
  );
}