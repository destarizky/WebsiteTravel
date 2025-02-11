//menu
var tombolMenu = $(".tombol-menu");
var menu = $("nav .menu ul");

function klikMenu() {
    tombolMenu.click(function () {
        menu.toggle();
    });
    menu.click(function () {
        menu.toggle();
    });
}

$(document).ready(function () {
    var width = $(window).width();
    if (width < 990) {
        klikMenu();
    }
})

//check lebar
$(window).resize(function () {
    var width = $(window).width();
    if (width > 989) {
        menu.css("display", "block");
        //display:block
    } else {
        menu.css("display", "none");
    }
    klikMenu();
});

//efek scroll 
$(document).ready(function () {
    var scroll_pos = 0;
    $(document).scroll(function () {
        scroll_pos = $(this).scrollTop();
        if (scroll_pos > 0) {
            $("nav").addClass("putih");
            $("nav img.hitam").show();
            $("nav img.putih").hide();
        } else {
            $("nav").removeClass("putih");
            $("nav img.hitam").hide();
            $("nav img.putih").show();
        }
    })
});

//Modal
document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("modal");
    var modalImg = document.getElementById("modal-img");
    var modalInfo = document.getElementById("modal-info");
    var modalDescription = document.getElementById("modal-description");
    var span = document.getElementsByClassName("close")[0];
  
    var images = document.querySelectorAll("#gallery img");
    images.forEach(function(img) {
      img.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        modalInfo.textContent = this.getAttribute("data-info");
        modalDescription.textContent = this.getAttribute("data-description");
      }
    });
  
    span.onclick = function() {
      modal.style.display = "none";
    }
  
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  });

  /*Kode JavaScript ini berfungsi untuk: 
  1.Mengelola interaksi menu navigasi pada tampilan responsif, sehingga pengguna dapat menampilkan dan menyembunyikan menu dengan mudah.
  2.Mengubah gaya navigasi saat pengguna menggulir halaman untuk meningkatkan keterbacaan.
  3.Menyediakan pengalaman pengguna yang menarik dengan modal untuk menampilkan gambar dari galeri, termasuk informasi dan deskripsi terkait gambar tersebut. Kode ini mengoptimalkan navigasi dan interaksi di website agar lebih ramah pengguna.*/
