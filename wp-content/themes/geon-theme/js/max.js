Fancybox.bind("[data-fancybox]", {
  dragToClose: !1,
  autoFocus: !1,
  placeFocusBack: !1
});
const viewportFix = (e) => {
    $('meta[name="viewport"]').attr("content", "user-scalable=no, width=" + (screen.width <= e ? e : "device-width"));
  },
  triplets = (e) => e.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 "),
  maskPhone = () => {
    const e = [],
      t = document.querySelectorAll(".masked");
    if (t.length > 0) {
      const o = {
        mask: "+7 (000) 000-00-00"
      };
      t.forEach((t) => {
        e.push(new IMask(t, o));
      });
    }
    $(".masked").click(function () {
      "" == $(this).val() && $(this).val("+7 ");
    });
  },
  initPopup = () => {
    $("[data-open-popup]").click(function (e) {
        const t = $(this).attr("data-open-popup");
        if (($("body").css("overflow", "hidden"), $(`.popup[data-popup="${t}"]`).addClass("open"), "popup-sertificate" === t)) {
          $(this).parent().find("h3").text();
          const e = $(this).attr("data-file");
          $(`.popup[data-popup="${t}"]`).find('input[name="urlfile"]').val(e);
        }
      }),
      $(".popup-layout").on("wheel", (e) => {
        e.stopPropagation();
      }),
      $(".popup-close, .popup-bg").click(() => {
        $(".popup").removeClass("open"), $("body").removeAttr("style");
      });
  },
  lineCampItemText = () => {
    const e = $(".item-card__desc div"),
      t = e.outerHeight();
    0 === t && $(".item-card__desc").hide();
    const o = parseInt(e.css("font-size"));
    let a = Math.floor(t / (1.6 * o));
    a > 12 && (a = 12);
    var i;
    e.css($(window).width() > 1024 ? {
      "-webkit-line-clamp": `${a}`
    } : {
      "-webkit-line-clamp": "3",
      height: ((i = 3), i * (1.6 * o) + "px")
    });
  },
  scrollSlider = () => {
    const e = $(".services"),
      t = e.offset().top,
      o = e.innerHeight(),
      a = $(".services .container"),
      i = a.width(),
      n = a.height(),
      s = $(".services-slider__wrapper");
    let r;
    (r = $("body").width() > 1024 ? s.innerWidth() + $(".services .col").first().innerWidth() / 2 : s.innerWidth()),
    $("body").width() > 768 ?
      (e.css("height", r - i + o),
        a.css("top", $(window).height() - n - 40),
        $(window).scroll(() => {
          const o = $(window).scrollTop() + $(window).height() - (t + parseInt(e.css("padding-top")) + n);
          let a,
            l = o;
          o >= 0 ? ((a = (l / 100) * 4.6), o >= r - i && ((l = r - i), (a = (l / 100) * 4.6))) : (l = 0),
            s.css("transform", `translate3d(-${l}px, 0, 0)`),
            $(".services-item__img img").each(function (e, t) {
              $(t).css("transform", `translate3d(${-1 * a}px, 0, 0)`);
            });
        })) :
      $(".services-item").css("width", $(".services .container").width());
  },
  appHeight = () => {
    document.documentElement.style.setProperty("--app-height", `${window.innerHeight}px`);
  },
  itemSingle = () => {
    const e = [],
      t = $(".item-section");
    t.each((t, o) => {
        const a = $(o).find(".item-section__title").text();
        $(o).attr("data-id", t), e.push(a), "Описание" === a && $(o).attr("id", "description");
      }),
      e.forEach((e, t) => {
        $(".item-nav ul").append(`<li data-id="${t}"><a href="javascript:;">${e}</a></li>`);
      }),
      $(".item-nav li").on("click", function () {
        const e = $(this).attr("data-id"),
          t = $(`.item-section[data-id="${e}"]`).offset().top - $(".header").outerHeight();
        $("html, body").animate({
          scrollTop: t
        }, 1e3);
      }),
      $(".item-card__desc-more").on("click", () => {
        $("html, body").animate({
          scrollTop: $("#description").offset().top - $(".header").outerHeight()
        }, 1e3);
      }),
      $(window).on("scroll", () => {
        const e = $(this).scrollTop() + $(".header").outerHeight();
        t.each(function () {
            const t = $(this).offset().top - $(".header").outerHeight(),
              o = t + $(this).outerHeight();
            e >= t && e <= o ? ($(".item-nav li").removeClass("active"), $(`.item-nav li[data-id="${$(this).attr("data-id")}"]`).addClass("active")) : e < $(".item-wrapper").offset().top && $(".item-nav li").removeClass("active");
          }),
          e > $(".item-wrapper").offset().top ? $(".item-card.fixed").css("opacity", "1") : $(".item-card.fixed").css("opacity", "0");
      });
  },
  burgerMenu = () => {
    let e = !1;
    $(".header-burger").click(function () {
      (e = !e),
      $(".header-burger").toggleClass("open"),
        $(".header-opened").toggleClass("open"),
        $(".header-logo").toggleClass("white"),
        $(".header-opened").on("wheel", (e) => {
          e.stopPropagation();
        }),
        $("body").width() < 1024 && (e ? $("body").css("overflow", "hidden") : $("body").css("overflow", "visible"));
    });
  },
  companyWorkChange = () => {
    const e = new IntersectionObserver(
      (e) => {
        e.forEach((e) => {
          if (e.isIntersecting) {
            const t = e.target.getAttribute("data-id");
            document.querySelectorAll(".company-work__images img").forEach((e) => {
              (e.style.zIndex = 2), (e.style.top = "100%");
            });
            const o = document.querySelector(".company-work__images img:nth-child(" + t + ")");
            (o.style.zIndex = 5), (o.style.top = "0%");
          }
        });
      }, {
        root: null,
        rootMargin: "200px",
        threshold: 1
      }
    );
    document.querySelectorAll(".company-work__item").forEach((t) => {
      e.observe(t);
    });
  },
  createSlider = (e, t) => {
    new Swiper(e, {
      observer: !0,
      observeParents: !0,
      ...t
    });
  };
