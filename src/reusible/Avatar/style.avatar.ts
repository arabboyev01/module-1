import styled from 'styled-components';

export const AvatarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Arial, sans-serif;
`;

interface FaceProps {
  skinColor: string;
}

export const Face = styled.div<FaceProps>`
  background-color: ${(props) => props.skinColor};
  border-radius: 50%;
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Eyes component props
interface EyesProps {}

export const Eyes = styled.div<EyesProps>`
  display: flex;
`;

interface EyeProps {
  eyeColor: string;
}

export const Eye = styled.div<EyeProps>`
  background-color: ${(props) => props.eyeColor};
  border-radius: 50%;
  width: 20px;
  height: 20px;
  margin: 0 10px;
`;


