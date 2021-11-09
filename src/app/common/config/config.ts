const config = {
    routes: {
        HOME: '/',
        OPERATORS: {
            HOME: '/operators',
            OPERATOR: '/operators/:address?',
        },
        VALIDATORS: {
            HOME: '/validators',
            VALIDATOR: '/validators/:address',
        },
    },
    FEATURE: {
        NETWORK: {
            NAME: process.env.REACT_APP_NETWORK,
        },
    },
    links: {
        API_BASE_URL: String(process.env.REACT_APP_API_BASE_URL),
        LINK_SSV_WEBAPP: String(process.env.REACT_APP_LINK_SSV_WEBAPP),
    },
};

export default config;
