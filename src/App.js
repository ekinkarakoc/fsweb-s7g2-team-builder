import "./App.css";
import { useState } from "react";
import { Switch, Route, NavLink, useHistory } from "react-router-dom";
import Members from "./components/Members";
import Form from "./components/Form";

function App() {
  const membersInitial = [
    {
      id: 1,
      img: "https://picsum.photos/200/300",
      name: "ekin karakoç",
      rol: "developer",
      email: "sadasd@gmail.com",
    },
    {
      id: 2,
      img: "https://picsum.photos/200/300",
      name: "ahmet karakoç",
      rol: "developer",
      email: "sadasd@gmail.com",
    },
    {
      id: 3,
      img: "https://picsum.photos/200/300",
      name: "mehmet karakoç",
      rol: "developer",
      email: "sadasd@gmail.com",
    },
    {
      id: 4,
      img: "https://picsum.photos/200/300",
      name: "ali karakoç",
      rol: "developer",
      email: "sadasd@gmail.com",
    },
  ];

  const formDataInitial = {
    name: "",
    email: "",
    rol: "",
  };
  const [formData, setFormData] = useState(formDataInitial);
  const [members, setMembers] = useState(membersInitial);
  let history = useHistory();

  const submitHandler = (e) => {
    e.preventDefault();
    if (formData.id) {
      let updatedMember = members.map((member) => {
        if (member.id == formData.id) {
          return formData;
        } else {
          return member;
        }
      });

      setMembers(updatedMember);
    } else {
      const newMember = {
        ...formData,
        ["img"]: "https://picsum.photos/200/300",
        ["id"]: members[members.length - 1].id + 1,
      };
      setMembers([...members, newMember]);
    }
    setFormData(formDataInitial);
    history.push("/");
  };
  const changeHandler = (e) => {
    let { value, type, name, checked } = e.target;
    value = type == "checkbox" ? checked : value;
    setFormData({ ...formData, [name]: value });
  };
  const editMember = (member) => {
    setFormData(member);
    history.push("/signup");
  };

  return (
    <div>
      <header>
        <nav>
          <NavLink to="/" exact>
            Home
          </NavLink>
          <NavLink to="/signup" exact>
            New Member
          </NavLink>
        </nav>
      </header>
      <Switch>
        <Route path="/" exact>
          <Members members={members} editMember={editMember} />
        </Route>
        <Route path="/signup" exact>
          <Form
            submitHandler={submitHandler}
            changeHandler={changeHandler}
            formData={formData}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
