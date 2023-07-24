import React from 'react';
import { observer } from 'mobx-react';
import Grid from '@material-ui/core/Grid';
import ApiParams from '~lib/api/ApiParams';
import { Skeleton } from '@material-ui/lab';
import Table from '@material-ui/core/Table';
import { TableCell } from '@material-ui/core';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import Typography from '@material-ui/core/Typography';
import TableContainer from '@material-ui/core/TableContainer';
import TablePagination from '@material-ui/core/TablePagination';
import StyledRow from '~app/common/components/Table/StyledRow';
import StyledCell from '~app/common/components/Table/StyledCell';
import { useWindowSize, WINDOW_SIZES } from '~app/hooks/useWindowSize';
import { useStyles } from '~app/common/components/DataTable/DataTable.styles';
import PaginationActions from '~app/common/components/DataTable/components/PaginationActions';
import { overviewTableHeadersStyle } from '~app/components/Overview/components/Tables/Operators/Operators';

type HeaderPosition = 'inherit' | 'left' | 'center' | 'right' | 'justify';

const OPERATOR_CELL_LABEL_NAME = ['', 'Status', '1D Performance', 'Validators'];
const VALIDATOR_CELL_LABEL_NAME = ['', '', 'Operators'];

type DataTableProps = {
  title?: string,
  headers: any[],
  headersPositions?: HeaderPosition[],
  data: any[],
  rowsPerPageOptions?: number[],
  totalCount: number,
  perPage?: number,
  page: number,
  isLoading?: boolean,
  // eslint-disable-next-line no-unused-vars
  onChangePage?: (page: number) => void,
  // eslint-disable-next-line no-unused-vars
  onChangeRowsPerPage?: (event: any) => void,
  noDataMessage?: string,
  hidePagination?: boolean,
  operatorListFlow?: boolean,
  validatorListFlow?: boolean,
};

const defaultPerPageOptions = [10, 25, 50, 100];
const skeletons = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const DataTable = (props: DataTableProps) => {
  const { headers, data, rowsPerPageOptions, totalCount, perPage, page, isLoading, operatorListFlow, validatorListFlow,
    onChangePage, onChangeRowsPerPage, headersPositions, title, noDataMessage, hidePagination } = props;
  const classes = useStyles();
  const windowSize = useWindowSize();

  const dataRows = () => {
    if (isLoading) {
      return skeletons.map((rowIndex: number) => (
        <StyledRow hover role="checkbox" tabIndex={-1} key={`row-${rowIndex}`}>
          {headers.map((header: string) => (
            <StyledCell key={`cell-${header}`}>
              <Skeleton />
            </StyledCell>
          ))}
        </StyledRow>
      ));
    }
    if (!data?.length) {
      return (
        <StyledRow hover role="checkbox" tabIndex={-1}>
          <StyledCell align="center" colSpan={headers?.length || 1}>
            {noDataMessage ?? 'No records'}
          </StyledCell>
        </StyledRow>
      );
    }
    if (operatorListFlow && windowSize.size === WINDOW_SIZES.XS) {
      return data.map((row: any[], rowIndex: number) => {
        return (
          <Grid key={`row-key-${rowIndex}`} xs={10} className={classes.TableStyledRow}>
            {row.map((cell: any, cellIndex: number) => {
              return (
                <Grid key={`cell-key-${cellIndex}`} xs={cellIndex > 0 ? 4 : 12}>
                  <StyledCell
                    key={`cell-${cellIndex}`}
                    align={headersPositions?.length ? headersPositions[cellIndex] : undefined}
                    >
                    <Typography className={classes.TableCellLabel}>{OPERATOR_CELL_LABEL_NAME[cellIndex]}</Typography>
                    {cell}
                  </StyledCell> 
                </Grid>
              );
            })}
          </Grid>
      );
      });
    }
    if (validatorListFlow && windowSize.size === WINDOW_SIZES.XS) {
      return data.map((row: any[], rowIndex: number) => {
        return (
          <Grid key={`row-key-${rowIndex}`} xs={10} className={classes.TableStyledRow}>
            {row.map((cell: any, cellIndex: number) => {
              if (cellIndex === 1) {
                return;
              }
              return (
                <Grid key={`cell-key-${cellIndex}`} xs={12}>
                  <StyledCell
                    key={`cell-${cellIndex}`}
                    align={headersPositions?.length ? headersPositions[cellIndex] : undefined}
                    >
                    <Typography className={classes.TableCellLabel}>{VALIDATOR_CELL_LABEL_NAME[cellIndex]}</Typography>
                    {cell}
                  </StyledCell>
                </Grid>
              );
            })}
          </Grid>
      );
      });
    }
    return data.map((row: any[], rowIndex: number) => (
      <StyledRow hover role="checkbox" tabIndex={-1} key={`row-${rowIndex}`}>
        {row.map((cell: any, cellIndex: number) => (
          <StyledCell
            key={`cell-${cellIndex}`}
            align={headersPositions?.length ? headersPositions[cellIndex] : undefined}
            >
            {cell}
          </StyledCell>
        ))}

      </StyledRow>
    ));
  };

  return (
    <div className={classes.tableWithBorder}>
      <TableContainer>
        {title ? <h3 style={{ paddingLeft: 15, color: '#97a5ba', fontSize: 20 }}>{title}</h3> : ''}
        {!hidePagination && perPage && perPage > defaultPerPageOptions[0] && data?.length ? (
          <TablePagination
            page={page}
            component="div"
            count={totalCount}
            colSpan={headers.length}
            ActionsComponent={PaginationActions}
            rowsPerPage={perPage ?? ApiParams.PER_PAGE}
            rowsPerPageOptions={rowsPerPageOptions ?? defaultPerPageOptions}
            onChangePage={(event: any, changedPage: number) => onChangePage ? onChangePage(changedPage + 1) : null}
            onChangeRowsPerPage={(event: any) => onChangeRowsPerPage ? onChangeRowsPerPage(event.target.value) : null}
          />
        ) : ''}
        <Table className={classes.TableWrapper} stickyHeader aria-label="sticky table">
          <TableHead className={classes.tableHeaderOffOnMobile}>
            <TableRow>
              {headers.map((header: string, headerIndex: number) => (
                <TableCell
                  style={overviewTableHeadersStyle}
                  key={header}
                  align={headersPositions?.length ? headersPositions[headerIndex] : undefined}
                >
                  {header}
                </TableCell>
                ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {dataRows()}
          </TableBody>
        </Table>
        {!hidePagination && data?.length ? (
          <TablePagination
            className={classes.tablePaginationMobileSize}
            page={page}
            component="div"
            count={totalCount}
            colSpan={headers.length}
            ActionsComponent={PaginationActions}
            rowsPerPage={perPage ?? ApiParams.PER_PAGE}
            rowsPerPageOptions={rowsPerPageOptions ?? defaultPerPageOptions}
            onChangeRowsPerPage={(event: any) => onChangeRowsPerPage ? onChangeRowsPerPage(event.target.value) : null}
            onChangePage={(event: any, changedPage: number) => onChangePage ? onChangePage(changedPage + 1) : null}
          />
        ) : ''}
      </TableContainer>
    </div>
  );
};

export default observer(DataTable);
