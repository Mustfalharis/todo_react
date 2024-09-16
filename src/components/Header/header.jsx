import logo from "../../../assets/logo.svg";
import Container from "../Container/container";
import "./header.css";

const MainHeader = () => {
  return (
    <header>
      <Container>
        <div className="content">
        <img src={logo}/>
        <ul>
          <li><a href="">Home</a></li>
          <li><a href="">About</a></li>
        </ul>
        </div>
      
      </Container>
    </header>
  );
};

export default MainHeader;
