import { Header } from "../../components/Header";
import Logo from "../../assets/logo.svg";
import { ProfileSection } from "../../components/ProfileSection";
import { TechSection } from "../../components/TechSection";
import { StyledHr } from "./style";
import { useUserContext } from "../../providers/UserProvider";
import { useEffect } from "react";
import { useTechContext } from "../../providers/TechProvider";
import { useState } from "react";
import { AddModal } from "../../components/AddModal";
import { InspectModal } from "../../components/InspectModal";

export const Home = () => {
  const { setUser, user, handleLogout } = useUserContext();
  const { getTechs } = useTechContext();
  const [userReady, setUserReady] = useState(false);

  useEffect(() => {
    if (user.length === undefined) {
      setUser(JSON.parse(localStorage.getItem("@KenzieHub:user")));
      setUserReady(true);
    }
  }, []);

  useEffect(() => {
    if (userReady) {
      getTechs();
    }
  }, [userReady]);

  return (
    <>
      <AddModal />
      <InspectModal />
      <Header
        maxWidth={775}
        padding={1}
        paddingmobile={0.75}
        justify="space-between"
        onClick={handleLogout}
        btheight="sm"
        btstyle="link"
        backgroundcolor="var(--color-grey-3)"
        hoverbackgroundcolor="var(--color-grey-2)"
        text="Sair"
        src={Logo}
        alt="Logo escrito Kenzie Hub"
        height="1.3125rem"
        width="7.625rem"
        mobileheight="1.0625rem"
        mobilewidth="6.0625rem"
      />
      <StyledHr />
      <ProfileSection
        maxWidth={775}
        padding={1}
        paddingmobile={0.75}
        username={user.name}
        course={user.course_module}
      />
      <StyledHr />
      <TechSection maxWidth={775} padding={1} paddingmobile={0.75} />
    </>
  );
};
