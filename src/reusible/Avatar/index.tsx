import { FC } from 'react';
import { AvatarProps } from '../../types';
import { AvatarContainer, Eye, Face, Eyes } from './style.avatar';

const Avatar: FC<AvatarProps> = ({ data }) => {
  console.log(data);
  const { skin_color, eye_color } = data;

  return (
    <AvatarContainer>
      <Face skinColor={skin_color}>
        <Eyes>
          <Eye eyeColor={eye_color} />
          <Eye eyeColor={eye_color} />
        </Eyes>
      </Face>
    </AvatarContainer>
  );
};

export default Avatar;
