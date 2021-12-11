import {Dimensions, StyleSheet} from 'react-native';
import spacing from '../../../styles/spacing';
import radius from '../../../styles/radius';

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    margin: spacing.normal,
    borderWidth: 1,
    borderColor: '#bdbdbd',
    borderRadius: radius.sharp,
  },
  image: {
    backgroundColor: '#bdbdbd',
    height: deviceSize.height / 6,
  },
  name_label: {
    fontWeight: 'bold',
    margin: spacing.tiny,
  },
  add_button_container: {
    bottom: spacing.large,
    right: spacing.tiny,
    borderRadius: spacing.huge,
    position: 'absolute',
    backgroundColor: '#039be5',
  },
});
