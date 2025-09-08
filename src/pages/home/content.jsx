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
              {language === 'en' ? 'Wisdom-Link Precision Greatness' : '算海深澜'}
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
                  算海深澜是一款基于国产GPU的大模型训练工具，致力于提升大模型训练的效率与性能，推动国产GPU技术在人工智能领域的广泛应
                  用。通过打造高效、稳定、自主可控的训练工具，助力中国在AI技术领域实现核心突破，赋能千行百业的智能化升级。
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
