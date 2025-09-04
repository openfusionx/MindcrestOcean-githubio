import React from 'react'
import useIsBrowser from '@docusaurus/useIsBrowser'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import config from './languages.json'

export default function () {
  const { i18n } = useDocusaurusContext();
  const currentLocale = i18n && i18n.currentLocale;
  const language = currentLocale === 'en' ? 'en' : 'zh-Hans'
  const dataSource = config?.[language];

  return (
    <div className="section bg-light pt-5 overflow-hidden" style={{position: 'relative', minHeight: '635px'}}>
      {/* 背景图片 */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '635px',
        zIndex: -1
      }}>
        <div 
          style={{
            width: '100%', 
            height: '100%', 
            backgroundImage: 'url(img/content_bg.png)',
            backgroundSize: 'contain',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            backgroundColor: '#3E56C3',
            position: 'absolute',
            top: 0,
            left: 0
          }} 
        />
      </div>
      
      {/* 左右布局内容 */}
      <div className="container">
        <div className="row align-items-center" style={{minHeight: '500px'}}>
          {/* 左侧文字 */}
          <div className="col-md-6 text-center text-md-start">
            <h1 style={{
              color: '#FFF',
              fontFamily: '"PingFang HK"',
              fontSize: '52px',
              fontStyle: 'normal',
              fontWeight: 600,
              lineHeight: '60px',
              marginBottom: '32px'
            }}>
              {language === 'en' ? 'Wisdom-Link Precision Greatness' : '智连精伟'}
            </h1>
            <p style={{
              color: '#FFF',
              fontFamily: '"PingFang HK"',
              fontSize: '20px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: '32px',
              letterSpacing: '2px',
              marginBottom: '2rem',
              textAlign: language === 'en' ? 'justify' : undefined
            }}>
              {language === 'en' ? (
                'The new-generation cloud-native big data manager is committed to helping users quickly build a stable, efficient, and elastically scalable big data cloud-native platform'
              ) : (
                <>
                  新一代云原生大数据管家，致力于帮助用<br />
                  户快速构建起稳定、高效、可弹性伸缩的<br />
                  大数据云原生平台
                </>
              )}
            </p>
            
            {/* 两个盒子 */}
            <div style={{
              display: 'flex',
              gap: '16px',
              marginTop: '40px',
              marginBottom: '32px'
            }}>
              <div style={{
                width: '120px',
                height: '36px',
                flexShrink: 0,
                background: '#000',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer'
              }}>
                <span style={{
                  color: '#FFF',
                  fontFamily: 'Avenir',
                  fontSize: '14px',
                  fontStyle: 'normal',
                  fontWeight: 500,
                  lineHeight: '24px'
                }}>
                  GITHUB
                </span>
              </div>
              <div style={{
                width: '120px',
                height: '36px',
                flexShrink: 0,
                background: '#000',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer'
              }}>
                <span style={{
                  color: '#FFF',
                  fontFamily: 'Avenir',
                  fontSize: '14px',
                  fontStyle: 'normal',
                  fontWeight: 500,
                  lineHeight: '24px'
                }}>
                  GET STARTED
                </span>
              </div>
            </div>
            
            {/* NEXUS FABRIC 文字 */}
            <div style={{
              position: 'relative',
              zIndex: -1
            }}>
              <span style={{
                color: '#FFF',
                fontFamily: 'Avenir',
                fontSize: '60px',
                fontStyle: 'normal',
                fontWeight: 900,
                lineHeight: '60px',
                opacity: 0.1
              }}>
                NEXUS FABRIC
              </span>
            </div>
          </div>
          
          {/* 居中定位的图片（不改变图片本身大小） */}
          <div className="col-md-6 text-center" style={{ position: 'absolute', bottom: 0, left: '44%', transform: 'translateX(-50px)', zIndex: 0 }}>
            <div>
              <img
                src="img/computer.png"
                alt="Computer"
                style={{
                  width: '907px',
                  height: '430px'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
