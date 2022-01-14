type LoginInputs = {
  email: string;
  password: string;
};

type SignupInputs = {
  name: string;
  email: string;
  password: string;
};

export const login = async ({ email, password }: LoginInputs) => {
  const data = { email, password };

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/login`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(data),
    }
  );

  if (!res.ok) {
    throw await res.json();
  }

  return await res.json();
};

export const signup = async ({ email, name, password }: SignupInputs) => {
  const data = { email, password, name };

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/signup`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(data),
    }
  );

  if (!res.ok) {
    throw await res.json();
  }

  return await res.json();
};

export const logout = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/logout`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    }
  );

  if (!res.ok) {
    throw await res.json();
  }

  return await res.json();
};

export const me = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });

  if (!res.ok) {
    throw await res.json();
  }

  return await res.json();
};
