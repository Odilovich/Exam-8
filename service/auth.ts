import request from "./config";
import { Request } from "@/interface/auth";

const auth: Request = {
    sign_up: (data) => request.post("/register", data),
    sign_in: (data) => request.post("/login", data),
    auth_verify: (email, code) => request.post(`/verify/register?email=${email}&code=${code}`),
    forgot_password: (data) => request.post("/auth/forgot-password", data),
    update_password: (data) => request.post("/auth/verify-forgot-password", data),
}

export default auth