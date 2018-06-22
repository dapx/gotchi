import * as React from 'react';
import { View, Image } from 'react-native';

const NOT_FOUND = 'https://www.gumtree.com/static/1/resources/assets/rwd/images/orphans/a37b37d99e7cef805f354d47.noimage_thumbnail.png';

export interface Props {
  uri: string;
  style: any; // TODO - Search about correct style typing.
  imageStyle: any;
};

export class CharImage extends React.Component<any, any> {
  render() {
    const { uri = NOT_FOUND, style = {}, imageStyle = {} } = this.props;
    return (
      <View style={[{ flex: 1 }, ...style]}>
        <Image
          source={{ uri }}
          style={[{ width: 150, height: 150 }, ...imageStyle]}
        />
      </View>
    );
  }
}
