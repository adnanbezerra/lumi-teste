import { Container, Logo, PageSelector } from "./TopBarStyles";
import { Link, useLocation } from "react-router-dom";

export default function TopBar() {
  const { pathname: url } = useLocation();

  return (
    <Container>
      <img src="https://camo.githubusercontent.com/9334222332d7c58c3311e058b6ab6fdba6a8462a79416ceeb3ab107d16f4241b/68747470733a2f2f6d656469612e6c6963646e2e636f6d2f646d732f696d6167652f433444304241514863496956714f744f416e512f636f6d70616e792d6c6f676f5f3230305f3230302f302f313636303430333635323930343f653d3136393832373834303026763d6265746126743d6b304e3163684d3941736d4f2d666a4757747063616746306a5531437165593932366d474b72414e466977" />
      <Logo>lumi</Logo>

      <Link to={'/'} style={{ textDecoration: 'none' }}>
        <PageSelector isCurrentPage={url === "/"} >Inserir</PageSelector>
      </Link>

      <Link to={'/history'} style={{ textDecoration: 'none' }}>
        <PageSelector isCurrentPage={url === "/history"}>Histórico</PageSelector>
      </Link>
    </Container>
  )
}