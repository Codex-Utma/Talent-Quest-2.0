import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { loginSchema } from "../schemas/login.schema";
import { LoginType } from "../types/login";

import { AxiosInstance } from "../config/axios";

import useAuth from "../hooks/useAuth";

import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Login = () => {

  const navigate = useNavigate();

  const { login, user } = useAuth();

  useEffect(() => {
    if (user?.userType === "admin") {
      navigate("/admin");
    }
    if (user?.userType === "employee") {
      navigate("/employee");
    }
  }, [user, navigate]);

  const { register, handleSubmit, formState: { errors } } = useForm<LoginType>({
    resolver: zodResolver(loginSchema),
  });

  const onSuccess = async (data: LoginType) => {
    try {
      const response = await AxiosInstance.post("/user/login", data);

      const user = response.data.data;

      login(user);
    } catch (error: any) {
      alert(error.response.data.message);
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-700">Iniciar Sesión</h2>
        <form className="space-y-4" onSubmit={handleSubmit(onSuccess)}>
          <div>
            <label className="block text-gray-600 font-medium">Correo Electrónico</label>
            <input
              type="email"
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              placeholder="correo@example.com"
              {...register("email")}
              required
            />
            {
              errors.email && <span className="text-red-500 text-xs">{errors.email.message}</span>
            }
          </div>
          <div>
            <label className="block text-gray-600 font-medium">Contraseña</label>
            <input
              type="password"
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              placeholder="••••••••"
              {...register("password")}
              required
            />
            {
              errors.password && <span className="text-red-500 text-xs">{errors.password.message}</span>
            }
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition"
          >
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
