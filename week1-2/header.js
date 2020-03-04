

    window.onscroll = () => {functionScroll()};

    function functionScroll() {
        if((document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) && window.innerWidth > 768) {
            document.getElementById("nav").classList.add("scroll")
             
        } else {
            document.getElementById("nav").classList.remove("scroll")
        }

    }

      


