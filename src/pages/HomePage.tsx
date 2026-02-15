import { useRef } from "react";
import styled, { keyframes } from "styled-components";
import { motion, useScroll, useTransform } from "framer-motion";

// Components
import Navbar from "../components/NavBar/Navbar";
import ContactList from "../components/ContactList/ContactList";
import scrollerData from "../shared/json/scollerData.json";


const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const wave = keyframes`
  0% { transform: rotate(0deg); }
  10% { transform: rotate(14deg); } 
  20% { transform: rotate(-8deg); }
  30% { transform: rotate(14deg); }
  40% { transform: rotate(-4deg); }
  50% { transform: rotate(10deg); }
  60% { transform: rotate(0deg); } 
  100% { transform: rotate(0deg); }
`;

const textCycle = keyframes`
  0% { transform: translateY(0%); }
  20% { transform: translateY(-17%); }
  40%{ transform: translateY(-35%); }
  60% { transform: translateY(-50%); }
  80% { transform: translateY(-64%); }
  100% { transform: translateY(-83%); }
`;


const PageContainer = styled.div`
  background-color: var(--bg);
  color: var(--text-main);
  min-height: 100vh;
`;

const ContentWrapper = styled.div`
  padding-top: 6rem;
  padding-bottom: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
`;

const IntroSection = styled.section`
  min-height: 85vh;
  width: 90%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
`;

const TextRotatorContainer = styled.div`
  height: clamp(3rem, 6vw, 5rem);
  overflow: hidden;
  margin-bottom: 1rem;
`;

const RollingText = styled.div`
  animation: ${textCycle} 10s cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite;
  h2 {
    font-family: var(--font-title);
    font-size: clamp(3rem, 6vw, 5rem);
    line-height: 1;
    color: var(--text-changer);
    opacity: 0.7;
    margin: 0;
  }
`;

const MainTitle = styled.h1`
  font-size: var(--h1-font);
  color: var(--text-title);
  line-height: 1.1;
  margin-bottom: 2rem;
`;

const BioBox = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 2px solid var(--outline);
  padding-top: 2rem;
  gap: 2rem;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
  }
  p {
    font-size: clamp(1rem, 2vw, 1.2rem);
    max-width: 600px;
    color: var(--text-p);
    line-height: 1.6;
  }
  .details {
    text-align: left;
    @media (min-width: 768px) {
      text-align: right;
    }
    h3 {
      font-family: var(--font-title);
      font-size: 1.5rem;
      color: var(--text-title);
    }
  }
`;

const HorizontalScrollSection = styled.section`
  height: 400vh;
  width: 100%;
  position: relative;
`;

const StickyFrame = styled.div`
  position: sticky;
  top: 0;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: start;
  overflow: hidden;
  background-color: var(--bg-light);
`;

const ScrollTrack = styled(motion.div)`
  display: flex;
  gap: 4rem;
  padding-left: 25vw;
  width: max-content;
`;

const InfoCard = styled.div`
  width: 70vw;
  max-width: 700px;
  height: 60vh;
  background: var(--bg-dark);
  border: 2px solid var(--outline);
  border-radius: var(--rounded);
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  user-select: none;

  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.17);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }

  h2 {
    font-size: clamp(2rem, 3vw, 3rem);
    font-family: var(--font-title);
    color: var(--outline);
  }

  h3 {
    font-size: 1rem;
    color: var(--text-muted);
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 1rem;
  }

  p {
    font-size: --p-font;
    color: var(--text-changer);
    line-height: 1.6;

    strong {
      color: var(--button);
    }
  }
`;

const Section = styled.section`
  width: 90%;
  max-width: 1000px;
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BlogCard = styled.div`
  border: 2px dashed var(--outline);
  border-radius: var(--rounded);
  padding: 4rem;
  text-align: center;
  width: 100%;
  background: var(--bg-dark);
  animation: ${float} 3s ease-in-out infinite;
  h1 {
    font-size: clamp(2rem, 5vw, 4rem);
    span {
      color: var(--hov-button);
    }
  }
`;

const Footer = styled.footer`
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-bottom: 5rem;
  .wave-hand {
    font-size: 5rem;
    display: inline-block;
    animation: ${wave} 2.5s infinite;
    transform-origin: 70% 70%;
    margin-bottom: 1rem;
  }
  h2 {
    font-size: clamp(2rem, 4vw, 3rem);
    margin-bottom: 2rem;
  }
  a {
    font-family: var(--font-main);
    font-size: clamp(1rem, 3vw, 1.5rem);
    color: var(--text-muted);
    text-decoration: none;
    padding: 1rem 2rem;
    border: 1px solid var(--button);
    border-radius: var(--rounded);
    transition: all 0.3s ease;
    &:hover {
      background: var(--button);
      color: var(--button-color);
    }
  }
`;

const HomePage = () => {
  const targetRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-85%"]);

  return (
    <PageContainer>
      <Navbar />
      <ContactList />

      <ContentWrapper>
        <IntroSection>
          <TextRotatorContainer>
            <RollingText>
              {["Hola", "Hello", "Merhaba", "Bon Jour", "Hallo", "Ni Hao"].map(
                (txt, i) => (
                  <h2 key={i}>{txt}</h2>
                )
              )}
            </RollingText>
          </TextRotatorContainer>

          <MainTitle>Welcome to Keven's Tech Space</MainTitle>

          <BioBox>
            <div>
              <p>
                My name is <strong>Keven Quevedo</strong>. Full-stack
                development intern at <strong>Juvigo</strong>.
                <br />
                <br />
                Currently based in <strong>Berlin</strong>, I blend creativity
                and modern design together.
              </p>
            </div>
            <div className="details">
              <h3>20 Years Old</h3>
              <h3>Ecuadorian</h3>
            </div>
          </BioBox>
        </IntroSection>
        <HorizontalScrollSection ref={targetRef}>
          <StickyFrame>
            <ScrollTrack style={{ x }}>
              {/* Mapping JSON Data */}
              {scrollerData.cards.map(
                (
                  card,
                  index // make to item
                ) => (
                  // once wokring
                  <InfoCard key={index}>
                    <div>
                      <h2>{card.content["main-title"]}</h2>
                      {card.content["second-title"] && (
                        <h3>{card.content["second-title"]}</h3>
                      )}
                    </div>
                    <p
                      dangerouslySetInnerHTML={{ __html: card.content.text }}
                    />
                  </InfoCard>
                )
              )}
            </ScrollTrack>
          </StickyFrame>
        </HorizontalScrollSection>

        <Section>
          <BlogCard>
            <h1>
              Writing a Blog <br />
              <span>SOON</span>
            </h1>
            <p>A space to document my learning curve in Tech.</p>
          </BlogCard>
        </Section>
        {/* change hand yes or yes */}
        <Footer> 
          <span className="wave-hand">👋</span>
          <h2>Thank you for visiting!</h2>
          <p style={{ marginBottom: "2rem", maxWidth: "400px" }}>
            Check out the different themes in the Navbar before you go.
          </p>
          <a href="mailto:Kevenjq07@gmail.com" target="_blank">Let's Connect</a>
        </Footer>
      </ContentWrapper>
    </PageContainer>
  );
};

export default HomePage;
