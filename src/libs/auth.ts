import { NextAuthOptions } from "next-auth";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "./mongodb";
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import { MongoClient } from "mongodb";

export const authOptions: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),

        CredentialsProvider({
            name: 'email and password',
            credentials: {
                email: {

                    label: 'Email',
                    placeholder: 'email@email.com',
                    type: 'email'
                },
                password: {

                    label: 'password',
                    type: 'password'
                }
            },
            async authorize(credentials, req) {
                if (!credentials?.email || !credentials?.password) {
                    throw new Error('please provide valid credentials');
                }
                const client = await MongoClient.connect(process.env.MONGODB_URI as string);

                const db = client.db()
                const user = await db.collection('users').findOne({ email: credentials.email })


                if (user) {
                    return user as any;
                } else {
                    return null;
                }
            },
        }),

    ],
    session: {
        strategy: 'jwt',
    },
    adapter: MongoDBAdapter(clientPromise),
    debug: process.env.NODE_ENV !== "production",
    secret: process.env.NEXTAUTH_SECRET,
    
}