let lenis;
const initSmoothScrolling = () => {
    const e = new Lenis({
      duration: 2,
      lerp: 0.2,
      easing: (e) => (1 === e ? 1 : 1 - Math.pow(2, -10 * e)),
      smooth: !0,
      smoothTouch: !1
    });
    requestAnimationFrame(function t(o) {
      e.raf(o), requestAnimationFrame(t);
    });
  },
  runSplit = () => {
    gsap.registerPlugin(ScrollTrigger);
    document.querySelectorAll("[data-animate-title]").forEach((e) => {
      $(e).splitLines();
      let t = 0;
      e.hasAttribute("data-animate-title-delay") && (t = e.getAttribute("data-animate-title-delay")),
        gsap.utils.toArray(e).forEach((o) => {
          gsap.from($(e).children(), {
            scrollTrigger: {
              trigger: o,
              start: "top 85%"
            },
            opacity: 0,
            y: 40,
            duration: 0.15,
            delay: t,
            stagger: {
              amount: 0.3
            }
          });
        });
    });
  },
  initAnimate = () => {
    setTimeout(function () {
      runSplit(), AOS.init({
        once: !0,
        offset: 40,
        duration: 400,
        delay: 200
      });
    }, 100);
  };
$(document).ready(function () {
    var e;
    (e = 380),
    $('meta[name="viewport"]').attr("content", "user-scalable=no, width=" + (screen.width <= e ? e : "device-width")),
      document.documentElement.style.setProperty("--app-height", `${window.innerHeight}px`),
      maskPhone(),
      initPopup(),
      burgerMenu(),
      initSmoothScrolling(),
      lineCampItemText(),
      companyWorkChange(),
      0 !== $(".services").length && scrollSlider(),
      0 !== $(".item-nav").length && itemSingle(),
      0 !== $(".unset").length && $(".wrapper").css("overflow", "unset"),
      createSlider(".item-gallery", {
        speed: 1e3,
        spaceBetween: 15,
        slidesPerView: 1,
        navigation: {
          nextEl: ".item-gallery__arrow-next",
          prevEl: ".item-gallery__arrow-prev"
        },
        pagination: {
          el: ".item-gallery__increment",
          type: "fraction",
          formatFractionCurrent: (e) => (e < 10 ? "0" + e : e),
          formatFractionTotal: (e) => (e < 10 ? "0" + e : e)
        },
      }),
      createSlider(".projects-equipment__slider", {
        speed: 1e3,
        spaceBetween: 15,
        slidesPerView: 1,
        navigation: {
          nextEl: ".projects-equipment__arrow-next",
          prevEl: ".projects-equipment__arrow-prev"
        },
        pagination: {
          el: ".projects-equipment__increment",
          type: "fraction",
          formatFractionCurrent: (e) => (e < 10 ? "0" + e : e),
          formatFractionTotal: (e) => (e < 10 ? "0" + e : e)
        },
        breakpoints: {
          640: {
            slidesPerView: 2
          }
        },
      }),
      createSlider(".projects-gallery__slider", {
        speed: 1e3,
        spaceBetween: 15,
        navigation: {
          nextEl: ".projects-gallery__arrow-next",
          prevEl: ".projects-gallery__arrow-prev"
        },
        pagination: {
          el: ".projects-gallery__increment",
          type: "fraction",
          formatFractionCurrent: (e) => (e < 10 ? "0" + e : e),
          formatFractionTotal: (e) => (e < 10 ? "0" + e : e)
        },
      }),
      createSlider(".company-brands__slider", {
        slidesPerView: "auto",
        allowTouchMove: !1,
        navigation: {
          nextEl: ".company-arrow-next",
          prevEl: ".company-arrow-prev"
        },
        pagination: {
          el: ".company-brands__progressbar",
          type: "progressbar"
        },
      });
    const t = document.querySelector(".projects-slider");
    if (t) {
      const e = new Swiper(t, {
        loop: !0,
        speed: 1e3,
        autoplay: {
          delay: 4e3,
          disableOnInteraction: !1
        },
        navigation: {
          nextEl: ".projects-arrow-next",
          prevEl: ".projects-arrow-prev"
        },
        pagination: {
          el: ".projects-increment",
          type: "fraction",
          formatFractionCurrent: (e) => (e < 10 ? "0" + e : e),
          formatFractionTotal: (e) => (e < 10 ? "0" + e : e)
        },
        noSwiping: !0,
        noSwipingClass: "swiper-slide",
      });
      new IntersectionObserver((t, o) => {
        t.forEach((t) => (t.isIntersecting ? e.autoplay.start() : e.autoplay.stop()), {
          root: null,
          rootMargin: "150px",
          threshold: 1
        });
      }).observe(t);
    }
    const o = document.querySelector(".solutions-main");
    if (o) {
      const e = new Swiper(".solutions-second__slider", {
          loop: !0,
          speed: 1e3,
          noSwiping: !0,
          noSwipingClass: "swiper-slide"
        }),
        t = new Swiper(o, {
          loop: !0,
          speed: 1e3,
          navigation: {
            nextEl: ".solutions-arrow-next",
            prevEl: ".solutions-arrow-prev"
          },
          pagination: {
            el: ".solutions-increment",
            type: "fraction",
            formatFractionCurrent: (e) => (e < 10 ? "0" + e : e),
            formatFractionTotal: (e) => (e < 10 ? "0" + e : e)
          },
          noSwiping: !0,
          noSwipingClass: "swiper-slide",
          thumbs: {
            swiper: e
          },
          on: {
            init: function () {
              $(".solutions-next .text-lg").text($(".solutions-main .swiper-slide-next .title-lg").text());
            },
            slideChangeTransitionEnd: function () {
              $(".solutions-next .text-lg").text($(".solutions-main .swiper-slide-next .title-lg").text()).css({
                opacity: 1,
                transition: "opacity 0.2s"
              });
            },
            slideChangeTransitionStart: function () {
              $(".solutions-next .text-lg").css({
                opacity: 0,
                transition: "opacity 0.2s"
              });
            },
          },
        });
      (t.params.control = e), (e.params.control = t);
    }
    $(window).width() >= 610 ?
      ($(window).scroll(function () {
          const e = $(window).scrollTop();
          $(".header").hasClass("header-home") && (e > 1 ? $(".header").removeClass("header-clear") : $(".header").addClass("header-clear"));
        }),
        $(window).scrollTop() > 1 && $(".header").removeClass("header-clear")) :
      $(".header").removeClass("header-home"),
      $("[data-counter]").each(function (e, t) {
        const o = [...("" + $(t).text())];
        $(t).html('<span class="idle"></span><span class="hover"></span>'),
          $(t)
          .find(".idle")
          .html(o.map((e) => `<span class="char">${e}</span>`)),
          $(t)
          .find(".hover")
          .html(o.map((e) => `<span class="char">${e}</span>`)),
          $(window).scroll(function () {
            $(window).scrollTop() + $(window).height() - 160 > $(t).offset().top && $(t).addClass("is-inview");
          });
      }),
      $(".contact-open").click(function () {
        $(this).toggleClass("open"), $(".contact-map").slideToggle();
      }),
      $(".js-hover-link").each(function (e, t) {
        const o = $(t).height();
        $(t).css("height", o);
        const a = $(t).text();
        $(t).html(`<span>${a}</span><span>${a}</span>`);
      }),
      $("input").each(function (e, t) {
        $(t).blur(function () {
          "+7 " === $(this).val() || "" === $(this).val() ? $(this).closest("label").removeClass("fill") : $(this).closest("label").addClass("fill");
        });
      }),
      $(".js-team-show").click(function () {
        $(this).fadeToggle(200), $(".company-team__item").each((e, t) => ("none" === $(t).css("display") ? $(t).fadeToggle(200) : ""));
      }),
      $(".services-faq__item").click(function () {
        $(this).toggleClass("open"),
          $(this).find(".services-faq__text").slideToggle(),
          $(this).prevAll(".services-faq__item").removeClass("open").find(".services-faq__text").slideUp(),
          $(this).nextAll(".services-faq__item").removeClass("open").find(".services-faq__text").slideUp();
      }),
      $(".services-list a").bind("mouseenter", function () {
        $(".services-list .text-lg").stop().slideUp(250), $(this).find(".text-lg").stop().slideDown(250), $(".services-left").addClass("focus");
        const e = $(this).index();
        $(".services-left img.active").removeClass("active"), $(".services-left img").eq(e).addClass("active");
      }),
      $(".solutions-section").each(function (e, t) {
        $(".s-flex-js .s-flex", t).eq(0).addClass("active"),
          $(".solutions-section__list li", t).bind("mouseenter", function () {
            const e = $(this).index();
            $(".s-flex-js .s-flex.active", t).removeClass("active"), $(".s-flex-js .s-flex", t).eq(e).addClass("active");
          });
      }),
      $(".services-steps__images img").eq(0).addClass("active"),
      $(".services-steps__list li").bind("mouseenter", function () {
        $(".services-steps__list li").removeClass("active"), $(this).addClass("active");
        const e = $(this).index();
        $(".services-steps__images img.active").removeClass("active"), $(".services-steps__images img").eq(e).addClass("active");
      }),
      $(".triplets").each((e, t) => {
        const o = parseInt($(t).text());
        $(t).text(triplets(o));
      }),
      $(".catalog-item").each((e, t) => {
        const o = parseInt($(t).data("price"));
        $(".catalog-item__price", t).text(triplets(o));
      });
    const a = $(".vacancy-grid");
    if (0 !== a.length) {
      const e = $(".vacancy-item").length;
      1 === e && a.addClass("vacancy-grid__one"), 2 === e && a.addClass("vacancy-grid__two");
    }
    $(".table").each(function (e, t) {
        let o = 0;
        $(".table-row", t).each(function (e, t) {
          $(".table-col", t).each(function (e, t) {
              $(t).attr("data-col", e);
            }),
            0 === e ?
            ($(".table-col", t).each(function (e, t) {
                const a = $(t).html().replace(/\|/g, '</span><span class="table-switch">');
                $(t).html(`<span>${a}</span>`), 0 === e && setTimeout(() => (o = $(t).outerWidth()), 300);
              }),
              $(".table-col", t).click(function () {
                const e = $(this).attr("data-col");
                $(this).find(".table-switch").length > 0 && $('.table-col[data-col="' + e + '"]').toggleClass("clicked");
              })) :
            $(".table-col", t).each(function (e, t) {
              const a = $(t).html().replace(/\|/g, "</span><span>");
              $(t).html(`<span>${a}</span>`), 0 === e && setTimeout(() => $(t).css("width", o), 400);
            });
        });
      }),
      $(".file input, .form-file input").change(function () {
        const e = $(this).parent().find("p");
        "" != $(this).val() ? e.text("Выбрано файлов: " + $(this)[0].files.length) : e.text("Прикрепить файл");
      }),
      $(".btn-up").on("click", () => {
        $("html, body").animate({
          scrollTop: $("body").offset().top
        }, 1e3);
      }),
      $(".news-nav a").on("click", () => {
        $("html, body").animate({
          scrollTop: $($(this).attr("href")).offset().top - 120
        }, 1e3);
      }),
      $(".go-vacancy").on("click", () => {
        $("html, body").animate({
          scrollTop: $(".vacancy").offset().top - 125
        }, 1e3);
      }),
      $(".go-vacancy-job").on("click", () => {
        $("html, body").animate({
          scrollTop: $(".vacancy-job").offset().top - $(".header").outerHeight() + 1
        }, 1e3);
      }),
      localStorage.getItem("politic") ||
      ($(".modal-politic").fadeIn(300),
        $(".modal-politic__btn").on("click", () => {
          $(".modal-politic").fadeOut(300), localStorage.setItem("politic", "true");
        })),
      localStorage.getItem("modal") ||
      (setTimeout(() => {
          $(".modal").fadeIn(300);
        }, 2e4),
        $(".modal-close").on("click", () => {
          $(".modal").fadeOut(300), localStorage.setItem("modal", "true");
        }));
  }),
  $(".projects-item__title").each((e, t) => $(t).splitLines()),
  $(".news-item__title").each((e, t) => $(t).splitLines()),
  $(".vacancy-item__title").each((e, t) => $(t).splitLines()),
  $(".contact-map").click(function () {
    $(this).addClass("clicked");
  }),
  $(".table-name").click(function () {
    $(this).next(".table-overflow").slideToggle();
  });
