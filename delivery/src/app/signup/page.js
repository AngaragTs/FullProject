"use client";

import { useState } from "react";
import { Signup } from "./features/email";
import { CreatePassword } from "./features/password";

export default function home() {
  const [step, setStep] = useState(1);
  const HandleNextStep = () => {
    setStep(step + 1);
  };
  return (
    <div>
      {step === 1 && <Signup HandleNextStep={HandleNextStep} />}
      {step === 2 && <CreatePassword HandleBackStep={HandleNextStep} />}
    </div>
  );
}
