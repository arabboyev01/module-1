import styled from 'styled-components';

export const StyleHomeComponent = styled.div`
  max-width: 1330px;
  margin: 50px auto;
  @media (max-width: 1330px) {
    margin: 50px;
  }
`;

export const PersonWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
  margin: 50px 0;
`;
export const StyledCart = styled.div`
  gap: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Name = styled.p`
  font-size: 22px;
  font-weight: 600;
`;
