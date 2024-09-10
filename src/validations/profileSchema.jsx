import { object, ref, string } from 'yup';

export const profileSchema = object({
    username: string().required('Kullanıcı adı gerekli').min(4, 'Kullanıcı adı en az 4 karakter olmalıdır'),
    password: string().min(6, 'Şifre en az 6 karakter olmalıdır'),
});
