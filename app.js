// Başlangıç bakiyesi
let bakiye = 1000;

function atmIslemleri() {
    let islemKodu = prompt("Lütfen yapmak istediğiniz işlemi seçiniz:\n1 - Bakiye Görüntüleme\n2 - Para Çekme\n3 - Para Yatırma");

    switch (islemKodu) {
        case "1":
            alert("Mevcut bakiyeniz: " + bakiye + " TL");
            break;
        case "2":
            let cekilecekTutar = prompt("Çekmek istediğiniz tutarı giriniz:");
            // İptale basılmış veya boş bırakılmışsa işlemi sonlandırıyoruz
            if (cekilecekTutar === null || cekilecekTutar.trim() === "") {
                alert("İşlem iptal edildi.");
                break;
            }
            
            cekilecekTutar = Number(cekilecekTutar);
            
            if (isNaN(cekilecekTutar) || cekilecekTutar <= 0) {
                alert("Lütfen geçerli bir tutar giriniz.");
            } else if (cekilecekTutar > bakiye) {
                alert("Yetersiz bakiye!");
            } else {
                bakiye -= cekilecekTutar;
                alert("İşleminiz gerçekleşti. Kalan bakiyeniz: " + bakiye + " TL");
            }
            break;
        case "3":
            let yatirilacakTutar = prompt("Yatırmak istediğiniz tutarı giriniz:");
            if (yatirilacakTutar === null || yatirilacakTutar.trim() === "") {
                alert("İşlem iptal edildi.");
                break;
            }

            yatirilacakTutar = Number(yatirilacakTutar);

            if (isNaN(yatirilacakTutar) || yatirilacakTutar <= 0) {
                alert("Lütfen geçerli bir tutar giriniz.");
            } else {
                bakiye += yatirilacakTutar;
                alert("İşleminiz gerçekleşti. Yeni bakiyeniz: " + bakiye + " TL");
            }
            break;
        default:
            // Sadece iptale basılmadıysa mesaj gösterilir, aksi halde sessizce kapatılır.
            if (islemKodu !== null) {
                alert("Geçersiz işlem kodu seçtiniz.");
            }
            break;
    }
}
