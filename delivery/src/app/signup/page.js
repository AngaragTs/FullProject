"use client";

import { Signup } from "./features/email";
import { CreatePassword } from "./features/password";

export default function home() {
  return (
    <div>
      <CreatePassword />
    </div>
  );
}
