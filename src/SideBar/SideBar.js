import React from "react";
import { Link } from "react-router-dom";
// import TransitionsModal from "../ModalComponents/Modal";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SideBtnWrap,
  SidebarRoute,
  SidebarLink,
  SidebarWrapper,
  SidebarMenu,
} from "./SideBarElement";

const SideBar = ({ isOpen, toggle }) => {
  return (
    <>
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <Link >
              <SidebarLink onClick={toggle}>HOME</SidebarLink>
            </Link>
            <Link>
              <SidebarLink onClick={toggle}>BIOGRAPHY</SidebarLink>
            </Link>
            <Link>
              <SidebarLink onClick={toggle}>WORKS</SidebarLink>
            </Link>
            <Link >
              <SidebarLink onClick={toggle}>ACHIEVEMENTS</SidebarLink>
            </Link>
          </SidebarMenu>
          <SideBtnWrap></SideBtnWrap>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  );
};
export default SideBar;
