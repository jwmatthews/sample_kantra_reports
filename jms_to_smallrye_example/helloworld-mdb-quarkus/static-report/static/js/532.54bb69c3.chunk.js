"use strict";
(self.webpackChunkkonveyor_static_report =
  self.webpackChunkkonveyor_static_report || []).push([
  [532],
  {
    22532: (s, i, e) => {
      e.r(i), e.d(i, { default: () => j });
      e(72791);
      var n = e(16871),
        a = e(27054),
        c = e(59402),
        o = e(99978),
        r = e(25344),
        t = e(61088),
        l = e(17300),
        d = e(45145),
        p = e(17128),
        h = e(36075),
        x = e(17225),
        u = e(80184);
      const j = () => {
        const s = (0, n.bS)("/issues"),
          i = (0, n.bS)("/issues/applications"),
          e = (0, n.bS)("/issues/applications/:applicationId"),
          j = s
            ? void 0
            : i
              ? p.s
              : null === e || void 0 === e
                ? void 0
                : e.params.applicationId,
          k = (0, n.s0)();
        return (0, u.jsxs)(u.Fragment, {
          children: [
            (0, u.jsx)(a.NP, {
              padding: { default: "noPadding" },
              children: (0, u.jsx)(c.o, {
                children: (0, u.jsxs)(o.c, {
                  children: [
                    (0, u.jsx)(r.E, { children: "Application:" }),
                    (0, u.jsx)(r.E, {
                      children: (0, u.jsx)(h.wD, {
                        contextKeyFromURL: j,
                        onChange: (s) => {
                          k("/issues/applications/" + s.key);
                        },
                      }),
                    }),
                  ],
                }),
              }),
            }),
            (0, u.jsx)(t.i, {}),
            (0, u.jsx)(a.NP, {
              variant: a.Dk.light,
              children: (0, u.jsxs)(l.D, {
                children: [
                  (0, u.jsx)(d.x, { component: "h1", children: "Issues" }),
                  (0, u.jsx)(d.x, {
                    component: "small",
                    children:
                      "This report provides a concise summary of all issues identified.",
                  }),
                ],
              }),
            }),
            (0, u.jsx)(a.NP, {
              variant: a.Dk.default,
              children: (0, u.jsx)(x.F, { applicationId: j }),
            }),
          ],
        });
      };
    },
  },
]);
//# sourceMappingURL=532.54bb69c3.chunk.js.map
