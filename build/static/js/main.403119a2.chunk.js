(this["webpackJsonpassingment-11"] =
  this["webpackJsonpassingment-11"] || []).push([
  [0],
  {
    112: function (e, t, c) {},
    113: function (e, t, c) {},
    114: function (e, t, c) {},
    115: function (e, t, c) {},
    116: function (e, t, c) {},
    117: function (e, t, c) {},
    118: function (e, t, c) {},
    119: function (e, t, c) {},
    121: function (e, t, c) {
      "use strict";
      c.r(t);
      var n = c(2),
        a = c.n(n),
        s = c(34),
        r = c.n(s),
        i = (c(78), c(19)),
        l = c(12),
        j = (c(79), c(123)),
        o = c(124),
        d = c(125),
        b = c.p + "static/media/payment.18588cb5.png",
        u = (c(80), c(1)),
        h = function () {
          return Object(u.jsx)("div", {
            className: "footer-main-box",
            children: Object(u.jsxs)(j.a, {
              children: [
                Object(u.jsx)("div", {
                  className: "footer-main",
                  children: Object(u.jsxs)(o.a, {
                    children: [
                      Object(u.jsxs)(d.a, {
                        lg: 4,
                        sm: 12,
                        children: [
                          Object(u.jsx)("h2", { children: "Address" }),
                          Object(u.jsx)("p", {
                            children: "bonani , Dhaka - 1100",
                          }),
                          Object(u.jsx)("h2", { children: "Email" }),
                          Object(u.jsx)("p", {
                            children: "info@tourandtravel.com",
                          }),
                          Object(u.jsx)("h2", { children: "Phone" }),
                          Object(u.jsx)("p", { children: "+8801556554744" }),
                        ],
                      }),
                      Object(u.jsxs)(d.a, {
                        lg: 4,
                        sm: 12,
                        children: [
                          Object(u.jsx)("h2", {
                            children: "Our Term & Condition",
                          }),
                          Object(u.jsx)("p", {
                            children:
                              "Your Tour 7 days before you can cancel your travel And find refund policy. We can't give any othe facilities from our plicies.",
                          }),
                        ],
                      }),
                      Object(u.jsxs)(d.a, {
                        lg: 4,
                        sm: 12,
                        children: [
                          Object(u.jsx)("h2", { children: "Payments With" }),
                          Object(u.jsx)("img", {
                            className: "img-fluid",
                            src: b,
                            alt: "",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                Object(u.jsx)("div", {
                  className: "copyright text-center pt-4",
                  children: Object(u.jsx)("p", {
                    children:
                      "\xa9 All right regerved by 2021 || Tour and Travel",
                  }),
                }),
              ],
            }),
          });
        },
        O = c(127),
        m = c(128),
        x = c(10),
        p = c(44),
        f = c(69);
      c(83).config();
      var v = {
        apiKey: "AIzaSyC_YvV8wYElOh2UtP4L1YlCJvLR8-tw4zc",
        authDomain: "tour-travel-agency.firebaseapp.com",
        projectId: "tour-travel-agency",
        storageBucket: "tour-travel-agency.appspot.com",
        messagingSenderId: "945380382885",
        appId: "1:945380382885:web:183ed0b8682933e5eed54c",
      };
      (function () {
        Object(f.a)(v);
      })();
      var g = function () {
          var e = Object(n.useState)([]),
            t = Object(x.a)(e, 2),
            c = t[0],
            a = t[1],
            s = Object(n.useState)([]),
            r = Object(x.a)(s, 2),
            i = r[0],
            l = r[1],
            j = Object(n.useState)({}),
            o = Object(x.a)(j, 2),
            d = o[0],
            b = o[1],
            u = Object(n.useState)(!0),
            h = Object(x.a)(u, 2),
            O = h[0],
            m = h[1];
          Object(n.useEffect)(function () {
            fetch("https://tour-travel-booking.onrender.com/travelservices")
              .then(function (e) {
                return e.json();
              })
              .then(function (e) {
                return a(e);
              })
              .catch(function (e) {
                console.log(e.message);
              });
          }, []),
            Object(n.useEffect)(function () {
              fetch("https://tour-travel-booking.onrender.com/guides")
                .then(function (e) {
                  return e.json();
                })
                .then(function (e) {
                  return l(e);
                })
                .catch(function (e) {
                  console.log(e.message);
                });
            }, []);
          var f = Object(p.b)(),
            v = new p.a();
          return (
            Object(n.useEffect)(function () {
              m(!0);
              var e = Object(p.c)(f, function (e) {
                b(e || {}), m(!1);
              });
              return function () {
                return e;
              };
            }, []),
            {
              travelService: c,
              tourguide: i,
              handleGoogleSignIn: function () {
                return (
                  m(!0),
                  Object(p.d)(f, v).finally(function () {
                    return m(!1);
                  })
                );
              },
              user: d,
              handleSignOut: function () {
                m(!0),
                  Object(p.e)(f)
                    .then(function () {})
                    .finally(function () {
                      return m(!1);
                    });
              },
              loading: O,
              setLoading: m,
            }
          );
        },
        N = Object(n.createContext)(),
        y = function (e) {
          var t = e.children,
            c = g();
          return Object(u.jsx)(N.Provider, { value: c, children: t });
        },
        w = function () {
          return Object(n.useContext)(N);
        },
        S =
          (c(87),
          function () {
            var e = w(),
              t = e.user,
              c = e.handleSignOut;
            return Object(u.jsx)("div", {
              className: "sticky-top",
              children: Object(u.jsx)(O.a, {
                bg: "dark",
                expand: "lg",
                children: Object(u.jsxs)(j.a, {
                  children: [
                    Object(u.jsxs)(O.a.Brand, {
                      className: "text-white fw-bolder fs-2",
                      as: i.b,
                      to: "/",
                      children: [
                        "Travel ",
                        Object(u.jsx)("span", {
                          className: "agency",
                          children: "Agency",
                        }),
                      ],
                    }),
                    Object(u.jsx)(O.a.Toggle, {
                      "aria-controls": "basic-navbar-nav",
                    }),
                    Object(u.jsx)(O.a.Collapse, {
                      id: "basic-navbar-nav",
                      children: Object(u.jsxs)(m.a, {
                        className: "ms-auto",
                        children: [
                          Object(u.jsx)(m.a.Link, {
                            className: "text-white fs-5 nav-item",
                            as: i.b,
                            to: "/home",
                            children: "Home",
                          }),
                          Object(u.jsx)(m.a.Link, {
                            className: "text-white fs-5 nav-item",
                            as: i.b,
                            to: "/services",
                            children: "Services",
                          }),
                          t.email
                            ? Object(u.jsxs)(u.Fragment, {
                                children: [
                                  Object(u.jsx)(m.a.Link, {
                                    className: "text-white fs-5 nav-item",
                                    as: i.b,
                                    to: "/addservice",
                                    children: "Add Services",
                                  }),
                                  Object(u.jsx)(m.a.Link, {
                                    className: "text-white fs-5 nav-item",
                                    as: i.b,
                                    to: "/manageorder",
                                    children: "Manage Order",
                                  }),
                                  " ",
                                ],
                              })
                            : "",
                          Object(u.jsx)(m.a.Link, {
                            className: "text-white fs-5 nav-item",
                            as: i.b,
                            to: "/contact",
                            children: "Contact",
                          }),
                          t.displayName
                            ? Object(u.jsx)(m.a.Link, {
                                className: "text-white fs-5 nav-item",
                                children: t.displayName,
                              })
                            : "",
                          t.email
                            ? Object(u.jsx)(m.a.Link, {
                                onClick: c,
                                className:
                                  "header-button btn btn-lg py-2 px-3 ms-2 text-white",
                                children: "Log Out",
                              })
                            : Object(u.jsx)(m.a.Link, {
                                className:
                                  "header-button btn btn-lg py-2 px-3 ms-2 text-white",
                                as: i.b,
                                to: "/login",
                                children: "Login",
                              }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
            });
          }),
        k =
          (c(94),
          function () {
            var e,
              t = w(),
              c = t.handleGoogleSignIn,
              n = t.setLoading,
              a = Object(l.g)(),
              s = Object(l.h)(),
              r =
                (null === s ||
                void 0 === s ||
                null === (e = s.state) ||
                void 0 === e
                  ? void 0
                  : e.from) || "/";
            return Object(u.jsx)("div", {
              className: "google-box",
              children: Object(u.jsxs)("div", {
                className: "google-main-box",
                children: [
                  Object(u.jsx)("h1", {
                    className: "pb-5",
                    children: "Log In here",
                  }),
                  Object(u.jsxs)("div", {
                    onClick: function () {
                      c()
                        .then(function (e) {
                          a.push(r);
                        })
                        .finally(function () {
                          return n(!1);
                        });
                    },
                    className: "google-btn",
                    children: [
                      Object(u.jsx)("i", { className: "fab fa-google" }),
                      Object(u.jsx)("input", {
                        type: "button",
                        value: "Google Log In",
                      }),
                    ],
                  }),
                ],
              }),
            });
          }),
        C = c(5),
        E = c(29),
        L = c.n(E),
        P = c(52),
        T =
          (c(112),
          function () {
            var e = Object(P.a)(),
              t = e.register,
              c = e.handleSubmit,
              n = e.reset;
            return Object(u.jsxs)("div", {
              className: "py-5 add-service-form",
              children: [
                Object(u.jsx)("h1", {
                  className: "main-title text-center pb-5",
                  children: "Add your Service",
                }),
                Object(u.jsxs)("form", {
                  onSubmit: c(function (e) {
                    L.a
                      .post(
                        "https://tour-travel-booking.onrender.com/travelservices",
                        e
                      )
                      .then(function (e) {
                        e.data.insertedId &&
                          (alert("Data upload successfully"), n());
                      });
                  }),
                  children: [
                    Object(u.jsx)(
                      "input",
                      Object(C.a)(
                        { placeholder: "Enter your Service name" },
                        t("name")
                      )
                    ),
                    Object(u.jsx)(
                      "input",
                      Object(C.a)(
                        { placeholder: "Enter your service price" },
                        t("pricing")
                      )
                    ),
                    Object(u.jsx)(
                      "input",
                      Object(C.a)(
                        { placeholder: "Enter your service img url" },
                        t("img")
                      )
                    ),
                    Object(u.jsx)(
                      "textarea",
                      Object(C.a)(
                        Object(C.a)(
                          { placeholder: "Enter your service description" },
                          t("description")
                        ),
                        {},
                        { cols: "10", rows: "5" }
                      )
                    ),
                    Object(u.jsx)("input", {
                      type: "submit",
                      value: "Add Service",
                    }),
                  ],
                }),
              ],
            });
          }),
        D =
          (c(113),
          function () {
            return Object(u.jsxs)("div", {
              children: [
                Object(u.jsx)("h1", {
                  className: "text-center py-5",
                  children: "Get in touch",
                }),
                Object(u.jsxs)("div", {
                  className: "form-sub",
                  children: [
                    Object(u.jsx)("input", {
                      type: "email",
                      placeholder: "Enter your email",
                    }),
                    Object(u.jsx)("input", {
                      type: "text",
                      placeholder: "Enter your name",
                    }),
                    Object(u.jsx)("textarea", {
                      cols: "15",
                      rows: "5",
                      placeholder: "Write your messege",
                    }),
                    Object(u.jsx)("input", { type: "submit", value: "Send" }),
                  ],
                }),
                Object(u.jsx)("div", {
                  className: "google-map",
                  children: Object(u.jsx)(j.a, {
                    children: Object(u.jsx)("iframe", {
                      src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.5404846203946!2d90.41495281536243!3d23.72809829554385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9e8574b132b%3A0xa4d6b450b4c66926!2sBiman%20Bhaban!5e0!3m2!1sen!2sbd!4v1635529120532!5m2!1sen!2sbd",
                      title: "google-map",
                      className: "w-100",
                      height: "450px",
                    }),
                  }),
                }),
              ],
            });
          }),
        I = (c(114), c.p + "static/media/about-us.52763bab.jpg"),
        A =
          (c(115),
          function (e) {
            var t = e.data,
              c = t._id,
              n = t.name,
              a = t.pricing,
              s = t.description,
              r = t.img;
            return Object(u.jsx)(d.a, {
              lg: 4,
              sm: 12,
              children: Object(u.jsxs)("div", {
                className: "mb-5 single-service",
                children: [
                  Object(u.jsx)("img", {
                    className: "img-fluid rounded-2",
                    src: r,
                    alt: "",
                  }),
                  Object(u.jsx)("h3", { children: n }),
                  Object(u.jsxs)("h4", { children: [a, " $"] }),
                  Object(u.jsx)("p", { children: s }),
                  Object(u.jsxs)(i.b, {
                    to: "/purchase/".concat(c),
                    className: "cmn-btn",
                    children: [
                      "Purchase Now ",
                      Object(u.jsx)("i", { className: "fas fa-cart-plus" }),
                    ],
                  }),
                ],
              }),
            });
          }),
        U =
          (c(116),
          function (e) {
            var t = e.data,
              c = t.img,
              n = t.name,
              a = t.job;
            return Object(u.jsx)(d.a, {
              lg: 3,
              sm: 12,
              children: Object(u.jsxs)("div", {
                className: "mb-5 single-service single-guide text-center",
                children: [
                  Object(u.jsx)("img", {
                    className: "img-fluid rounded-circle p-1",
                    src: c,
                    alt: "",
                  }),
                  Object(u.jsx)("h3", { children: n }),
                  Object(u.jsx)("p", { children: a }),
                ],
              }),
            });
          }),
        B = function () {
          var e = w(),
            t = e.travelService,
            c = e.tourguide;
          return Object(u.jsxs)("div", {
            children: [
              Object(u.jsx)("div", {
                className: "banner-section",
                children: Object(u.jsx)(j.a, {
                  children: Object(u.jsxs)("div", {
                    className: "banner-content",
                    children: [
                      Object(u.jsx)("h1", {
                        className: "banner-title",
                        children:
                          "Explore The World ! Life is short and the world is Wide",
                      }),
                      Object(u.jsx)("p", {
                        className: "banner-des",
                        children:
                          "Book with us and book it out of here. Go a Safe Journey on With Us.",
                      }),
                    ],
                  }),
                }),
              }),
              Object(u.jsxs)("div", {
                className: "about-section py-5",
                children: [
                  Object(u.jsx)("h1", {
                    className: "main-title text-center",
                    children: "About Us",
                  }),
                  Object(u.jsx)(j.a, {
                    children: Object(u.jsx)("div", {
                      className: "about-main py-5",
                      children: Object(u.jsxs)(o.a, {
                        className: "align-items-center",
                        children: [
                          Object(u.jsxs)(d.a, {
                            md: 6,
                            sm: 12,
                            children: [
                              Object(u.jsx)("p", {
                                className: "about-des",
                                children:
                                  "The smell of pine drifts through your open window, a kaleidoscope of colorful leaves greets you around every turn, and the sweet taste of apple lingers as you make your way to your next destination. It must be fall in New Hampshire. From leaf-peeping to wine tasting, day trips to weekend adventures, explore everything the Granite State has to offer on a road trip this fall. Discover Your New.",
                              }),
                              Object(u.jsxs)("ul", {
                                className: "list-unstyled",
                                children: [
                                  Object(u.jsx)("li", {
                                    className: "about-des mb-2",
                                    children: "Save Journey With Comfortabel",
                                  }),
                                  Object(u.jsx)("li", {
                                    className: "about-des mb-2",
                                    children: "Save Your Time",
                                  }),
                                  Object(u.jsx)("li", {
                                    className: "about-des mb-2",
                                    children: "7 Days Refund Policy",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          Object(u.jsx)(d.a, {
                            md: 6,
                            sm: 12,
                            children: Object(u.jsx)("img", {
                              className: "img-fluid rounded-2",
                              src: I,
                              alt: "",
                            }),
                          }),
                        ],
                      }),
                    }),
                  }),
                ],
              }),
              Object(u.jsxs)("div", {
                className: "featured-services pb-5",
                children: [
                  Object(u.jsx)("h1", {
                    className: "main-title text-center pb-5",
                    children: "Our Services",
                  }),
                  Object(u.jsxs)(j.a, {
                    children: [
                      Object(u.jsx)(o.a, {
                        children: t.slice(0, 6).map(function (e) {
                          return Object(u.jsx)(A, { data: e }, e._id);
                        }),
                      }),
                      Object(u.jsx)("div", {
                        className: "text-center",
                        children: Object(u.jsxs)(i.b, {
                          className: "cmn-btn",
                          to: "/services",
                          children: [
                            "See More Service ",
                            Object(u.jsx)("i", {
                              className: "fas fa-arrow-right",
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              Object(u.jsxs)("div", {
                className: "featured-services pb-5",
                children: [
                  Object(u.jsx)("h1", {
                    className: "main-title text-center pb-5",
                    children: "Our Tour Guide",
                  }),
                  Object(u.jsx)(j.a, {
                    children: Object(u.jsx)(o.a, {
                      children: c.map(function (e) {
                        return Object(u.jsx)(U, { data: e }, e._id);
                      }),
                    }),
                  }),
                ],
              }),
              Object(u.jsx)("div", {
                className: "mb-5",
                children: Object(u.jsx)(j.a, {
                  children: Object(u.jsx)("div", {
                    className: "contact-home p-5",
                    children: Object(u.jsxs)(o.a, {
                      className: "align-items-center",
                      children: [
                        Object(u.jsx)(d.a, {
                          lg: 6,
                          sm: 12,
                          children: Object(u.jsxs)("div", {
                            className: "cont-text",
                            children: [
                              Object(u.jsx)("h1", {
                                children: "Go a happy Journey With Us",
                              }),
                              Object(u.jsx)("p", {
                                children: "Please Contact Us",
                              }),
                            ],
                          }),
                        }),
                        Object(u.jsx)(d.a, {
                          lg: 6,
                          sm: 12,
                          children: Object(u.jsx)("div", {
                            className: "text-center",
                            children: Object(u.jsxs)(i.b, {
                              className: "cont-btn",
                              to: "/contact",
                              children: [
                                "Contact Us ",
                                Object(u.jsx)("i", {
                                  className: "fas fa-arrow-right ms-3",
                                }),
                              ],
                            }),
                          }),
                        }),
                      ],
                    }),
                  }),
                }),
              }),
            ],
          });
        },
        Y =
          (c(117),
          function (e) {
            var t,
              c = null === e || void 0 === e ? void 0 : e.data,
              n = e.setorder,
              a = e.order;
            return Object(u.jsx)(d.a, {
              lg: 4,
              sm: 12,
              children: Object(u.jsxs)("div", {
                className: "manage-order mb-4 p-3",
                children: [
                  Object(u.jsx)("img", {
                    className: "img-fluid rounded-3 mb-3",
                    src:
                      null === (t = c.service) || void 0 === t ? void 0 : t.img,
                    alt: "",
                  }),
                  Object(u.jsxs)("p", {
                    children: [
                      "Email/Phone: ",
                      null === c || void 0 === c ? void 0 : c.email,
                    ],
                  }),
                  Object(u.jsxs)("p", {
                    children: [
                      "Journey Date : ",
                      null === c || void 0 === c ? void 0 : c.journeydate,
                    ],
                  }),
                  Object(u.jsxs)("p", {
                    children: [
                      "Return Date : ",
                      null === c || void 0 === c ? void 0 : c.returndate,
                    ],
                  }),
                  Object(u.jsxs)("p", {
                    children: [
                      "Paseengers : ",
                      null === c || void 0 === c ? void 0 : c.people,
                    ],
                  }),
                  Object(u.jsxs)("div", {
                    children: [
                      Object(u.jsx)("button", {
                        onClick: function () {
                          return (
                            (e = c._id),
                            void (
                              window.confirm(
                                "Are your Sure You Want To Delete"
                              ) &&
                              L.a
                                .delete(
                                  "https://tour-travel-booking.onrender.com/order/".concat(
                                    e
                                  )
                                )
                                .then(function (t) {
                                  if (t.data.deletedCount > 0) {
                                    alert("Deleted Order Successfully");
                                    var c = a.filter(function (t) {
                                      return t._id !== e;
                                    });
                                    n(c);
                                  }
                                })
                            )
                          );
                          var e;
                        },
                        className: "simi-btn me-3",
                        children: "Delete",
                      }),
                      Object(u.jsx)(i.b, {
                        to: "/order/update/".concat(c._id),
                        children: Object(u.jsx)("button", {
                          className: "simi-btn",
                          children: "Update",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            });
          }),
        _ = function () {
          var e = Object(n.useState)([]),
            t = Object(x.a)(e, 2),
            c = t[0],
            a = t[1];
          return (
            Object(n.useEffect)(function () {
              L.a
                .get("https://tour-travel-booking.onrender.com/order")
                .then(function (e) {
                  a(e.data);
                });
            }, []),
            Object(u.jsx)("div", {
              className: "py-5",
              children: Object(u.jsxs)(j.a, {
                children: [
                  Object(u.jsx)("h1", {
                    className: "main-title text-center pb-5",
                    children: "Manage Orders",
                  }),
                  Object(u.jsx)(o.a, {
                    children: c.map(function (e) {
                      return Object(u.jsx)(
                        Y,
                        { data: e, setorder: a, order: c },
                        e._id
                      );
                    }),
                  }),
                ],
              }),
            })
          );
        },
        W = function () {
          var e = Object(l.i)().id,
            t = Object(n.useState)({}),
            c = Object(x.a)(t, 2),
            a = c[0],
            s = c[1],
            r = Object(l.g)();
          Object(n.useEffect)(function () {
            L.a
              .get("https://tour-travel-booking.onrender.com/order/".concat(e))
              .then(function (e) {
                s(e.data);
              });
          }, []);
          var i = function () {
            r.push("/manageorder");
          };
          return Object(u.jsxs)("div", {
            className: "py-5",
            children: [
              Object(u.jsx)("h1", {
                className: "main-title text-center pb-5",
                children: "Update Your Data",
              }),
              Object(u.jsxs)("form", {
                className: "form-sub",
                onSubmit: function (t) {
                  t.preventDefault(),
                    window.confirm("Update Your Data Surely") &&
                      L.a
                        .put(
                          "https://tour-travel-booking.onrender.com/order/".concat(
                            e
                          ),
                          a
                        )
                        .then(function (e) {
                          e.data.modifiedCount > 0 &&
                            (alert("Data Updated Successfully"), i());
                        });
                },
                children: [
                  Object(u.jsx)("input", {
                    onChange: function (e) {
                      var t = e.target.value,
                        c = Object(C.a)({}, a);
                      (c.email = t), s(c);
                    },
                    value: a.email || "",
                  }),
                  Object(u.jsx)("input", {
                    onChange: function (e) {
                      var t = e.target.value,
                        c = Object(C.a)({}, a);
                      (c.journeydate = t), s(c);
                    },
                    value: a.journeydate || "",
                  }),
                  Object(u.jsx)("input", {
                    onChange: function (e) {
                      var t = e.target.value,
                        c = Object(C.a)({}, a);
                      (c.returndate = t), s(c);
                    },
                    value: a.returndate || "",
                  }),
                  Object(u.jsx)("input", {
                    onChange: function (e) {
                      var t = e.target.value,
                        c = Object(C.a)({}, a);
                      (c.people = t), s(c);
                    },
                    value: a.people || "",
                  }),
                  Object(u.jsx)("input", { type: "submit", value: "Update" }),
                ],
              }),
            ],
          });
        },
        G =
          (c(118),
          function () {
            return Object(u.jsxs)("div", {
              className: "not-found-page text-center",
              children: [
                Object(u.jsxs)("h1", {
                  children: [
                    "4",
                    Object(u.jsx)("span", { children: "0" }),
                    "4",
                  ],
                }),
                Object(u.jsx)("p", { children: "This Page Not Found" }),
                Object(u.jsx)("div", {
                  className: "text-center not-btn",
                  children: Object(u.jsxs)(i.b, {
                    className: "cmn-btn",
                    to: "/home",
                    children: [
                      "Back To Home Page ",
                      Object(u.jsx)("i", { className: "fas fa-arrow-right" }),
                    ],
                  }),
                }),
              ],
            });
          }),
        F =
          (c(119),
          function () {
            var e,
              t,
              c,
              a = Object(l.i)().id,
              s = Object(P.a)(),
              r = s.register,
              i = s.handleSubmit,
              b = s.reset,
              h = Object(n.useState)({}),
              O = Object(x.a)(h, 2),
              m = O[0],
              p = O[1],
              f = Object(l.g)();
            Object(n.useEffect)(function () {
              L.a
                .get(
                  "https://tour-travel-booking.onrender.com/travelservices/".concat(
                    a
                  )
                )
                .then(function (e) {
                  p(e);
                });
            }, []);
            return Object(u.jsx)("div", {
              className: "py-5",
              children: Object(u.jsxs)(j.a, {
                children: [
                  Object(u.jsx)("h1", {
                    className: "main-title text-center pb-5 pt-3",
                    children: "Purchase Now",
                  }),
                  Object(u.jsxs)(o.a, {
                    children: [
                      Object(u.jsx)(d.a, {
                        lg: 6,
                        children: Object(u.jsx)("div", {
                          className:
                            "border border-primary border-2 rounded-3 p-2",
                          children: Object(u.jsxs)(o.a, {
                            className: "align-items-center",
                            children: [
                              Object(u.jsx)(d.a, {
                                sm: 6,
                                children: Object(u.jsx)("img", {
                                  className: "img-fluid border border-dark p-1",
                                  src:
                                    null === m ||
                                    void 0 === m ||
                                    null === (e = m.data) ||
                                    void 0 === e
                                      ? void 0
                                      : e.img,
                                  alt: "",
                                }),
                              }),
                              Object(u.jsxs)(d.a, {
                                sm: 6,
                                children: [
                                  Object(u.jsx)("h1", {
                                    children:
                                      null === m ||
                                      void 0 === m ||
                                      null === (t = m.data) ||
                                      void 0 === t
                                        ? void 0
                                        : t.name,
                                  }),
                                  Object(u.jsxs)("h3", {
                                    children: [
                                      null === m ||
                                      void 0 === m ||
                                      null === (c = m.data) ||
                                      void 0 === c
                                        ? void 0
                                        : c.pricing,
                                      " $",
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      }),
                      Object(u.jsx)(d.a, {
                        lg: 6,
                        children: Object(u.jsxs)("form", {
                          className: "booking-form",
                          onSubmit: i(function (e) {
                            (e.service = m.data),
                              L.a
                                .post(
                                  "https://tour-travel-booking.onrender.com/order",
                                  e
                                )
                                .then(function (e) {
                                  e.data.insertedId &&
                                    (alert(
                                      "You Booking Successfully . Thanks for join with us"
                                    ),
                                    b(),
                                    f.push("/manageorder"));
                                });
                          }),
                          children: [
                            Object(u.jsx)(
                              "input",
                              Object(C.a)(
                                Object(C.a)(
                                  { placeholder: "Enter your email" },
                                  r("email")
                                ),
                                {},
                                { required: !0 }
                              )
                            ),
                            Object(u.jsx)(
                              "input",
                              Object(C.a)(
                                Object(C.a)(
                                  { placeholder: "Enter your journey date" },
                                  r("journeydate")
                                ),
                                {},
                                { required: !0 }
                              )
                            ),
                            Object(u.jsx)(
                              "input",
                              Object(C.a)(
                                Object(C.a)(
                                  { placeholder: "Enter your return date" },
                                  r("returndate")
                                ),
                                {},
                                { required: !0 }
                              )
                            ),
                            Object(u.jsx)(
                              "input",
                              Object(C.a)(
                                Object(C.a)(
                                  {
                                    placeholder: "Number of people go",
                                    type: "number",
                                  },
                                  r("people")
                                ),
                                {},
                                { required: !0 }
                              )
                            ),
                            Object(u.jsx)("input", {
                              type: "submit",
                              value: "Booking",
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            });
          }),
        J = function (e) {
          var t = e.data,
            c = t._id,
            n = t.name,
            a = t.pricing,
            s = t.description,
            r = t.img;
          return Object(u.jsx)(d.a, {
            lg: 4,
            sm: 12,
            children: Object(u.jsxs)("div", {
              className: "mb-5 single-service",
              children: [
                Object(u.jsx)("img", {
                  className: "img-fluid rounded-2",
                  src: r,
                  alt: "",
                }),
                Object(u.jsx)("h3", { children: n }),
                Object(u.jsxs)("h4", { children: [a, " $"] }),
                Object(u.jsx)("p", { children: s }),
                Object(u.jsxs)(i.b, {
                  className: "cmn-btn",
                  to: "/purchase/".concat(c),
                  children: [
                    "Purchase Now ",
                    Object(u.jsx)("i", { className: "fas fa-cart-plus" }),
                  ],
                }),
              ],
            }),
          });
        },
        q = function () {
          var e = w().travelService;
          return Object(u.jsxs)("div", {
            children: [
              Object(u.jsx)("h1", {
                className: "main-title text-center py-5",
                children: "Our Services Plan",
              }),
              Object(u.jsx)(j.a, {
                children: Object(u.jsx)(o.a, {
                  children: e.map(function (e) {
                    return Object(u.jsx)(J, { data: e }, e._id);
                  }),
                }),
              }),
            ],
          });
        },
        M = c(9),
        H = c(126),
        R = ["children"],
        $ = function (e) {
          var t = e.children,
            c = Object(M.a)(e, R),
            n = w(),
            a = n.user;
          return n.loading
            ? Object(u.jsx)("div", {
                className: "text-center",
                style: { padding: "200px 0" },
                children: Object(u.jsx)(H.a, {
                  animation: "grow",
                  variant: "warning",
                }),
              })
            : Object(u.jsx)(
                l.b,
                Object(C.a)(
                  Object(C.a)({}, c),
                  {},
                  {
                    render: function (e) {
                      var c = e.location;
                      return (null === a || void 0 === a ? void 0 : a.email)
                        ? t
                        : Object(u.jsx)(l.a, {
                            to: { pathname: "/login", state: { from: c } },
                          });
                    },
                  }
                )
              );
        };
      var z = function () {
          return Object(u.jsx)(y, {
            children: Object(u.jsxs)(i.a, {
              children: [
                Object(u.jsx)(S, {}),
                Object(u.jsxs)(l.d, {
                  children: [
                    Object(u.jsx)(l.b, {
                      exact: !0,
                      path: "/",
                      children: Object(u.jsx)(B, {}),
                    }),
                    Object(u.jsx)(l.b, {
                      exact: !0,
                      path: "/home",
                      children: Object(u.jsx)(B, {}),
                    }),
                    Object(u.jsx)(l.b, {
                      exact: !0,
                      path: "/services",
                      children: Object(u.jsx)(q, {}),
                    }),
                    Object(u.jsx)(l.b, {
                      exact: !0,
                      path: "/contact",
                      children: Object(u.jsx)(D, {}),
                    }),
                    Object(u.jsx)($, {
                      exact: !0,
                      path: "/addservice",
                      children: Object(u.jsx)(T, {}),
                    }),
                    Object(u.jsx)($, {
                      exact: !0,
                      path: "/purchase/:id",
                      children: Object(u.jsx)(F, {}),
                    }),
                    Object(u.jsx)($, {
                      exact: !0,
                      path: "/manageorder",
                      children: Object(u.jsx)(_, {}),
                    }),
                    Object(u.jsx)($, {
                      exact: !0,
                      path: "/order/update/:id",
                      children: Object(u.jsx)(W, {}),
                    }),
                    Object(u.jsx)(l.b, {
                      exact: !0,
                      path: "/login",
                      children: Object(u.jsx)(k, {}),
                    }),
                    Object(u.jsx)(l.b, {
                      path: "/*",
                      children: Object(u.jsx)(G, {}),
                    }),
                  ],
                }),
                Object(u.jsx)(h, {}),
              ],
            }),
          });
        },
        K = function (e) {
          e &&
            e instanceof Function &&
            c
              .e(3)
              .then(c.bind(null, 129))
              .then(function (t) {
                var c = t.getCLS,
                  n = t.getFID,
                  a = t.getFCP,
                  s = t.getLCP,
                  r = t.getTTFB;
                c(e), n(e), a(e), s(e), r(e);
              });
        };
      c(120);
      r.a.render(
        Object(u.jsx)(a.a.StrictMode, { children: Object(u.jsx)(z, {}) }),
        document.getElementById("root")
      ),
        K();
    },
    78: function (e, t, c) {},
    79: function (e, t, c) {},
    80: function (e, t, c) {},
    87: function (e, t, c) {},
    94: function (e, t, c) {},
  },
  [[121, 1, 2]],
]);
//# sourceMappingURL=main.403119a2.chunk.js.map