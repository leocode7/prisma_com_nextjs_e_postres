'use client'

import { updateUserAction } from "@/app/actions/updateUser";
import Form from "next/form";
import { useState } from "react";

export interface UserItemProps {
  id: number;
  email: string;
  password: string;
  name: string | null;
}

export const dynamic = "force-dynamic";

const UserItem = ({user}: {user: UserItemProps}) => {
  const [editing, setEditing] = useState(false);

  return (
    <div>
      {!editing ? (
        <div>
          <p>{user.name}</p>
          <p>{user.email}</p>
          <button onClick={() => setEditing(true)}>Editar</button>
        </div>
      ) : (
        <Form action={updateUserAction}>
          <input type="hidden"  name="id" value={user.id}/>
          <input type="email" name="email" defaultValue={user.email} />
          <input type="text" name="password" defaultValue={user.password} />
          <input type="text" name="name" defaultValue={user.name ?? ""} />
          <button type="submit">Salvar</button>
          <button type="button" onClick={() => setEditing(false)}>Cancelar</button>
        </Form>
      )}
    </div>
  )
}

export default UserItem;
