import "./App.css";
import { useState, useEffect } from "react";
import { Switch, Route, NavLink, useHistory } from "react-router-dom";
import Members from "./components/Members";
import Form from "./components/Form";
import * as Yup from "yup";

function App() {
  const membersInitial = [
    {
      id: 1,
      img: "https://picsum.photos/200/300",
      name: "ekin karakoç",
      rol: "developer",
      email: "sadasd@gmail.com",
      terms: true,
    },
    {
      id: 2,
      img: "https://picsum.photos/200/300",
      name: "ahmet karakoç",
      rol: "developer",
      email: "sadasd@gmail.com",
      terms: true,
    },
    {
      id: 3,
      img: "https://picsum.photos/200/300",
      name: "mehmet karakoç",
      rol: "developer",
      email: "sadasd@gmail.com",
      terms: true,
    },
    {
      id: 4,
      img: "https://picsum.photos/200/300",
      name: "ali karakoç",
      rol: "developer",
      email: "sadasd@gmail.com",
      terms: true,
    },
  ];

  const formDataInitial = {
    name: "",
    email: "",
    rol: "",
    terms: false,
  };
  const [formData, setFormData] = useState(formDataInitial);
  const [members, setMembers] = useState(membersInitial);
  const [isValid, setValid] = useState(false);
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    rol: "",
    terms: "",
  });

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

    Yup.reach(membersFormSchema, name)
      .validate(value)
      .then((res) => setErrors({ ...errors, [name]: "" }))
      .catch((err) => setErrors({ ...errors, [name]: err.errors[0] }));
  };

  const membersFormSchema = Yup.object().shape({
    name: Yup.string()
      .required("isim giriniz")
      .min(3, "en az 3 karakter giriniz"),
    email: Yup.string()
      .required("email giriniz")
      .email("geçerli email giriniz"),
    rol: Yup.string().required("Görev giriniz"),
    terms: Yup.boolean().oneOf([true], "Şartları kabul ediniz"),
  });

  const editMember = (member) => {
    setFormData(member);
    history.push("/signup");
  };

  useEffect(() => {
    membersFormSchema.isValid(formData).then((valid) => {
      setValid(true);
    });
  }, [formData]);

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
            membersFormSchema={membersFormSchema}
            submitHandler={submitHandler}
            changeHandler={changeHandler}
            formData={formData}
            isValid={isValid}
            errors={errors}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
