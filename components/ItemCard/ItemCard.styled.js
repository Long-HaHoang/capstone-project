import styled from "styled-components";

//temporary style

const StyledListItem = styled.li`
  width: 95%;
  height: 25%;
`;

const StyledArticle = styled.article`
  border-radius: 16px;
  background-color: lightgray;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  place-items: center;
  padding: 10px;
  gap: 10px;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledH2 = styled.h2`
  font-size: 16px;
  font-weight: bold;
  text-align: center;
`;

const StyledParagraph = styled.p`
  font-size: 14px;
  font-weight: 500;
`;

const StyledThumbnail = styled(Image)`
  border-radius: 8px;
  object-fit: cover;
`;

const WrapperDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  gap: 25px;
`;

const StyledForm = styled.form`
  padding: 10px;
  border-radius: 8px;

  background-color: white;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const StyledInput = styled.input`
  width: 30px;
  aspect-ratio: 1;
  text-align: center;
`;

const StyledButton = styled.button`
  aspect-ratio: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledSVG = styled.svg`
  height: 1.2rem;
  aspect-ratio: 1;
`;

export {
  StyledListItem,
  StyledArticle,
  StyledDiv,
  StyledH2,
  StyledParagraph,
  StyledThumbnail,
  WrapperDiv,
  StyledForm,
  StyledInput,
  StyledButton,
  StyledSVG,
};
