import * as yup from "yup"

export const registerUserSchema = yup.object().shape({
    email: yup.string().required("Adicione seu email").email("email inválido"),
    password: yup.string()
        .matches(/[A-Z]/, "deve conter ao menos 1 letra maiúscula")
        .matches(/[a-z]/, "deve conter ao menos 1 letra minúscula")
        .matches(/(\d)/, "deve conter ao menos 1 número")
        .matches(/(\W)|_/, "deve conter ao menos 1 caractere especial")
        .matches(/.{8,}/, "deve conter ao menos 8 dígitos")
        .required("Adicione sua senha"),
    passwordConfirmation: yup.string()
        .oneOf([yup.ref("password"), null!], "As senhas devem corresponder entre si")
        .required("Confirme sua senha")
})

export const loginUserScheema = yup.object().shape({
    email: yup.string().required("Adicione seu email").email("email inválido"),
    password: yup.string().required("Adicione sua senha")
})

export const updateUserSchema = yup.object().shape({
    username: yup.string()
        .min(3, "Deve conter pelo menos 3 dígitos")
        .max(12, "Deve conter no máximo 12 dígitos"),
    email: yup.string().email("email inválido"),
    password: yup.string()
        .matches(/[A-Z]/, "deve conter ao menos 1 letra maiúscula")
        .matches(/[a-z]/, "deve conter ao menos 1 letra minúscula")
        .matches(/(\d)/, "deve conter ao menos 1 número")
        .matches(/(\W)|_/, "deve conter ao menos 1 caractere especial")
        .matches(/.{8,}/, "deve conter ao menos 8 dígitos")
}).defined()
