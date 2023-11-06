import NextAuth from "next-auth/next"
import GoogleProvider from 'next-auth/providers/google'
import { connectUser } from '@/lib/dbUser'
import User from '@/models/User';

const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        })
    ],

    callbacks: {
        async signIn({ user, account }) {

            //check if acccount provider is google
            if (account.provider === 'google') {
                const { name, email } = user;
                console.log(user);

                try {
                    await connectUser();

                    const userExists = await User.findOne({ email });

                    if (!userExists) {
                        //    http://localhost:3000/
                        //    https://www.deepaknegi.in/
                        const res = await fetch('https://www.deepaknegi.in/api/user', {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify({
                                name,
                                email,
                            })
                        });

                        if (res.ok) {
                            return user;
                        }
                    }
                } catch (error) {
                    console.log('error', error)
                }
            }
            return user;
        }
    }
}

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST }