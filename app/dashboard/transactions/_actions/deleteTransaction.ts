"use server"

import prisma from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export async function DeleteTransaction(transactionId: string) {
    const user = await currentUser();
    if (!user) {
        redirect("/sigh-in");
    }

    const transaction = await prisma.transaction.findUnique({
        where: {
            id: transactionId,
        },
    });
    if(!transaction) {
        throw new Error("Transaction not found");
    }

    await prisma.$transaction([
        prisma.transaction.delete({
            where: {
                id: transactionId,
                userId: user.id,
            },
        }),
        prisma.monthHistory.update({
            where: {
               day_month_year_userId: {
                userId: user.id,
                day: transaction.date.getUTCDate(),
                month: transaction.date.getUTCMonth(),
                year: transaction.date.getUTCFullYear(),
            },
        },
            data: {
                ...(transaction.type === "expense" &&  {
                    expense: {
                        decrement: transaction.amount,
                    },
                }),
                ...(transaction.type === "income" &&  {
                    income: {
                        increment: transaction.amount,
                    },
                }),
            },
        }),
        prisma.yearHistory.update({
            where: {
               month_year_userId: {
                userId: user.id,
                month: transaction.date.getUTCMonth(),
                year: transaction.date.getUTCFullYear(),
            },
        },
            data: {
                ...(transaction.type === "expense" &&  {
                    expense: {
                        decrement: transaction.amount,
                    },
                }),
                ...(transaction.type === "income" &&  {
                    income: {
                        increment: transaction.amount,
                    },
                }),
            },
        }),
    ]);
}