import Navbar from "../components/NavBar/Navbar";
import styled from "styled-components";
import ContactList from "../components/ContactList/ContactList";
import { useEffect } from "react";

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const PageCards = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 7.5rem;
  width: 100dvw;
  height: calc(100vh - 105px);

  overflow-x: hidden;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;

  > div {
    scroll-snap-align: center;
    scroll-snap-stop: always;
    aspect-ratio: 2/1;
  }
`;

const IntroCard = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: start;
  width: 80rem;
  padding: 0 2rem 1rem 2rem;
  gap: 5rem;
  margin-bottom: 2rem;
`;

const AboutCard = styled(IntroCard)`
  padding: 1rem 2rem 1rem 2rem;
`;

const ExperienceCard = styled(IntroCard)``;

const BlogUpComing = styled(IntroCard)``;

const FooterCard = styled(IntroCard)`
  > div > h1 {
    font-size: 2rem;
  }
  flex-direction: row;
  padding: 5rem;
`;

const TextChanger = styled.div`
  display: flex;
  flex-direction: column-reverse;
  height: fit-content;
`;

const EndText = styled.h1`
  font-size: var(--h1-font);
`;

const RolesContainers = styled.div`
  height: calc(var(--h1-font) + 1rem);
  overflow: hidden;
  position: relative;
`;

const ItemText = styled.h1`
  font-size: var(--h1-font);
  display: block;
  height: 100%;
  color: var(--text-changer);
  animation: TextChanger 11s infinite;

  @keyframes TextChanger {
    10% {
      transform: translateY(-100%);
    }
    
    20% {
      transform: translateY(-200%);
    }

    60% {
      transform: translateY(-300%);
    }

    80% {
      transform: translateY(-400%);
    }
    
    100% {
      transform: translateY(-500%);
    }

`;

const HomePage = () => {
  // ::selection get rid of it if user lets go.
  useEffect(() => {
    const clear = () => window.getSelection()?.removeAllRanges();

    document.addEventListener("mouseup", clear);
    document.addEventListener("touchend", clear);

    return () => {
      document.removeEventListener("mouseup", clear);
      document.removeEventListener("touchend", clear);
    };
  }, []);
  return (
    <PageContainer>
      {/*Nav Bar Component*/}
      <Navbar />

      {/*Contact List Component*/}
      <ContactList />

      {/*Homepage each Card are sections*/}
      <PageCards>
        {/*First Card - Welcome page*/}
        <IntroCard>
          <TextChanger>
            <EndText>Welcome to my space!</EndText>
            <RolesContainers>
              <ItemText>Hola</ItemText>
              <ItemText>Hello</ItemText>
              <ItemText>Merhaba</ItemText>
              <ItemText>Bon Jour</ItemText>
              <ItemText>Hallo</ItemText>
              <ItemText>Ni Hao</ItemText>
            </RolesContainers>
          </TextChanger>
          <div className="text-end flex justify-between items-center">
            <div className="text-left">
              <span className="">
                <h2>Software Engineer</h2>
                <p>My name is Keven Quevedo, currently based in Berlin</p>
              </span>

              <button className="button mt-5">Learn more</button>
            </div>
            <p>
              Ecuadorian,
              <br />
              2005
            </p>
          </div>
        </IntroCard>

        {/*Second Card - Small description page*/}
        <AboutCard>
          <h1 className="text-[4rem]">Creative Coder</h1>
          <span className="text-start block ml-14 text-[1.3rem]">
            <p>
              My hope is that when people look at my code it doesn't feel
              generic.
              <br />
              Instead, inspire creative responsive design. I am really diving
              deep into Website Development, focusing on clean coding and
              responsiveness. <br />
              <span className="block mt-10">
                My next step - Application Development for Mobiles first.
              </span>
            </p>
          </span>
        </AboutCard>

        {/*Third Card - undefined still*/}
        <ExperienceCard>
          <h1 className="">
            Hola,
            <br /> Welcome to my space!
          </h1>
          <span className="text-end">
            <p>2005 Ecuadorian</p>
          </span>
        </ExperienceCard>

        {/*Four Card - Access to Blog upcoming*/}
        <BlogUpComing>
          <div className="flex flex-col w-[60rem] border-2 p-[1rem]">
            <div>
              <h1 className="text-[2rem]">
                Working on a Blog Project <span>SOON</span>
              </h1>
              <p>I will be updating new ideas that I am learning and using.</p>
            </div>
            <div></div>
          </div>
        </BlogUpComing>

        {/*Five Card - Footer / Get in touch page*/}
        <FooterCard>
          <div className="border-2">
            <h1>Thank you for Checking out me Website!</h1>
            <h2>Lets get in touch - my Email</h2>
            <h3>Kevenjq07@gmail.com</h3>
          </div>
          <div className="border-2">
            {/*
          Here I could maybe add a animation of some sort
          - plane
          - train
          - - depending on theme maybe too

          */}
            <h1>upcoming animation..</h1>
          </div>
        </FooterCard>
      </PageCards>
    </PageContainer>
  );
};

export default HomePage;
