import { Flex } from "@chakra-ui/react";
import { FC } from "react";
import unreveal from "../images/unreveal.jpg";

const Home: FC = () => {
  return (
    <Flex
      bgColor="red.100"
      w="100%"
      alignItems="center"
      flexDir="column"
      gap={2}
      mt={8}
      mb={20}
    >
      <Flex maxW={768} w="100%" height={200}>
        <img src={unreveal} alt="슬라임이미지" />
      </Flex>
      <Flex>슬라임월드세계관</Flex>
      <Flex>설명</Flex>
      <Flex>설명</Flex>;
    </Flex>
  );
};

export default Home;
