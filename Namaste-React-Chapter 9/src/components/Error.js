import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
//   const { status, statusText } = err; // object destructuring
  console.log(err);
  return (
    <div>
      <h1>{err.status + ":" + err.statusText}</h1>
    </div>
  );
};

export default Error;
