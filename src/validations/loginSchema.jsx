import { object, ref, string } from 'yup';

export const loginSchema = object({
    email: string().email('Geçerli bir e-posta adresi girin').required('E-posta adresi gerekli'),
    password: string().required('Şifre gerekli').min(6, 'Şifre en az 6 karakter olmalıdır'),
});
