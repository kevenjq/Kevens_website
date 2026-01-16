import Navbar from "../components/NavBar/Navbar";
import styled from "styled-components";
import ContactList from "../components/ContactList/ContactList";

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const IntroCard = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: center;
  width: 80rem;
  max-width: 95vw;
  padding: 5px 10px 5px 10px;
  gap: 5rem;
  margin-bottom: 0rem;
`;

const AboutCard = styled(IntroCard)`
  justify-content: start;
`;

const PageCards = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
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
  animation: TextChanger 10s infinite;

  @keyframes TextChanger {
    10% {
      transform: translateY(-100%);
    }
    
    25% {
      transform: translateY(-200%);
    }

    50% {
      transform: translateY(-300%);
    }

    75% {
      transform: translateY(-400%);
    }
    
    100% {
      transform: translateY(-500%);
    }

`;

const HomePage = () => {
  return (
    <PageContainer>
      <Navbar />
      <ContactList />
      <PageCards>
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
        <IntroCard>
          <h1 className="">
            Hola,
            <br /> Welcome to my space!
          </h1>
          <span className="text-end">
            <p>2005 Ecuadorian</p>
          </span>
        </IntroCard>
        <IntroCard>
          <h1 className="">
            Hola,
            <br /> Welcome to my space!
          </h1>
          <span className="text-end">
            <p>2005 Ecuadorian</p>
          </span>
        </IntroCard>
      </PageCards>
    </PageContainer>
  );
};

export default HomePage;
