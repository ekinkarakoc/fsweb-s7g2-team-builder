import "./Form.css";

const Form = ({ submitHandler, changeHandler, formData }) => {
  return (
    <form onSubmit={submitHandler}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          placeholder="adınızı giriniz"
          value={formData.name}
          onChange={changeHandler}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          placeholder="mail giriniz"
          value={formData.email}
          onChange={changeHandler}
        />
      </label>
      <label>
        Rol:
        <input
          type="text"
          name="rol"
          placeholder="adınızı giriniz"
          value={formData.rol}
          onChange={changeHandler}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};
export default Form;
