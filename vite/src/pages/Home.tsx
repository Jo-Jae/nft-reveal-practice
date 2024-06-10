import { Flex } from "@chakra-ui/react";
import { FC } from "react";
import unreveal from "../images/unreveal.jpg";

const Home: FC = () => {
  return (
    <Flex bgColor="red.100" maxW={768} mx="auto" minH="100vh" flexDir="column">
      <Flex maxW={768} width={768} height={200}>
        <img src={unreveal} alt="슬라임이미지" />
      </Flex>
      <Flex>슬라임월드세계관</Flex>
      <Flex>설명</Flex>
      <Flex>설명</Flex>;
    </Flex>
  );
};

export default Home;
