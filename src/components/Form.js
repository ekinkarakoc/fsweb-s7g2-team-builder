import { useEffect, useState } from "react";
import "./Form.css";

const Form = ({ submitHandler, changeHandler, formData, isValid, errors }) => {
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
      <div className="errors">{errors.name}</div>
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
      <div className="errors">{errors.email}</div>
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
      <div className="errors">{errors.rol}</div>
      <label>
        <input
          type="checkbox"
          name="terms"
          checked={formData.terms}
          onChange={changeHandler}
        />
        Şartları Kabul Ediyorum
      </label>
      <div className="errors">{errors.terms}</div>
      <button type="submit" disabled={!isValid}>
        Submit
      </button>
    </form>
  );
};
export default Form;
