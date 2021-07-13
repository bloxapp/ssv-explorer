import TableRow from '@material-ui/core/TableRow';
import { createStyles, withStyles } from '@material-ui/core/styles';
import { grayBackgroundColor } from '~root/theme';
import BaseStore from '~app/common/stores/BaseStore';
import ApplicationStore from '~app/common/stores/Application.store';

const applicationStore: ApplicationStore = BaseStore.getInstance().getStore('Application');

const StyledRow = withStyles(() => createStyles({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: applicationStore.isDarkMode ? 'rgba(255, 255, 255, 0.08)' : '#F4F6F8',
      color: applicationStore.isDarkMode ? grayBackgroundColor : 'initial',
    },
  },
}))(TableRow);

export default StyledRow;
