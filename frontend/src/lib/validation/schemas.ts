import { z } from 'zod'

export const signInSchema = z.object({
    email: z
        .string()
        .min(1, 'Email обязателен')
        .email('Введите корректный email (example@mail.com)')
        .max(254, 'Email не может быть длиннее 254 символов')
        .regex(
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            'Некорректный формат email'
        )
        .refine(
            (val) => {
                const disposableDomains = [
                    'tempmail.com',
                    '10minutemail.com',
                    'guerrillamail.com',
                    'mailinator.com',
                    'yopmail.com',
                    'throwawaymail.com'
                ]
                const domain = val.split('@')[1]
                return !disposableDomains.includes(domain?.toLowerCase() || '')
            },
            { message: 'Используйте постоянный email адрес' }
        ),

    password: z
        .string()
        .min(8, 'Пароль должен содержать минимум 8 символов')
        .regex(/[A-Z]/, 'Хотя бы одна заглавная буква')
        .regex(/[a-z]/, 'Хотя бы одна строчная буква')
        .regex(/\d/, 'Хотя бы одна цифра'),
})

export const signUpSchema = signInSchema.extend({
    username: z
        .string()
        .min(3, 'Имя должно содержать минимум 3 символа')
        .max(30, 'Имя не может быть длиннее 30 символов')
        .regex(
            /^[a-zA-Z0-9_]+$/,
            'Имя может содержать только буквы, цифры и подчеркивание'
        ),

    confirmPassword: z
        .string()
        .min(8, 'Пароль должен содержать минимум 8 символов'),
}).refine((data) => data.password === data.confirmPassword, {
    message: 'Пароли не совпадают',
    path: ['confirmPassword'],
})

export type SignInFormData = z.infer<typeof signInSchema>
export type SignUpFormData = z.infer<typeof signUpSchema>