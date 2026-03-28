function kullaniciKontrol() {
    // 1. Kullanıcıdan yaş bilgisini al
    let yasGirdisi = prompt("Lütfen yaşınızı giriniz:");

    // İptal'e basılırsa veya hiçbir şey girilmezse
    if (yasGirdisi === null || yasGirdisi.trim() === "") {
        alert("Geçerli bir yaş giriniz!");
        return;
    }

    // 2. Alınan veriyi sayıya dönüştür
    let yas = Number(yasGirdisi);

    // 3. ve İpucu 3: NaN kontrolü yap
    if (isNaN(yas)) {
        alert("Geçerli bir yaş giriniz!");
    }
    // 4. Koşullar
    else if (yas < 18) {
        alert("Reşit değilsiniz.");
    }
    else {
        // yas >= 18 demektir, bu noktada öğrenci olup olmadığı sorulur
        let ogrenciMi = confirm("Öğrenci misiniz?");

        if (ogrenciMi === true) {
            alert("Hoşgeldiniz öğrenci!");
        } else {
            alert("Hoşgeldiniz!");
        }
    }
}
