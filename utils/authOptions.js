import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
    // ...add more providers here
  ],
  callbacks: {
    // invoked on suuccessful sign in
    async signIn({ profile }) {
      // connect to DB
      // Check if user exist
      // if not create new user
      // return true to allow new user creation
    },
    // session callback function that modifies the session object
    async session({ session }) {
      // get users from db
      // assign user ID from session
      // return session
    },
  },
};
// export default NextAuth(authOptions);
