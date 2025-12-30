import Navbar from "../components/NavBar/Navbar";
import styled from "styled-components";
import ContactList from "../components/ContactList/ContactList";

const IntroCard = styled.div`
  margin-top: 125px;
  margin-left: 60px;

  max-width: 75%;
  min-width: 20%;
  padding: 5px 10px 5px 10px;
`;

const HomePage = () => {
  return (
    <div className="relative flex-col">
      <Navbar />
      {/* Fixed Contact list
          Fix: cv to be pdf file instead of Canva link
      */}
      <ContactList />

      <IntroCard>
        <h1 className="">
          Hola,
          <br /> Welcome to my space!
        </h1>
        <span className="text-end">
          <p>2005 Ecuadorian</p>
        </span>
      </IntroCard>
    </div>
  );
};

export default HomePage;
