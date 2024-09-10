import { object, ref, string } from 'yup';

export const registerSchema = object({
    username: string().required('Kullanıcı adı gerekli').min(4, 'Kullanıcı adı en az 4 karakter olmalıdır'),
    email: string().email('Geçerli bir e-posta adresi girin').required('E-posta adresi gerekli'),
    password: string().required('Şifre gerekli').min(6, 'Şifre en az 6 karakter olmalıdır'),
    repeatPassword: string().required().oneOf([ref('password'), null], 'Şifreler eşleşmiyor').required('Şifre tekrar alanı gerekli'),
});
