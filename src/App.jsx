import "./app.css";
import Container from "../src/components/Container/container";
import MainHeader from "./components/Header/header";
import Form from "./components/Form/from";
import Space from "./components/Space/index";
import TaskCard from "./components/taskCard/taskCard";
const App = () => {
  return (
    <div>
      <MainHeader />
       <Container>
        <Space height={60}></Space>
       <h1 className="title">Simple ToDo App</h1>
       <p className="desc">This todo app for test design.</p>
       <Space height={30}></Space>
       <Form/>
       <Space height={30}></Space>
       <TaskCard/>
       </Container>
    </div>
  );
};
export default App;
