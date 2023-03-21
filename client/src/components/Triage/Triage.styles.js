import styled from "styled-components";

export const TriageWrapper = styled.div`
  margin-top: 100px;
  display: grid;
  grid-template-columns: ${({ response }) => (response ? "40vw 40vw" : "30vw")};
  justify-content: center;
  grid-gap: 10px;

  margin-bottom: 20px;
  @media (max-width: 800px) {
    grid-template-columns: none;

    grid-template-rows: 1fr 1fr;
  }
`;

export const PurpleBackground = styled.div`
  background-image: linear-gradient(to right, #766cad, #d6c4e9);
  margin: 0px auto;
  padding: 50px;
  border-radius: 20px;
  width: 100%;
  min-width: 300px;
`;

export const FormWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
`;

export const QuestionWrapper = styled.div`
  display: grid;
  grid-template-rows: 30px 1fr;
  grid-gap: 10px;
`;

export const Question = styled.span`
  color: white;
`;

export const Response = styled.div`
  background-color: rgb(68, 70, 84);
  color: white;
  border-radius: 10px;
  padding: 10px;
`;

export const LoadingWrapper = styled.div`
  margin: 0px auto;
`;

export const Pre = styled.pre`
  width: 100%;
  white-space: pre-wrap;
`;
