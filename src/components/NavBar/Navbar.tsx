import DndController from "../DndController/DndController";
import { useEffect, useState } from "react";
import { DragDropContext, DropResult } from "@hello-pangea/dnd";
import { sortDnd } from "../../../shared/sortDND/sortDnd";
import { gsap } from "gsap";

import LOGO from "../../assets/keven_logo.svg";
import styled from "styled-components";

type ThemeItem = {
  id: string;
  label: string;
  themeKey: "animal-theme" | "medieval-theme" | "futuro-theme";
};

//background-color: var(--bg-light);
const NavbarContainer = styled.div`
  position: fixed;
  top: 15px;
  z-index: 9999;
  display: flex;
  width: 100vw;
  height: 75px;
  justify-content: space-between;
  padding: 0 5px 0 20px;
`;

const Nav = styled.nav`
  width: 95vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(9.5px);
  -webkit-backdrop-filter: blur(9.5px);
  outline: 1px solid rgba(255, 255, 255, 0.52);

  &:hover {
    outline: 1px solid var(--outline);
  }
`;

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [items, setItems] = useState<ThemeItem[]>([
    { id: "1", label: "idk", themeKey: "animal-theme" },
    { id: "2", label: "Medieval", themeKey: "medieval-theme" },
    { id: "3", label: "Futuro", themeKey: "futuro-theme" },
  ]);

  const [currentTheme, setCurrentTheme] = useState(items[0].themeKey);
  const [animating, setAnimation] = useState(false);

  const playThemeTransition = (onMidway: () => void) => {
    if (animating) return;
    setAnimation(true);

    const overlay = document.getElementById("theme-svg-container");
    if (!overlay) return;

    const tl = gsap.timeline({
      onComplete: () => setAnimation(false),
    });

    // 1. Ensure it starts at the bottom
    tl.set(overlay, { y: "100%" });

    // 2. Slide UP to cover screen
    tl.to(overlay, {
      y: "0%",
      scale: 1,
      duration: 1,
      ease: "power2.inOut",
    });

    // 3. Change the theme while screen is covered
    tl.call(onMidway);

    // 4. Brief pause to ensure theme color registers
    tl.to({}, { duration: 0.1 });

    // 5. Slide UP and OUT (exit through the top)
    tl.to(overlay, {
      y: "-100%",
      duration: 0.8,
      ease: "power2.inOut",
    });

    // 6. Reset position for next time (instantly)
    tl.set(overlay, { y: "100%" });
  };

  // main useEffect for all transitions
  useEffect(() => {
    const activeTheme = items[0]?.themeKey;
    if (!activeTheme) return;

    if (activeTheme !== currentTheme) {
      playThemeTransition(() => {
        document.body.classList.remove(
          "animal-theme",
          "medieval-theme",
          "futuro-theme"
        );
        document.body.classList.add(activeTheme);
        setCurrentTheme(activeTheme);
      });
    }
  }, [items, currentTheme]);

  // run on enter web
  useEffect(() => {
    const activeTheme = items[0]?.themeKey;
    if (!activeTheme) return;

    if (activeTheme) {
      playThemeTransition(() => {
        document.body.classList.remove(
          "animal-theme",
          "medieval-theme",
          "futuro-theme"
        );
        document.body.classList.add(activeTheme);
        setCurrentTheme(activeTheme);
      });
    }
  }, []);

  // Controller components
  const OpenController = () => (
    <svg
      onClick={() => setVisible(true)}
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      fill="currentColor"
      className="bi bi-chevron-bar-left"
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M11.854 3.646a.5.5 0 0 1 0 .708L8.207 8l3.647 3.646a.5.5 0 0 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 0 1 .708 0M4.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 1 0v-13a.5.5 0 0 0-.5-.5"
      />
    </svg>
  );

  const CloseController = () => (
    <svg
      onClick={() => setVisible(false)}
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      fill="currentColor"
      className="bi bi-chevron-bar-right"
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M4.146 3.646a.5.5 0 0 0 0 .708L7.793 8l-3.647 3.646a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708 0M11.5 1a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-1 0v-13a.5.5 0 0 1 .5-.5"
      />
    </svg>
  );
  // --- ---

  const indexSort = (result: DropResult) => {
    const { source, destination } = result;
    if (!destination) return;
    setItems((prev) => sortDnd(prev, source.index, destination.index));
  };

  return (
    <>
      <NavbarContainer>
        <Nav>
          <div className="px-2 w-fit h-fit flex justify-center items-center">
            <img src={LOGO} className="mx-5 w-[99px] hover:-rotate-10" />
          </div>
          <a
            href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=kevenjq07@gmail.com"
            target="_blank"
          >
            <div className="relative mr-5 text-center px-4 pt-1 ">
              <ul>
                <li>{chatsvg()}</li>
              </ul>
            </div>
          </a>
        </Nav>
        <div className="flex items-center justify-end">
          {visible ? <CloseController /> : <OpenController />}

          <DragDropContext onDragEnd={indexSort}>
            <div className="border-2 h-13 rounded-b-2xl bg-white/10 backdrop-blur-sm">
              <DndController visible={visible} items={items} />
            </div>
          </DragDropContext>
        </div>
      </NavbarContainer>
    </>
  );
};

export default Navbar;

function chatsvg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="35"
      height="35"
      fill="currentColor"
      className="bi bi-envelope-at"
      viewBox="0 0 16 16"
    >
      <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2zm3.708 6.208L1 11.105V5.383zM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2z" />
      <path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648m-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z" />
    </svg>
  );
}
