import React from "react";

const ValidPassword = () => <h1>Valid Password</h1>;
const InvalidPassword = () => <h1>Invalid Password</h1>;

const IsPassword = ({ isValid }) =>
  isValid ? <ValidPassword /> : <InvalidPassword />;

const Password = () => {
  return (
    <section>
      <IsPassword isValid={false} />
    </section>
  );
};

export default Password;