const counter = () => {
  let e = 0,
    t = 0;
  const o = setInterval(() => {
    (t = e < 9 ? `0${++e}%` : ++e + "%"), (document.querySelector(".loader-progress").innerHTML = t), 100 === e && clearInterval(o);
  }, 20);
};

function generateToken() {
  const e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let t = "";
  for (let o = 0; o < 30; o++) t += e.charAt(Math.floor(Math.random() * e.length));
  return t;
}

function setToken(e) {
  const t = generateToken(),
    o = document.createElement("input");
  (o.type = "hidden"), (o.name = "t"), (o.value = t), e.appendChild(o);
}
$(".loader").length > 0 ?
  (window.onload = function () {
    counter(), setTimeout(() => $(".loader").addClass("loader-done"), 2500), setTimeout(() => initAnimate(), 2500);
  }) :
  initAnimate();
const forms = document.querySelectorAll('form:not([method="get"])');

function getUtmParams() {
  const e = new URLSearchParams(window.location.search),
    t = {};
  for (const [o, a] of e.entries()) "s" !== o && (t[o] = a);
  return t;
}

function setUtmParamsInForms(e) {
  document.querySelectorAll("form").forEach((t) => {
    Object.keys(e).forEach((o) => {
      if ("s" !== o) {
        const a = document.createElement("input");
        (a.type = "hidden"), (a.name = o), (a.value = e[o]), t.appendChild(a);
      }
    });
  });
}

