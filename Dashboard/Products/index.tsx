import Layout from "../Layout";
import { FormEvent, useRef, useState } from "react";

function Products() {
  const nameRef = useRef<HTMLInputElement>(null);
  const [name, setName] = useState<string>();
  function handleSubmit(e: FormEvent) {
    //prevent page from reloading on submit
    e.preventDefault();
    //output the name
    if (nameRef.current) {
      console.log(nameRef.current.value);
      console.log("the state :", name);
    }
  }
  return (
    <Layout>
      <form onSubmit={handleSubmit}>
        <div className="input_group">
          <label>Name</label>
          <input
            type="text"
            ref={nameRef}
            onChange={(e) => {
              setName(e.target.value);
            }}
            className="border border-solid border-slate-400 rounded-md ml-4"
          />
        </div>
        <input
          type="submit"
          name="submit"
          value={"submit"}
          className="bg-blue-400 p-2 rounded-md m-4 text-white font-semibold cursor-pointer "
        />
      </form>
    </Layout>
  );
}

export default Products;
