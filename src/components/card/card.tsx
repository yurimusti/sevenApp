import React from "react";
import * as Styled from "./style";

interface Props {
  name: string;
  age: Number;
}

const Card = ({ name, age }: Props) => {
  return (
    <Styled.Main>
      <Styled.Name>{`Name: ${name}`}</Styled.Name>
      <Styled.Age>{`Age: ${age}`}</Styled.Age>
    </Styled.Main>
  );
};

export default Card;
