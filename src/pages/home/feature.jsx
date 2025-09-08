import React from 'react'
import useIsBrowser from '@docusaurus/useIsBrowser'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import config from './languages.json'

export default function () {
  const { i18n } = useDocusaurusContext();
  const currentLocale = i18n && i18n.currentLocale;
  const language = currentLocale === 'en' ? 'en' : 'zh-Hans'
  console.log('language', language)
  const isEnglish = language === 'en'
  const dataSource = config?.[language];
  return (
    <div className="section bg-light" style={{paddingTop: '24px'}}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 text-center">
            <div>
              <h2 className="h2 fw-bold">{dataSource.common.coreFeatures}</h2>
              <p className="lead text-muted">{dataSource.common.coreFeaturesDesc}</p>
            </div>
          </div>
          {
            dataSource.feature.map((feature, i) => (
              <div
                className="col-auto cursor-pointer"
                key={i}
                data-aos="fade-up"
                data-aos-delay={(i % 3) * 100}
                style={{ 
                  marginRight: i < 2 ? '10px' : 0,
                  marginTop: '50px',
                  marginBottom: '50px'
                }}
              >
                <div 
                  className="feature-children rounded-3 shadow-sm hover-box-up"
                  style={{
                    width: '300px',
                    height: '290px',
                    margin: '0 auto',
                    backgroundColor: '#3E56C3',
                    padding: '36px 36px 22px 36px',
                    textAlign: 'left'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
                    <div style={{
                      width: '12px',
                      height: '5px',
                      flexShrink: 0,
                      background: '#5CF9C0',
                      marginRight: '12px'
                    }}></div>
                    <h3 className="h5" style={{ color: '#FFF', fontSize: '20px', fontWeight: 600, margin: 0 }}>{feature.title}</h3>
                  </div>
                  <p style={{
                    color: '#FFF',
                    fontSize: isEnglish ? '14px' : undefined,
                    lineHeight: isEnglish ? '1.6' : undefined,
                    textAlign: isEnglish ? 'justify' : undefined,
                    textJustify: isEnglish ? 'inter-word' : undefined,
                    wordBreak: isEnglish ? 'break-word' : undefined
                  }}>{feature.details}</p>
                  <div style={{
                    position: 'absolute',
                    bottom: '22px',
                    left: '48px',
                    color: '#FFF',
                    fontFamily: 'Avenir',
                    fontSize: '20px',
                    fontStyle: 'normal',
                    fontWeight: 900,
                    lineHeight: '24px',
                    opacity: 0.1
                  }}>
                    NEXUS FABRIC
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}
