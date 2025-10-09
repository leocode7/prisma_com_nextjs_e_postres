import Form from "next/form";
import prisma from "../../../../lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default function NewUser() {
  async function createUser(formData: FormData) {
    "use server";

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const name = formData.get("name") as string;

    await prisma.user.create({
      data: {
        email,
        password,
        name,
      },
    });

    revalidatePath("/");
    redirect("/");
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Create New Post</h1>
      <Form action={createUser} className="space-y-6">
        <div>
          <label htmlFor="email" className="block text-lg mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-lg mb-2">
            password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <div>
          <label htmlFor="name" className="block text-lg mb-2">
            Name
          </label>
          <input
            type="name"
            id="name"
            name="name"
            placeholder="Enter your name"
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600"
        >
          Create User
        </button>
      </Form>
    </div>
  );
}