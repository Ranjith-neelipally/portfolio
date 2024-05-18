import styled from "styled-components";

export const TopNavigation = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 14px 8px;
  border-radius: 40px;

  .right-section {
    display: flex;
    align-items: center;
    flex: 1;
    gap: 12px;

    .avatar {
      border-radius: 50%;
      padding: 12px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: lightgreen;
      color: black;
      font-size: 20px;
      font-weight: 800;
    }
    .nav-item {
      text-decoration: none;
    }

    .nav-item:focus-visible {
      color: black;
      transform: scale(1.1);
      border: 1px solid gray;
      outline: none;
    }

    .name {
      font-weight: 600;
      font-size: 16px;
      cursor: pointer;
      padding: 16px 0;
      transition: color 0.3s ease;
    }

    .name:hover {
      span {
        display: none;
      }
    }

    .name:hover::after {
      content: "Ranjith";
      opacity: 1;
      transition: color 0.3s ease;
    }
  }
  .left-section {
    display: flex;
    flex: 1;
    width: 100%;
  }
`;

export const NavItems = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  flex-wrap: wrap;
  justify-content: space-evenly;
  flex: 1;

  li {
    padding: 8px 16px;
  }

  .nav-item {
    color: darkslategray;
    text-decoration: none;
    padding: 8px 16px;
    border-radius: 40px;
    font-size: 16px;
  }
  .active {
    color: black;
    border-color: gray;
  }

  li:hover {
    color: black;
    transform: scale(1.1);
  }
  .nav-item:active {
    border: 1px solid gray;
  }
  .nav-item:focus-visible {
    color: black;
    transform: scale(1.1);
    border: 1px solid gray;
    outline: none;
  }
`;