function saveUtmParamsWithExpiration(e) {
  const t = {
    utmParams: e,
    expirationTime: new Date().getTime() + 864e5
  };
  localStorage.setItem("utmData", JSON.stringify(t));
}

function loadUtmParamsFromLocalStorage() {
  const e = JSON.parse(localStorage.getItem("utmData"));
  return e && e.expirationTime > new Date().getTime() ? e.utmParams : {};
}

function clearUtmParamsIfExpired() {
  const e = JSON.parse(localStorage.getItem("utmData"));
  e && e.expirationTime <= new Date().getTime() && localStorage.removeItem("utmData");
}
forms.forEach(function (e) {
  setToken(e),
    e.addEventListener("submit", function (t) {
      t.preventDefault();
      const o = e.querySelector(".masked");
      if (o && 18 != o.value.length) return t.preventDefault(), void alert("Пожалуйста, введите полный номер телефона.");
      const a = e.querySelector("button.btn");
      (a.style.opacity = 0.5), (a.style.cursor = "not-allowed"), (a.disabled = !0), e.submit();
    });
});
const utmParamsFromUrl = getUtmParams(),
  savedUtmParams = loadUtmParamsFromLocalStorage();
Object.keys(utmParamsFromUrl).length > 0 ? (setUtmParamsInForms(utmParamsFromUrl), saveUtmParamsWithExpiration(utmParamsFromUrl)) : Object.keys(savedUtmParams).length > 0 && setUtmParamsInForms(savedUtmParams), clearUtmParamsIfExpired();