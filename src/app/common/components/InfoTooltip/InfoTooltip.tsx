import React, { useState } from 'react';
import { Tooltip } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';

const InfoTooltip = ({ message, style }: { message: any, style?: any }) => {
    const [showTooltip, setShowTooltip] = useState(false);

    const handleMouseEnter = () => {
        setShowTooltip(true);
    };

    const handleMouseLeave = () => {
        setShowTooltip(false);
    };

    return (
      <Tooltip open={showTooltip} title={message}>
        <InfoIcon onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{ ...(style ?? {}), marginLeft: 5, fontSize: 14 }} />
      </Tooltip>
    );
};

export default InfoTooltip;
