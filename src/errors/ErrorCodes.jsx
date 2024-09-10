const errorCodesAndMessages = new Map([
    // Firebase Authentication Hata Kodları
    ['auth/invalid-email', 'Geçersiz e-posta adresi.'],
    ['auth/user-disabled', 'Hesap devre dışı bırakılmış.'],
    ['auth/user-not-found', 'E-posta adresine sahip bir kullanıcı bulunamadı.'],
    ['auth/wrong-password', 'Yanlış şifre.'],
    ['auth/email-already-in-use', 'Bu e-posta adresi zaten kullanımda.'],
    ['auth/weak-password', 'Şifre yeterince güçlü değil.'],
    ['auth/operation-not-allowed', 'Bu işlem izin verilmedi.'],
    ['auth/expired-action-code', 'Eylem kodunun süresi dolmuş.'],
    ['auth/invalid-action-code', 'Geçersiz eylem kodu.'],
    ['auth/invalid-credential', 'Geçersiz kimlik bilgileri.'],
    ['auth/requires-recent-login', 'Bu işlemi gerçekleştirmek için son oturum açma gereklidir.'],
    ['auth/credential-already-in-use', 'Bu kimlik bilgileri başka bir kullanıcı tarafından kullanılmakta.'],
    // Genel Hatalar
    ['SIGN_OUT_ERROR', 'Çıkış yapılamadı.'],
    ['TRY_AGAIN', 'Daha sonra tekrar deneyiniz.'],
]);

const DEFAULT_MESSAGE = 'Bilinmeyen bir hata oluştu';

export const getErrorMessage = (code) => {
    return errorCodesAndMessages.get(code) || DEFAULT_MESSAGE;
};
