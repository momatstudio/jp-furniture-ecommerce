// import { initAuth0 } from "@auth0/nextjs-auth0";

// export const auth0 = initAuth0({
//   baseURL: process.env.APP_BASE_URL,
//   issuerBaseURL: process.env.AUTH0_DOMAIN,
//   clientID: process.env.AUTH0_CLIENT_ID,
//   clientSecret: process.env.AUTH0_CLIENT_SECRET,
//   secret: process.env.AUTH0_SECRET,
//   routes: {
//     callback: "/api/auth/callback",
//     login: "/api/auth/login",
//     logout: "/api/auth/logout",
//   },
// });

// export const getServerSideAuth = async (req, res) => {
//   return await auth0.getSession(req, res);
// };
