import { body } from "express-validator";

export const registerValidation = [
  body("email", "Неверный формат почты!").isEmail(),
  body("password", "Пароль должен быть минимум пять символов!").isLength({
    min: 5,
  }),
  body("fullName", "Укажите имя(минимум три символа)").isLength({ min: 3 }),
  body("avatarUrl", "Неверная ссылка на аватарку").optional().isURL(),
];
