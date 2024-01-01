gsap.registerPlugin(ScrollTrigger, SplitText);
const lenis = new Lenis({
  duration: 1.2,
  easing: (e) => Math.min(1, 1.001 - Math.pow(2, -10 * e)),
  direction: "vertical",
  gestureDirection: "vertical",
  smooth: !0,
  mouseMultiplier: 1,
  smoothTouch: !1,
  touchMultiplier: 2,
  inifinite: !1,
});
function raf(e) {
  lenis.raf(e), requestAnimationFrame(raf);
}
function cArtistCarousel(e) {
  var t = e.querySelector(".js-prev"),
    a = e.querySelector(".js-next");
  new Swiper(e.querySelector(".js-carousel"), {
    slidesPerView: "auto",
    touchStartPreventDefault: !1,
    speed: 600,
    spaceBetween: 40,
    grabCursor: !0,
    parallax: !0,
    freeMode: !1,
    navigation: { prevEl: t, nextEl: a, disabledClass: "is-disabled" },
  });
}
function cContentCarousel(e) {
  new Swiper(e.querySelector(".js-carousel"), {
    slidesPerView: "auto",
    touchStartPreventDefault: !1,
    autoHeight: !1,
    observer: !0,
    centeredSlides: !0,
    slidesPerGroupAuto: !1,
    loop: !1,
    loopedSlides: 10,
    watchSlidesProgress: !0,
    scrollbar: {
      draggable: !0,
      hide: !1,
      snapOnRelease: !0,
      el: ".js-scrollbar",
    },
    keyboard: { enabled: !0 },
    speed: 800,
    spaceBetween: 150,
    slideToClickedSlide: !0,
    observeParents: !0,
    grabCursor: !0,
    parallax: { enabled: !0 },
  });
}
function cFlexCards(e) {
  e.querySelectorAll(".js-card").forEach((e) => {
    e.addEventListener("mouseover", function () {
      e.classList.add("-active"),
        e.parentNode.querySelectorAll(".js-card:not(.-active)").forEach((e) => {
          e.classList.add("-inactive");
        });
    }),
      e.addEventListener("mouseout", function () {
        e.classList.remove("-active"),
          e.parentNode.querySelectorAll(".js-card.-inactive").forEach((e) => {
            e.classList.remove("-inactive");
          });
      });
  });
}
function cForm(e) {
  new Swiper(e.querySelector(".js-marquee"), {
    simulateTouch: !1,
    longSwipes: !1,
    slidesPerView: "auto",
    shortSwipes: !1,
    followFinger: !1,
    loopedSlides: 10,
    threshold: 5,
    a11y: { enabled: !1 },
    spaceBetween: 0,
    autoHeight: !1,
    allowTouchMove: !1,
    resistance: !1,
    preventClicks: !0,
    speed: 1e4,
    autoplay: { enabled: !0, delay: 1, disableOnInteraction: !1 },
    loop: !0,
  });
  function t() {
    String.prototype.trim ||
      (() => {
        var e = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        String.prototype.trim = () => this.replace(e, "");
      })(),
      e
        .querySelectorAll(
          'input:not([type="hidden"]), textarea:not([type="hidden"])'
        )
        .forEach(function (e) {
          var t = uGetNthParent(e, 2);
          "" !== e.value.trim() && t.classList.add("is-filled"),
            e.addEventListener("focus", (e) => {
              t.classList.add("is-filled");
            }),
            e.addEventListener("blur", (e) => {
              "" === e.target.value.trim() && t.classList.remove("is-filled");
            });
        });
  }
  function a() {
    const t = e.querySelectorAll("textarea");
    t.length > 0 &&
      t.forEach(function (e) {
        (e.rows = 4), autosize(e);
      });
  }
  t(),
    a(),
    e.querySelector(".gform_button").addEventListener("click", () => {
      setTimeout(() => {
        t(), a(), ScrollTrigger.refresh();
      }, 1500);
    }),
    document.addEventListener("gform_confirmation_loaded", (e, r, o) => {
      t(), a(), ScrollTrigger.refresh();
    });
}
function cFsMedia(e) {
  const t = new Plyr("#plyr-video", { ratio: "16:9", clickToPlay: !0 });
  e.querySelector(".plyr__video-wrapper").addEventListener("click", () => {
    t.pause();
  });
}
function cGenreList(e) {
  const t = e.querySelector(".c_list"),
    a = e.querySelectorAll(".js-item"),
    r = e.querySelector(".js-reveal");
  gsap.matchMedia().add("(min-width: 1024px)", () => {
    document.addEventListener("mousemove", (e) => {
      gsap.to(r, 0.4, { x: e.pageX, ease: Quart.easeOut }, 0);
    }),
      a.forEach(function (a) {
        const o = a.dataset.index,
          i = a.dataset.rotate,
          n = a.dataset.width;
        a.addEventListener("mousemove", (t) => {
          var a = e.querySelector('.js-reveal_image[data-index="' + o + '"]');
          gsap
            .timeline({ defaults: { duration: 0.8, ease: "Quart.easeOut" } })
            .to(r, 0.8, { scale: 1, opacity: 1, rotate: i, maxWidth: n }, 0)
            .to(a, { opacity: 0.9, zIndex: 1, scale: 1 }, 0);
        }),
          t.addEventListener("mousemove", (e) => {
            let a = t.getBoundingClientRect();
            gsap.to(
              r,
              0.8,
              {
                y: aCurrentMousePos.y - a.top - r.offsetHeight / 2,
                ease: Quart.easeOut,
              },
              0
            );
          }),
          a.addEventListener("mouseleave", (t) => {
            var a = e.querySelector('.js-reveal_image[data-index="' + o + '"]');
            gsap
              .timeline({ defaults: { duration: 0.8, ease: "Quart.easeOut" } })
              .to(r, 0.8, { scale: 0.6, opacity: 0, rotate: 8 }, 0)
              .to(a, { opacity: 0, zIndex: 0, scale: 1.4 }, 0);
          });
      });
  });
}
function cHeader() {
  const e = document.querySelector(".c-header"),
    t = e.querySelectorAll(".js-toggle-menu"),
    a = e.querySelectorAll(".js-menu-item");
  e.querySelectorAll(".js-menu-item.is-active");
  var r = Array.prototype.slice.call(a).findIndex(function (e) {
    return e.classList.contains("is-active");
  });
  function o() {
    e.classList.add("is-closing"),
      lenis.start(),
      e.classList.remove("is-open", "is-closing"),
      t.forEach((e) => {
        e.setAttribute("aria-expanded", "false");
      });
  }
  document.addEventListener("scroll", function (t) {
    window.scrollY <= 20
      ? e.classList.remove("has-scrolled")
      : e.classList.add("has-scrolled");
  }),
    t.forEach((a) => {
      a.addEventListener("click", (a) => {
        e.classList.contains("is-open")
          ? o()
          : (e.classList.add("is-open"),
            lenis.stop(),
            t.forEach((e) => {
              e.setAttribute("aria-expanded", "true");
            }));
      });
    });
  var i = new Swiper(e.querySelector(".js-menu-images"), {
    direction: "vertical",
    a11y: { enabled: !1 },
    allowTouchMove: !1,
    followFinger: !1,
    slidesPerGroupAuto: !1,
    initialSlide: r,
    simulateTouch: !1,
    effect: "coverflow",
    coverflowEffect: { depth: 100, rotate: 50, stretch: -24 },
    parallax: { enabled: !0 },
  });
  a.forEach((e) => {
    const t = e.getAttribute("data-index");
    (oSiblings = fnGetSiblings(e)),
      e.addEventListener("mouseenter", (e) => {
        oSiblings.forEach((e) => {
          e.classList.add("is-disabled");
        }),
          i.slideTo(t - 1, 600);
      }),
      e.addEventListener("mouseleave", (e) => {
        oSiblings.forEach((e) => {
          e.classList.remove("is-disabled");
        }),
          i.slideTo(r, 600);
      });
  });
  e.querySelectorAll(".c_menu .menu_links .item_link[data-scroll-to]").forEach(
    (e) => {
      e.addEventListener("click", (e) => {
        o();
      });
    }
  );
}
function cHeroMedia(e) {
  const t = gsap.matchMedia();
  var a = gsap.timeline({ defaults: { ease: Power3.out } });
  a.to(
    [e.querySelector(".content_upper"), e.querySelector(".heading")],
    {
      opacity: 1,
      y: 0,
      x: 0,
      delay: document.body.classList.contains("home") ? 2.5 : 0.5,
      duration: 1,
      stagger: 0.25,
    },
    0
  ),
    a.to(e.querySelector(".c_media"), { opacity: 1, scale: 1, duration: 1 }, 1),
    a.to(e.querySelector(".c_undermedia"), { opacity: 0.14, duration: 2 }, 1.2),
    t.add("(min-width: 1024px)", () => {
      gsap.to(e.querySelector(".heading"), {
        scrollTrigger: {
          trigger: e,
          start: "center center",
          end: "bottom top",
          toggleActions: "play reverse",
          scrub: 0.5,
        },
        x: 90,
        ease: "power1.out",
      });
    });
}
function cHeroMega(e) {
  const t = e.querySelector(".js-video-trigger"),
    a = gsap.matchMedia();
  var r = gsap.timeline({ defaults: { ease: Power3.out } }),
    o = new SplitText(e.querySelectorAll(".js-lines"), {
      type: "lines",
      linesClass: "line_inner",
    });
  new SplitText(e.querySelectorAll(".js-lines"), {
    type: "lines",
    linesClass: "sub_line",
  });
  if (
    (r.to(
      [e.querySelector(".content_upper"), e.querySelectorAll(".line_title")],
      {
        opacity: 1,
        y: 0,
        x: 0,
        delay: document.body.classList.contains("home") ? 2.5 : 0.5,
        duration: 1,
        stagger: 0.25,
      },
      0
    ),
    e.querySelectorAll(".js-lines").length > 0 &&
      r.to(
        o.lines,
        {
          opacity: 1,
          y: 0,
          x: 0,
          delay: document.body.classList.contains("home") ? 2.5 : 0.5,
          duration: 1,
          stagger: 0.25,
        },
        0
      ),
    r.to(e.querySelector(".c_media"), { opacity: 1, scale: 1, duration: 1 }, 1),
    a.add("(min-width: 1024px)", () => {
      gsap.to(e.querySelectorAll(".heading_line:first-child"), {
        scrollTrigger: {
          trigger: e,
          start: "center center",
          end: "bottom top",
          toggleActions: "play reverse",
          scrub: 0.5,
        },
        x: -60,
        ease: "power1.out",
      }),
        gsap.to(e.querySelectorAll(".heading_line:last-child"), {
          scrollTrigger: {
            trigger: e,
            start: "center center",
            end: "bottom top",
            toggleActions: "play reverse",
            scrub: 0.5,
          },
          x: 60,
          ease: "power1.out",
        });
    }),
    t)
  ) {
    Atropos({
      el: t.querySelector(".thumb_outer"),
      activeOffset: 40,
      shadowScale: 1.05,
    });
  }
}
function cInstaFeed(e) {
  new Swiper(e.querySelector(".js-carousel"), {
    slidesPerView: "auto",
    touchStartPreventDefault: !1,
    autoHeight: !1,
    observer: !0,
    centeredSlides: !0,
    slidesPerGroupAuto: !1,
    loop: !0,
    loopedSlides: 10,
    watchSlidesProgress: !0,
    keyboard: { enabled: !0 },
    speed: 800,
    slideToClickedSlide: !0,
    observeParents: !0,
    grabCursor: !0,
    navigation: {
      prevEl: e.querySelector(".js-prev"),
      nextEl: e.querySelector(".js-next"),
    },
    spaceBetween: 20,
    breakpoints: { 1024: { spaceBetween: 50 } },
  });
}
function cLogoCarousel(e) {
  new Swiper(e.querySelector(".js-marquee"), {
    simulateTouch: !1,
    longSwipes: !1,
    slidesPerView: "auto",
    shortSwipes: !1,
    followFinger: !1,
    loopedSlides: 10,
    threshold: 5,
    a11y: { enabled: !1 },
    spaceBetween: 18,
    autoHeight: !1,
    allowTouchMove: !1,
    resistance: !1,
    preventClicks: !0,
    speed: 1e4,
    autoplay: { enabled: !0, delay: 1, disableOnInteraction: !1 },
    loop: !0,
  });
}
function cMediaAsideStats(e) {
  e.querySelectorAll(".stats_item").forEach((e) => {
    var t = e.querySelector(".js-count"),
      a = { val: 0 },
      r = t.dataset.number,
      o = (r + "").split(" . "),
      i = o.length > 1 ? o[1].length : 0;
    gsap.to(a, {
      val: r,
      duration: 2,
      scrollTrigger: e,
      onUpdate: function () {
        let e = a.val.toFixed(i);
        (e = e.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")), (t.innerText = e);
      },
      onComplete: function () {
        e.classList.add("-animated");
      },
    });
  });
}
function cServiceAccords(e) {
  var t = e.querySelector(".main_heading"),
    a = e.querySelector(".heading_inner");
  document.documentElement.clientWidth >= 1230 &&
    ScrollTrigger.create({
      trigger: a,
      pin: !0,
      start: "top 50px",
      end: "+=" + (t.clientHeight - a.clientHeight),
    }),
    gsap.utils.toArray(".js-accordion").forEach(function (e) {
      const t = e.querySelector(".item_heading"),
        a = e.querySelector(".item_body");
      t.addEventListener("click", (t) => {
        t.preventDefault(),
          e.classList.contains("is-open")
            ? (e.classList.remove("is-open"),
              gsap.to(a, 0.4, {
                autoAlpha: 0,
                height: "0",
                delay: 0.2,
                onComplete: () => {
                  ScrollTrigger.refresh();
                },
                ease: Quart.easeInOut,
              }))
            : (e.classList.add("is-open"),
              gsap.to(a, 0.4, {
                autoAlpha: 1,
                delay: 0.2,
                height: "auto",
                onComplete: () => {
                  ScrollTrigger.refresh();
                },
                ease: Quart.easeInOut,
              }));
      });
    });
}
requestAnimationFrame(raf),
  document.documentElement.classList.add("has-loaded"),
  document.documentElement.classList.remove("is-loading"),
  "complete" === document.readyState || "loading" !== document.readyState
    ? document.documentElement.classList.add("is-ready")
    : document.addEventListener("DOMContentLoaded", function () {
        document.documentElement.classList.add("is-ready");
      }),
  document.addEventListener("DOMContentLoaded", function (e) {
    window.addEventListener("load", function (e) {
      uInviewDetection(),
        cHeader(),
        uCursor(),
        document.querySelectorAll(".c-hero-mega").forEach((e) => cHeroMega(e)),
        document
          .querySelectorAll(".c-hero-media")
          .forEach((e) => cHeroMedia(e)),
        uParallax(),
        document
          .querySelectorAll(".c-content-carousel")
          .forEach((e) => cContentCarousel(e)),
        document.querySelectorAll(".c-fs-media").forEach((e) => cFsMedia(e)),
        document
          .querySelectorAll(".c-service-accords")
          .forEach((e) => cServiceAccords(e)),
        document
          .querySelectorAll(".c-artist-carousel")
          .forEach((e) => cArtistCarousel(e)),
        document
          .querySelectorAll(".c-insta-feed")
          .forEach((e) => cInstaFeed(e)),
        document.querySelectorAll(".c-form").forEach((e) => cForm(e)),
        document
          .querySelectorAll(".c-logo-carousel")
          .forEach((e) => cLogoCarousel(e)),
        document
          .querySelectorAll(".c-media-aside-stats")
          .forEach((e) => cMediaAsideStats(e)),
        document
          .querySelectorAll(".c-genre-list")
          .forEach((e) => cGenreList(e)),
        document
          .querySelectorAll(".c-flex-cards")
          .forEach((e) => cFlexCards(e)),
        uHashLinks(),
        uButtons(),
        uPageTransition();
    });
  });
let oLazyText = document.querySelectorAll(".js-reveal-text");
oLazyText.forEach((e) => {
  var t = new SplitText(e, { type: "lines", linesClass: "lineChild" }),
    a =
      (new SplitText(e, { type: "lines", linesClass: "lineParent" }),
      e.getAttribute("data-reveal")),
    r = e.getAttribute("data-reveal-delay"),
    o = e.getAttribute("data-reveal-stagger"),
    i = e.getAttribute("data-reveal-start"),
    n =
      (e.getAttribute("data-reveal-markers"),
      gsap.timeline({
        scrollTrigger: { trigger: e, start: i || "top 80%" },
        delay: r || 0.2,
      }));
  n.set(e, { autoAlpha: 1 }),
    n.to(t.lines, a || 0.8, { y: 0, ease: Power3.out, stagger: o || 0.25 });
});
let oParallaxElements = document.querySelectorAll("[data-parallax]");
oParallaxElements &&
  oParallaxElements.forEach((e) => {
    gsap.set(e, {
      x: e.dataset.parallaxFromX || 0,
      y: e.dataset.parallaxFromY || 0,
    }),
      gsap.to(e, {
        scrollTrigger: {
          trigger: e,
          start: "top bottom",
          end: "bottom top",
          toggleActions: "play reverse",
          scrub: 0.5,
        },
        x: e.dataset.parallaxToX || 100,
        y: e.dataset.parallaxToY || 0,
        ease: "power1.out",
      });
  });
let oLazyImages = document.querySelectorAll(".u-lazy_img--1");
function uGetPosition(e) {
  var t = e.getBoundingClientRect(),
    a = document.documentElement;
  return {
    x: t.left + (window.pageXOffset || a.scrollLeft || 0),
    y: t.top + (window.pageYOffset || a.scrollTop || 0),
  };
}
oLazyImages.length > 0 &&
  oLazyImages.forEach((e) => {
    let t = e.querySelector(".u_src"),
      a = gsap.timeline({
        scrollTrigger: {
          trigger: e,
          start: "top 85%",
          end: "bottom top",
          markers: !0,
          scrub: !1,
        },
      });
    a.set(e, { autoAlpha: 1 }),
      a.from(e, 1.5, { yPercent: 100, ease: Power2.out }),
      a.from(t, 1.5, {
        yPercent: -100,
        scale: 1.3,
        delay: -1.5,
        ease: Power2.out,
      });
  });
const uApplyLeadingZeros = (e, t) => String(e).padStart(t, "0"),
  aCurrentMousePos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
function uFindAndRemoveClass(e, t = "is-selected") {
  "object" == typeof e &&
    null !== e &&
    Array.prototype.forEach.call(e, function (e) {
      e.classList.remove(t);
    });
}
function uGetNthParent(e, t) {
  return 0 === t ? e : uGetNthParent(e.parentNode, t - 1);
}
window.addEventListener("mousemove", (e) => {
  (aCurrentMousePos.x = e.x), (aCurrentMousePos.y = e.y);
});
let fnGetSiblings = function (e) {
  let t = [];
  if (!e.parentNode) return t;
  let a = e.parentNode.firstChild;
  for (; a; ) 1 === a.nodeType && a !== e && t.push(a), (a = a.nextSibling);
  return t;
};
function uButtons() {
  var e = gsap.utils.toArray(".u-btn--2");
  e.length > 0 &&
    e.forEach((e) => {
      var t = e.querySelector(".btn_arrow");
      e.classList.contains("-reveal-arrow") &&
        (e.addEventListener("mouseenter", function () {
          gsap.to(t, 0.3, { scale: 1, transformOrigin: "bottom left" });
        }),
        e.addEventListener("mouseleave", function () {
          gsap.to(t, 0.3, { scale: 0, transformOrigin: "top right" });
        })),
        e.classList.contains("-hide-arrow") &&
          e.addEventListener("mouseenter", function () {
            gsap.to(t, 0.2, {
              scale: 0,
              transformOrigin: "top right",
              onComplete: () => {
                gsap.to(t, 0.2, { scale: 1, transformOrigin: "bottom left" });
              },
            });
          });
    });
}
function uCursor() {
  const e = document.querySelector(".o-cursor"),
    t = gsap.matchMedia(),
    a = e.querySelector(".cursor_circle"),
    r = e.querySelector(".cursor_label");
  t.add("(min-width: 1024px)", () => {
    const t = { x: window.innerWidth / 2, y: window.innerHeight / 2 },
      o = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    var i = !1;
    document.addEventListener("mousemove", function () {
      i || (e.classList.add("is-visible"), (i = !0));
    });
    window.addEventListener("mousemove", (e) => {
      (t.x = e.clientX), (t.y = e.clientY);
    }),
      document.addEventListener("mouseleave", (t) => {
        (t.clientY <= 0 ||
          t.clientX <= 0 ||
          t.clientX >= window.innerWidth ||
          t.clientY >= window.innerHeight) &&
          e.classList.add("is-out");
      }),
      document.addEventListener("mouseenter", (t) => {
        (t.clientY >= 0 ||
          t.clientX >= 0 ||
          t.clientX <= window.innerWidth ||
          t.clientY <= window.innerHeight) &&
          e.classList.remove("is-out");
      });
    const n = () => {
      const r = Math.round(t.x - o.x),
        i = Math.round(t.y - o.y);
      (o.x += 0.1 * r), (o.y += 0.1 * i);
      const n = (function (e, t) {
          return (180 * Math.atan2(t, e)) / Math.PI;
        })(r, i),
        s = (function (e, t) {
          const a = Math.sqrt(Math.pow(e, 2) + Math.pow(t, 2));
          return Math.min(a / 1500, 0.15);
        })(r, i),
        l = "scale(" + (1 + s) + ", " + (1 - s) + ")",
        c = "rotate(" + n + "deg)",
        d = "translate3d(" + o.x + "px ," + o.y + "px, 0)";
      (e.style.transform = d), (a.style.transform = c + l);
    };
    requestAnimationFrame(function e() {
      n(), requestAnimationFrame(e);
    });
    document.querySelectorAll("[data-cursor]").forEach((t) => {
      t.addEventListener("mouseenter", function () {
        const t = this.dataset.cursor,
          a = this.dataset.cursorLabel;
        null !== a && r.setAttribute("data-label", a),
          e.classList.add("is-hover", "is-" + t);
      }),
        t.addEventListener("mousedown", function () {
          e.classList.add("is-down");
        }),
        t.addEventListener("mouseup", function () {
          e.classList.remove("is-hover", "is-down");
        }),
        t.addEventListener("mouseleave", function () {
          const t = this.dataset.cursor;
          e.classList.remove("is-hover", "is-down", "is-" + t);
        });
    });
  });
}
function uHashLinks() {
  var e = gsap.utils.toArray("[data-scroll-to]");
  e.length > 0 &&
    e.forEach((e) => {
      e.addEventListener("click", (t) => {
        t.preventDefault();
        var a = e.getAttribute("data-scroll-to"),
          r = e.getAttribute("data-scroll-offset"),
          o = e.getAttribute("data-scroll-duration");
        a || (a = e.getAttribute("href")),
          lenis.scrollTo(a || "#top", {
            offset: r ? Number(r) : 0,
            duration: o || 2,
            easing: (e) => Math.min(1, 1.001 - Math.pow(2, -10 * e)),
            immediate: !1,
          });
      });
    });
}
function uInviewDetection() {
  let e = gsap.utils.toArray("[data-inview-parent]");
  e &&
    void 0 !== e &&
    null != e &&
    e.forEach((e) => {
      gsap.set(e.querySelectorAll('[data-inview-child="1"]'), {
        autoAlpha: 0,
        y:
          null !== e.getAttribute("data-inview-y")
            ? e.getAttribute("data-inview-y")
            : 40,
      }),
        gsap.to(e.querySelectorAll('[data-inview-child="1"]'), {
          scrollTrigger: {
            trigger: e,
            markers:
              null !== e.getAttribute("data-inview-markers") &&
              e.getAttribute("data-inview-markers"),
            start:
              null !== e.getAttribute("data-inview-start")
                ? e.getAttribute("data-inview-start")
                : "top 85%",
            end:
              null !== e.getAttribute("data-inview-end")
                ? e.getAttribute("data-inview-end")
                : "bottom top",
            toggleClass: { targets: e, className: "is-inview" },
            onEnter: function () {
              e.classList.add("has-viewed");
            },
          },
          autoAlpha: 1,
          delay:
            null !== e.getAttribute("data-inview-delay")
              ? e.getAttribute("data-inview-delay")
              : 0.5,
          y: 0,
          duration:
            null !== e.getAttribute("data-inview-duration")
              ? e.getAttribute("data-inview-duration")
              : 0.8,
          stagger:
            null !== e.getAttribute("data-inview-stagger")
              ? e.getAttribute("data-inview-stagger")
              : 0.1,
          ease:
            null !== e.getAttribute("data-inview-ease")
              ? e.getAttribute("data-inview-ease")
              : "power1.out",
        });
    });
  let t = gsap.utils.toArray('[data-inview-single="1"]');
  t &&
    void 0 !== t &&
    null != t &&
    t.forEach((e) => {
      gsap.set(e, {
        autoAlpha: 0,
        y:
          null !== e.getAttribute("data-inview-y")
            ? e.getAttribute("data-inview-y")
            : 40,
      }),
        gsap.to(e, {
          scrollTrigger: {
            trigger: e,
            markers:
              null !== e.getAttribute("data-inview-markers") &&
              e.getAttribute("data-inview-markers"),
            start:
              null !== e.getAttribute("data-inview-start")
                ? e.getAttribute("data-inview-start")
                : "top 85%",
            end:
              null !== e.getAttribute("data-inview-end")
                ? e.getAttribute("data-inview-end")
                : "bottom top",
            toggleClass: { targets: e, className: "is-inview" },
            onEnter: function () {
              e.classList.add("has-viewed");
            },
          },
          autoAlpha: 1,
          delay:
            null !== e.getAttribute("data-inview-delay")
              ? e.getAttribute("data-inview-delay")
              : 0.5,
          y: 0,
          duration:
            null !== e.getAttribute("data-inview-duration")
              ? e.getAttribute("data-inview-duration")
              : 0.8,
          ease:
            null !== e.getAttribute("data-inview-ease")
              ? e.getAttribute("data-inview-ease")
              : "power1.out",
        });
    });
  document.querySelectorAll("[data-inview]").forEach((e) => {
    const t = e.dataset.inviewClass || "is-inview",
      a = e.dataset.inviewToggle || !1,
      r = e.dataset.inviewFunction,
      o = e.dataset.inviewParams;
    let i;
    r && window[r] && (i = window[r]),
      ScrollTrigger.create({
        trigger: e,
        start: e.dataset.inviewStart || "top bottom",
        end: e.dataset.inviewEnd || "bottom top",
        endTrigger: !1 !== a ? e : "html",
        delay: e.dataset.inviewDelay || 0,
        markers: !!e.dataset.inviewMarkers,
        onEnter: () => {
          e.classList.add(t), i && i(e, o);
        },
        onLeave: () => {
          !1 !== a && e.classList.remove(t);
        },
      });
  });
}
function uPageTransition() {
  const e = gsap.utils.toArray(
      '[data-load-container] a:not([data-scroll-to]):not([href^="#"]):not([href^="mailto:"]):not([href^="tel:"]):not([target="_blank"]):not([data-transition="disable"]):not(.facetwp-page):not([data-fslightbox])'
    ),
    t = document.querySelectorAll(".js-preloader .preloader_pane");
  var a = 0.75;
  void 0 !== e &&
    null != e &&
    e.forEach((e) => {
      e.addEventListener("click", (r) => {
        r.preventDefault(),
          document.documentElement.classList.add("is-leaving"),
          t.forEach((e) => {
            gsap.to(e, 0.75, {
              delay: a,
              scaleY: 1,
              transformOrigin: "bottom",
              ease: Power4.easeInOut,
            }),
              (a -= 0.25);
          }),
          lenis.stop(),
          (sNewLocation = e.href),
          setTimeout(() => {
            window.location = sNewLocation;
          }, 1500);
      });
    });
}
function uParallax() {
  const e = gsap.utils.toArray("[data-speed]");
  e.length > 0 &&
    e.forEach((e) => {
      var t = e.getAttribute("data-speed"),
        a = e.getAttribute("data-speed-offset"),
        r = e.getAttribute("data-speed-trigger"),
        o = e.getAttribute("data-speed-start"),
        i = e.getAttribute("data-speed-end"),
        n = e.getAttribute("data-speed-markers");
      a && "auto" === a
        ? (a = e.offsetHeight - e.parentElement.offsetHeight)
        : a && "auto" != a && (a = a),
        gsap.fromTo(
          e,
          { y: () => (a ? -a : "") },
          {
            y: function () {
              return a
                ? 0
                : (1 - parseFloat(t)) *
                    (ScrollTrigger.maxScroll(window) -
                      (this.scrollTrigger ? this.scrollTrigger.start : 0));
            },
            ease: "none",
            scrollTrigger: {
              trigger: r ? document.querySelector(r) : e,
              start: o || "top bottom",
              end: i || "bottom top",
              invalidateOnRefresh: !0,
              scrub: !0,
              markers: n || !1,
            },
          }
        );
    });
}
