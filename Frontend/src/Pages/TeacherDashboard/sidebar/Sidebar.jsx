import styled from "styled-components";
import SubMenu from "./SubMenu";
import { SidebarData } from "./SidebarData";
import { IconContext } from "react-icons/lib";
import SidebarHeader from "./SidebarHeader";

const SidebarWrap = styled.div`
  width: 100%;
`;

const SidebarNav = styled.nav`
  background: #007bff;
  width: 300px;
  display: flex;
  height: 100vh;
  justify-content: center;
  overflow: scroll;
  scrollbar-width: none;
`;

const Sidebar = () => {
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <SidebarNav>
          <SidebarWrap>
            <SidebarHeader
              name="Kwaku Manu"
              email="dealrega@yahoo.com"
              profilePicture="https://picsum.photos/seed/picsum/200/300"
            />

            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
