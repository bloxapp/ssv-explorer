import React from 'react';
import Grid from '@material-ui/core/Grid';
import { useStylesOperator } from '~app/components/Operator/Operator.styles';

const socialNetworks = [
  {
    name: 'website_url',
    image: '/images/web_icon.png',
  },
  {
    name: 'twitter_url',
    image: '/images/twitter_icon.png',
  },
  {
    name: 'linkedin_url',
    image: '/images/linkedin_icon.png',
  },
];

type OperatorProps = {
  operator: any,
  // eslint-disable-next-line react/no-unused-prop-types
  params?: any,
  // eslint-disable-next-line react/no-unused-prop-types
  isLoading?: boolean,
};

export default (props: OperatorProps) => {
  const { operator } = props;
  const operatorClasses = useStylesOperator();

  const openInTab = (url: string) => {
    if (url.indexOf('http://') === -1 || url.indexOf('https://') === -1) {
      // eslint-disable-next-line no-param-reassign
      url = `https://${url}`;
    }
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const networks = socialNetworks.filter((network: any) => {
    return operator[network.name];
  });

  if (!networks?.length) {
    return <></>;
  }

  return (
    <Grid item className={operatorClasses.OperatorsSocialNetworks}>
      {networks.map((socialNetwork, index) => {
        const operatorSocialNetwork = operator[socialNetwork.name];
        return (
          operatorSocialNetwork ? (
            <div
              tabIndex={0}
              role="button"
              onKeyDown={() => {
                openInTab(operator[socialNetwork.name]);
              }}
              onClick={() => {
                openInTab(operator[socialNetwork.name]);
              }}
              className={operatorClasses.SocialNetwork} key={index}
            >
              <img className={operatorClasses.SocialNetworkImage} src={socialNetwork.image} />
            </div>
          ) : ''
        );
      })}
    </Grid>
  );
};
