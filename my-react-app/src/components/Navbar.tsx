import { NavbarStyled, ClockwiseStyled } from "../styles/styled-components/NavbarStyled"
import GeneralButtons from "../styles/styled-components/GeneralButtons"

const Navbar = () => {
    return(
        <>
        <NavbarStyled>
        <ClockwiseStyled>Clockwise</ClockwiseStyled>
        <GeneralButtons>Log-In</GeneralButtons>
        </NavbarStyled>
        </>
    )
}

export default Navbar