'use server'

import { redirect } from "next/navigation";
import prisma from "../../../lib/prisma";
import { revalidatePath } from "next/cache";

export const updateUserAction = async (formData: FormData): Promise<void> => {
  const id = Number(formData.get("id"));
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const name = formData.get("name") as string;

  if (!id || !email || !password || !name) {
    throw new Error("Dados inválidos");
  }

  await prisma.user.update({
    where: {id},
    data: {email, password, name}
  })

  revalidatePath("/");
  redirect("/");
}