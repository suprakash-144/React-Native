import React, {PropsWithChildren} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
type iconprops = PropsWithChildren<{
  name: string;
}>;
export const Icons = ({name}: iconprops) => {
  switch (name) {
    case 'circle':
      return <Icon name="circle-thin" size={38} color="#D7CD2E" />;

    case 'cross':
      return <Icon name="times" size={38} color="#35CC77" />;

    default:
      return <Icon name="pencil" size={38} color="#0D0D0D" />;
  }
};
