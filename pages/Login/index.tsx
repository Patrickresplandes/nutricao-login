import { Input, Spacer } from "@nextui-org/react";
import { useRouter } from "next/router";
import React, { useState, ChangeEvent } from "react";
import { authenticateUser, AuthData } from "../src/services/authService";

function isInputChangeEvent(event: ChangeEvent<any>): event is ChangeEvent<HTMLInputElement> {
  return event.target instanceof HTMLInputElement;
}

export default function Login() {
  const router = useRouter();
  const [formData, setFormData] = useState<AuthData>({ username: "", password: "" });
  const [loginError, setLoginError] = useState<string | null>(null);

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await authenticateUser(formData);

      if (response.ok) {
        router.push("/");
      } else {
        setLoginError("Erro no login. Por favor, verifique suas credenciais.");
      }
    } catch (error) {
      console.error("Erro na requisição:", error);
      setLoginError("Erro na requisição. Por favor, tente novamente.");
    }
  };

  const handleInputChange = (event: ChangeEvent<any>) => {
    if (isInputChangeEvent(event)) {
      const { name, value } = event.target;
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };

  return (
    <>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="mx-auto h-24 w-auto" src="/Nutricao.png" alt="Your Company" />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Login
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm  ">
          <form className="space-y-6 " method="POST" onSubmit={onSubmit}>
            <div className="mt-2 items-center justify-center flex">
              <div>
                <Input
                  width="220px"
                  labelPlaceholder="Usuario"
                  value={formData.username}
                  onChange={handleInputChange}
                  name="username"
                />
                <div>
                  <Spacer y={1.6} />
                  <Input.Password
                    size="md"
                    labelPlaceholder="Senha"
                    value={formData.password}
                    onChange={handleInputChange}
                    name="password"
                  />
                  <Spacer y={1.6} />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center ">
              <a href="#" className="font-semibold text-lime-600 hover:text-lime-500 justify-center">
                Esqueceu a senha?
              </a>
            </div>
            {loginError && <div className="error-message text-red-600">{loginError}</div>}
            <div className="justify-center items-center flex">
              <button
                type="submit"
                className="flex w-[220px] justify-center rounded-md bg-lime-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-lime-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
