import * as yup from "yup"

export const registerUserSchema = yup.object().shape({
    email: yup.string().required("adicione seu email").email("email inválido"),
    password: yup.string()
        .matches(/[A-Z]/, "deve conter ao menos 1 letra maiúscula")
        .matches(/[a-z]/, "deve conter ao menos 1 letra minúscula")
        .matches(/(\d)/, "deve conter ao menos 1 número")
        .matches(/(\W)|_/, "deve conter ao menos 1 caractere especial")
        .matches(/.{8,}/, "deve conter ao menos 8 dígitos")
        .required("adicione sua senha"),
    passwordConfirmation: yup.string()
        .oneOf([yup.ref("password"), null!], "as senhas devem corresponder entre si")
        .required("confirme sua senha")
})

export const loginUserScheema = yup.object().shape({
    email: yup.string().required("adicione seu email").email("email inválido"),
    password: yup.string().required("adicione sua senha")
})

export const updateUserSchema = yup.object().shape({
    username: yup.string()
        .min(3, "deve conter pelo menos 3 dígitos")
        .max(12, "deve conter no máximo 12 dígitos"),
    email: yup.string().email("email inválido"),
    password: yup.string()
        .matches(/[A-Z]/, "deve conter ao menos 1 letra maiúscula")
        .matches(/[a-z]/, "deve conter ao menos 1 letra minúscula")
        .matches(/(\d)/, "deve conter ao menos 1 número")
        .matches(/(\W)|_/, "deve conter ao menos 1 caractere especial")
        .matches(/.{8,}/, "deve conter ao menos 8 dígitos")
}).defined()

export const postCreateScheema = yup.object().shape({
    title: yup.string().required("adicione um titulo")
    .max(100,"deve conter no máximo 50 caracteres"),
    content: yup.string().required("adicione um conteúdo")
    .min(50, "deve conter ao menos 50 caracteres")
    .max(300, "deve conter no máximo 300 caracteres")
})