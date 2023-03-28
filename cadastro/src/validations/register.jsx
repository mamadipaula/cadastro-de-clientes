import * as yup from "yup"

export const registerSchema = yup.object({
  name: yup.string().required("O nome é obrigatório"),
  email: yup
    .string()
    .email("Insira um email válido")
    .required("O email é obrigatório"),
  password: yup
    .string()
    .required("A senha é obrigatória"),
  confirm_password: yup
    .string()
    .oneOf([yup.ref("password")], "Deve ser igual a senha"),
  cellphone: yup.string().required("Insira um telefone de contato"),
});
