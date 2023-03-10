<?php include 'header.php' ?>

<div class="container-main">
<br>
<p class="p-1">Buraya kadar geldiğiniz için teşekkür ederim. Eğer aklınızda kalan bir şey varsa iletişim kısmından çekinmeden sorabilirsiniz. Hatta şehrimize geldiğinizde gezip görebilmeniz için bir tur ekibi olup olmadığını bile sormak için buradan iletişime geçebilirsiniz.
    <br><br>
    -Manisa Belediyesi
</p>
<div class="communicate">
                        <form id="iletisim" class="form" action="" method="post">
                            İsminizi Giriniz: 
                            <input type="text" name="ad" id="isim-bilgisi" placeholder="Adınızı Giriniz" required autofocus autocomplete="OFF"><br><br>
    
                            E-Mailinizi Giriniz: 
                            <input type="email" id="e-posta" placeholder="E-posta Adresinizi Giriniz" required autocomplete="off"><br><br>
    
                            İletişim nedeninizi seçiniz: 
                            <input type="subject" id="konu" placeholder="Konuyu Giriniz" required autocomplete="off"><br><br>    
    
                            Mesajınızı Giriniz: <textarea rows="2" id="mesaj" placeholder="Mesajınızı Yazın" required></textarea><br><br>
                            <input onclick="gonder()" type="submit" class="send">
                        </form>
    
                        <div class="photo">
                            <img src="https://upload.wikimedia.org/wikipedia/tr/d/d5/Manisa_B%C3%BCy%C3%BCk%C5%9Fehir_Belediyesi_logosu.png">
                        </div>
                    </div>
</div>
<br><br>
<iframe id="video" width="100%" height="600" src="https://www.youtube.com/embed/5N_ARkC00aA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    <br><br>

    <script>
        function gonder(){
            var ad = document.getElementById("isim-bilgisi");
            var mail = document.getElementById("e-posta");
            var konu = document.getElementById("konu");
            var mesaj = document.getElementById("mesaj");

            window.alert("İsim: " + ad.value + "\nMail: " + mail.value + "\nKonu: " + konu.value + "\nMesajınız: "+ mesaj.value);
        }
    </script>



<?php include 'footer.php'; ?>