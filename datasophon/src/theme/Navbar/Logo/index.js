import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function NavbarLogo() {
  const homeUrl = useBaseUrl('/', { forceLocale: true });
  const brandUrl = useBaseUrl('/img/brand.png');
  const brandTextUrl = useBaseUrl('/img/brand_text.png');

  return (
    <Link to={homeUrl} style={{ textDecoration: 'none' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img
          src={brandUrl}
          alt="Brand Logo"
          style={{ width: '70px', height: 'auto', objectFit: 'contain' }}
        />
        <img
          src={brandTextUrl}
          alt="Brand Text Logo"
          style={{ width: '113px', height: '16px', marginLeft: '18px', marginRight: '46px' }}
        />
      </div>
    </Link>
  );
}
