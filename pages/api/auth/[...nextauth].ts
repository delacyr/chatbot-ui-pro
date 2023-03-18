import NextAuth, {NextAuthOptions} from "next-auth"
import GithubProvider from "next-auth/providers/github"

const authOptions: NextAuthOptions = {
    // Configure one or more authentication providers
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID!,
            clientSecret: process.env.GITHUB_SECRET!,

        }),
        // ...add more providers here
    ],
    secret: process.env.JWT_SECRET,
    callbacks: {
        async signIn({ user }) {
            return user.email === 'delacyr@gmail.com';
        }
    }
};

export default NextAuth(authOptions);