import {StyleSheet} from 'react-native';
import spacing from '../../../styles/spacing';

export default StyleSheet.create({
  container: {
    flex: 1,
    margin: spacing.normal,
  },
  name_label: {
    fontWeight: 'bold',
    margin: spacing.tiny,
    textAlign: 'center',
    color: 'black',
    fontSize: spacing.huge,
  },
  order_container: {
    margin: spacing.tiny,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  order_name: {
    fontSize: spacing.large,
  },
  order_price: {
    fontWeight: 'bold',
    fontSize: 12,
  },
  total: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: spacing.normal,
    textAlign: 'right',
  },
});
