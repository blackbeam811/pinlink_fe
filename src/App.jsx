import './App.scss'
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Header from '../components/header';
import ScrambledText from '../components/home/scrambledText';
import Carousel3D from '../components/home/carousel3D';
// import PieChartWithGradient from '../components/home/pieChartWithGradient'


import Logo from './assets/imgs/index/logo_title.svg';
import Board2_1 from './assets/imgs/index/board2_1.svg';
import Board2_2 from './assets/imgs/index/board2_2.svg';
import Board2_3 from './assets/imgs/index/board2_3.svg';
import LeftImg from './assets/imgs/index/left.svg';
import RightImg from './assets/imgs/index/right.svg';
import Board4 from './assets/imgs/index/board4.png';
import Token from './assets/imgs/index/token.svg';
import About from './assets/imgs/index/about.png';
import Charts from './assets/imgs/index/charts.png';
import Color1 from './assets/imgs/index/color1.svg';
import Color2 from './assets/imgs/index/color2.svg';
import Color3 from './assets/imgs/index/color3.svg';



import AOS from 'aos';
import 'aos/dist/aos.css';



function App() {


  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);

  const containerRef = useRef(null);
  const horizontalSectionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const horizontalSection = horizontalSectionRef.current;
    const container = containerRef.current;
    let pinWrapWidth = horizontalSection.scrollWidth;

    // Set up horizontal scrolling in the designated section
    gsap.to(horizontalSection, {
      x: () => -(pinWrapWidth - window.innerWidth),
      ease: "none",
      scrollTrigger: {
        trigger: horizontalSection,
        start: "top top",
        end: () => "+=" + pinWrapWidth,
        scrub: true,
        pin: true,
        anticipatePin: 1,
        scroller: container, // Use this if your container is scrollable
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);


  const items = [
    <div style={{ background: 'red' }}>Item 1</div>,
    <div style={{ background: 'blue' }}>Item 2</div>,
    <div style={{ background: 'green' }}>Item 3</div>,
    <div style={{ background: 'yellow' }}>Item 4</div>
  ];

  return (
    <>
      <Header></Header>
      <div className="home">
        <div className="board1">
          <div data-aos="fade-up">
            <img src={Logo} alt='logo' />
            <p>Where DePIN and <br />RWA meet</p>
            <span>
              PinLink, the first RWA-Tokenized DePIN platform, boosts revenue by letting owners tokenize and rent out DePIN capacity, lowers costs for AI and blockchain developers, and allows 3rd parties to earn through fractional shares.
            </span>
          </div>
        </div>
        <div ref={containerRef} style={{ overflowY: 'auto', height: '100vh' }} className='board2'>
          <div ref={horizontalSectionRef} style={{ width: '170vw', display: 'flex', gap: "120px" }}>
            <div className='board2_item'>
              <div className='item_info'>
                <img src={Board2_1} alt='icon' />
                <div>
                  <h2>RWA-Tokenized Model</h2>
                  <span>The RWA-tokenized model provides new revenue streams for PinLink compared with existing DePIN marketplace models.</span>
                </div>
              </div>
            </div>
            <div className='board2_item'>
              <div className='item_info'>
                <img src={Board2_2} alt='icon' />
                <div>
                  <h2>The First Fractionalized Liquidity Layer for DePIN</h2>
                  <span>PinLink opens the door for a huge opportunity to tokenize and trade various DePIN assets.</span>
                </div>
              </div>
            </div>
            <div className='board2_item'>
              <div className='item_info'>
                <img src={Board2_3} alt='icon' />
                <div>
                  <h2>Deep Learning AI Powered Platform</h2>
                  <span>Analyzes the performance of the DePIN ecosystem, as well as tokenized GPUs, nodes, and other decentralized physical assets.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='board3'>
          <div></div>
          <ScrambledText text="THE FIRST AI DRIVEN DEPIN LIQUIDITY LAYER WITH A FRACTIONALIZED COMPUTE POWER MARKETPLACE"></ScrambledText>
        </div>
        <div className='board4'>
          <div className='title' data-aos="fade-up">
            <img className='left' src={LeftImg} alt='icon' />
            <h2>HOW DOES PINLINk WORK</h2>
            <img className='right' src={RightImg} alt='icon' />
          </div>
          <img data-aos="fade-up" data-aos-duration="2000" className='mainImg' src={Board4} alt='icon' />
        </div>
        <div className='board5'>
          <div data-aos="fade-up" className='title' style={{ "width": "600px" }}>
            <img className='left' src={LeftImg} alt='icon' />
            <h2>Key Features</h2>
            <img className='right' src={RightImg} alt='icon' />
          </div>
          <div className='keyList'>
            <div className='keysItem'>
              <div className='step'>
                <p>RWA-Tokenized DePIN Marketplace</p>
                <span>At the heart of PinLink’s innovation lies our DePIN RWA-Tokenization model. The RWA-Tokenized model reduces costs for DePIN service users, creates more flexible monetization options for DePIN asset owners, and offers opportunities for individuals who do not own DePIN assets to earn a passive income stream.</span>
              </div>
              <div></div>
            </div>
            <div className='keysItem'>
              <div className='step'>
                <p>Fractionalization & ERC1155 Tokens</p>
                <span>
                  By selling fractions of their NFTs, DePIN asset owners can unlock the capital needed to purchase new assets from which they can generate additional rental income, thus creating an asset accumulation flywheel.
                  <br />
                  By purchasing fractions of NFTs, individuals who do not own DePIN assets gain access to a share of the revenue from these assets.
                </span>

              </div>
              <div></div>
            </div>
            <div className='keysItem'>
              <div className='step'>
                <p>Service User Rebate Model</p>
                <span>Developers can acquire customized, low-latency, highly reliable, scalable compute power on PinLink not only effectively but also cost-efficiently, thanks to PinLink Service User Rebate Model. In this Model, NFT sales generate upfront capital payments, which are then invested in generative, yield-bearing activities. These activities create new revenue sources for PinLink ecosystem and offer rebates to end users to lower their cost burden.</span>
              </div>
              <div></div>
            </div>
          </div>
        </div>
        <div className='board6'>
          <div data-aos="fade-up" className='title' style={{ "width": "600px" }}>
            <img className='left' src={LeftImg} alt='icon' />
            <h2>Use Cases</h2>
            <img className='right' src={RightImg} alt='icon' />
          </div>
          <p data-aos="fade-up" data-aos-duration="1000" className='info'>By bringing RWA-tokenization dynamics to the DePIN sector, PinLink achieves several key benefits</p>
          <div className='casesMain'>
            <Carousel3D items={items} />
          </div>
        </div>
        <div className='board7'>
          <div data-aos="fade-up" className='title' style={{ "width": "600px" }}>
            <img className='left' src={LeftImg} alt='icon' />
            <h2>Tokenomics</h2>
            <img className='right' src={RightImg} alt='icon' />
          </div>
          <div className='tokenomics'>
            <div className='left'>
              {/* <PieChartWithGradient></PieChartWithGradient> */}
              <div className='charts'>
                <img src={Charts} alt='icon' />
              </div>
              <div className='info'>
                <div><img src={Color1} alt='icon' />Uniswap Pool: 70%</div>
                <div><img src={Color2} alt='icon' />Staking Emissions: 20%</div>
                <div><img src={Color3} alt='icon' />reasury: 10%</div>
              </div>
            </div>
            <div className='right'>
              <div className='main'>
                <div className='tokenBg'>
                  <p>PINKLink</p>
                  <p>$Pin Token</p>
                </div>
                <img src={Token} alt='icon' />
              </div>
              <div className='info'>
                <div><p>1</p>Ticker: $PIN</div>
                <div><p>2</p>Supply: 100,000,000</div>
                <div><p>3</p>Network: ERC20</div>
              </div>
            </div>
          </div>
          <div className='about'>
            <div className='left'>
              <p>Learn More About How PinLink Combines and Unleashes the Full Potential of RWA & DePIN.</p>
              <a href='' className='button green'> Read Docs</a>
            </div>
            <div>
              <img src={About} alt='icon' />
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default App