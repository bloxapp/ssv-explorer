import React from 'react';
import Grid from '@material-ui/core/Grid';
import ShowMoreText from '~app/common/components/ShowMoreText';
import { useStylesOperator } from '~app/components/Operator/Operator.styles';
import { OperatorProps } from '~app/components/Operator/components/OperatorProps';

export default (props: OperatorProps) => {
  const { operator } = props;
  const operatorClasses = useStylesOperator();

  if (!operator?.description) {
    return <></>;
  }

  return (
    <Grid item className={operatorClasses.OperatorsDescription}>
      <ShowMoreText text={operator.description} />
    </Grid>
  );
};
