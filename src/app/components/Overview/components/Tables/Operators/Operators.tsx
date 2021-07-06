import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import Link from '@material-ui/core/Link';
import Table from '@material-ui/core/Table';
import { Skeleton } from '@material-ui/lab';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import { Paper as MaterialPaper } from '@material-ui/core';
import TableContainer from '@material-ui/core/TableContainer';
import config from '~app/common/config';
import SsvNetwork from '~lib/api/SsvNetwork';
import { useStores } from '~app/hooks/useStores';
import { useStyles } from '~app/components/Styles';
import { longStringShorten } from '~lib/utils/strings';
import OverviewStore from '~app/common/stores/Overview.store';
import StyledRow from '~app/common/components/Table/StyledRow';
import StyledCell from '~app/common/components/Table/StyledCell';
import CenteredCell from '~app/common/components/Table/CenteredCell';

const Operators = () => {
  const classes = useStyles();
  const [operators, setOperators] = useState([]);
  const [loadingOperators, setLoadingOperators] = useState(false);
  const stores = useStores();
  const overviewStore: OverviewStore = stores.Overview;

  useEffect(() => {
    if (!operators.length && !loadingOperators) {
      loadOperators();
    }
  });

  /**
   * Load first page of operators
   */
  const loadOperators = () => {
    setLoadingOperators(true);
    SsvNetwork.getInstance().fetchOperators(1).then((result: any) => {
      overviewStore.setTotalOperators(result.data.pagination.total);
      setOperators(result.data.operators);
      setLoadingOperators(false);
    });
  };

  return (
    <TableContainer component={MaterialPaper}>
      <Table aria-label="Operators">
        <TableHead>
          <TableRow>
            <StyledCell>Address</StyledCell>
            <StyledCell>Name</StyledCell>
            <StyledCell>Validators</StyledCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {operators.map((row: any, rowIndex) => (
            <StyledRow key={rowIndex}>
              <StyledCell>
                <Link href={`/operators/${row.address}`} className={classes.Link}>
                  {longStringShorten(row.address)}
                </Link>
              </StyledCell>
              <StyledCell>
                <Link href={`/operators/${row.address}`} className={classes.Link}>
                  {row.name}
                </Link>
              </StyledCell>
              <StyledCell>
                {row.validatorsCount}
              </StyledCell>
            </StyledRow>
          ))}

          {loadingOperators && (
            <StyledRow key="operators-placeholder">
              <StyledCell>
                <Skeleton />
              </StyledCell>
              <StyledCell>
                <Skeleton />
              </StyledCell>
              <StyledCell>
                <Skeleton />
              </StyledCell>
            </StyledRow>
          )}

          {operators.length ? (
            <TableRow>
              <CenteredCell colSpan={3}>
                <Link href={config.routes.OPERATORS.HOME} className={classes.Link}>
                  Load more
                </Link>
              </CenteredCell>
            </TableRow>
          ) : <TableRow />}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default observer(Operators);