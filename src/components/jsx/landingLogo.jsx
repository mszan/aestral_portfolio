import React from 'react';

export const LandingLogo = () => {
    let imgLogoSource = process.env.PUBLIC_URL + '/img/logos/aestral_logo_slim.png';
    return (
        <div>
            <img width="100%" src={imgLogoSource} alt=""/>
        </div>
    );
};