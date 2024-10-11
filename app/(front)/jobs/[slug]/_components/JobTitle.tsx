import { AssetUtils } from "@/utils/index";
import { Flex, Title } from "@mantine/core";

export const JobTitle = ({ title, url }: { title?: string, url?: string }) => {
  return (
    <Flex align="center" justify="center" p={"xl"} style={{ backgroundColor: '#004c99', backgroundImage: `url(${AssetUtils.strapiAsset(url)})`, color: 'white', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
      <Title>{title}</Title>
    </Flex>
  );
}