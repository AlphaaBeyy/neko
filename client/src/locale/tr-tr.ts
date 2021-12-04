export const logout = 'Çıkış Yap'
export const unsupported = 'Tarayıcınız WebRTC Desteklemiyor'
export const admin_loggedin = 'Admin Olarak Giriş Yaptınız.'
export const you = 'Sen'
export const somebody = 'Birisi'
export const send_a_message = 'Mesaj Gönder'

export const side = {
  chat: 'Sohbet',
  settings: 'Ayarlar',
}

export const connect = {
  login_title: 'Lütfen Giriş Yapın',
  invitation_title: 'Bu Oday Davet Edildiniz.',
  displayname: 'Lütfen Bir İsim Girin',
  password: 'Şifrenizi Girin',
  connect: 'Bağlan',
  error: 'Bağlantı Hatası',
  empty_displayname: 'İsim Boş Olamaz.',
}

export const context = {
  ignore: 'Engelle',
  unignore: 'Engeli Kaldır',
  mute: 'Sustur',
  unmute: 'Susturmayı Aç',
  release: 'Kontrolü Al',
  take: 'Kontrolü Ver',
  give: 'Kontrolü Al',
  kick: 'AT',
  ban: 'İP BAN AT',
  confirm: {
    kick_title: 'Atıldı >> {name}?',
    kick_text: 'Bu Kişiyi Atmak İstediğinize Emin Misiniz ? > {name}?',
    ban_title: 'Banlandı >> {name}?',
    ban_text: 'Do you want to ban {name}? You will need to restart the server to undo this.',
    mute_title: 'Susturuldu >> {name}?',
    mute_text: 'Are you sure you want to mute {name}?',
    unmute_title: 'Susturma Açıldı >> {name}?',
    unmute_text: 'Do you want to unmute {name}?',
    button_yes: 'Evet',
    button_cancel: 'Hayır',
  },
}

export const controls = {
  release: 'Kontrolü Bırak',
  request: 'Kontrolü Al',
  lock: 'Kontrolü Kilitle',
  unlock: 'Kontrol Kilidini Aç',
}

export const locks = {
  control: {
    lock: 'Kullanıcılar İçin Kontrolü Kilitle',
    unlock: 'Kullanıcılar İçin Kontrolü Aç',
    locked: 'Kullanıcılar İçin Kontrol Kilitlendi',
    unlocked: 'Kullanıcılar İçin Kontrol Açıldı',
    notif_locked: 'Admin Kullanıcılar İçin Kontrolü Kilitledi',
    notif_unlocked: 'Admin Kullanıcılar İçin Kontrolü Açtı',
  },
  login: {
    lock: 'Oda Girişini Kapat',
    unlock: 'Oda Girişini Aç',
    locked: 'Oda Girişi Kapatıldı',
    unlocked: 'Oda Girişi Açıldı',
    notif_locked: 'Oda Kilitlendi',
    notif_unlocked: 'Oda Artık Açık',
  },
}

export const setting = {
  scroll: 'Kaydırma Hızı',
  scroll_invert: 'Ters Kaydırma',
  autoplay: 'Otomatik Oynat',
  ignore_emotes: 'Emotları Kapat',
  chat_sound: 'Sohbet Seslerini Aç',
  keyboard_layout: 'Klavye Düzeni',
  broadcast_title: 'CANLI YAYIN (BETA)',
}

export const connection = {
  logged_out: 'Giriş Yaptınız',
  reconnecting: 'Tekrar Bağlanıyor...',
  connected: 'Bağlandı',
  disconnected: 'Bağlantı Koptu',
  kicked: 'Bu Odadan Atıldınız',
  button_confirm: 'Tamam',
}

export const notifications = {
  connected: '{name} Giriş Yaptı.',
  disconnected: '{name} Çıkış Yaptı',
  controls_taken: '{name} Kontrolü Aldı',
  controls_taken_force: 'Kontrolü Aldı',
  controls_taken_steal: 'took the controls from {name}',
  controls_released: '{name} Kontrolü Bıraktı',
  controls_released_force: 'Kontrol Bıraktırıldı',
  controls_released_steal: 'released the controls from {name}',
  controls_given: 'Kontrolü Verdi {name}',
  controls_has: '{name} Kontrol Ediyor.',
  controls_has_alt: 'Kontrol İsteği Gönderildi',
  controls_requesting: '{name} Kontrolü İstiyor',
  resolution: 'Çözünürlük Değişti {width}x{height}@{rate}',
  banned: 'Banlandı {name}',
  kicked: 'Atıldı {name}',
  muted: 'Susturuldu {name}',
  unmuted: 'Susturma Açıldı {name}',
}
