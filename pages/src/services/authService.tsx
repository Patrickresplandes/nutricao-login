import HttpClient, { Client } from "../infra/HttpClient";

export interface AuthData {
  username: string;
  password: string;
}

export async function authenticateUser(authData: AuthData) {
  const client: Client = {
    fetchOptions: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    },
    body: authData, 
  };

  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/login`; 

  try {
    const response = await HttpClient(url, client);
    return response;
  } catch (error) {
    throw new Error("Erro na requisição de autenticação");
  }
}
