"use client";
import { createRef, useState } from "react";
import { LogoLgIcon } from "assets/icons";
import FormField from "components/Form/FormField";
import { Button } from "evergreen-ui";
import { isPresence, isValidEmail } from "utils/validators.util";

const ForgotPasswordPage = () => {
  const emailRef = createRef<any>();

  const [email, setEmail] = useState("");
  const [loadingSubmit, setLoadingSubmit] = useState(false);

  const isFormValid = () => {
    return !emailRef.current?.validate();
  };

  const onSubmit = () => {
    if (isFormValid() && !loadingSubmit) {
      setLoadingSubmit(true);
    }
  };

  return (
    <div className="flex flex-col items-center max-h-screen h-screen w-full mx-auto bg-vlocator_gray">
      <div className="flex items-center justify-center pt-[100px]">
        <LogoLgIcon />
      </div>
      <p className="text-center text-base text-vlocator_black py-[18px] font-semibold">
        Reset Your Password
      </p>
      <div className="flex flex-col items-center border-t-2 border-vlocator_black-1 shadow-form bg-white pt-6 pb-7 px-8 w-[356px] max-w-[356px]">
        <div className="flex items-center w-full">
          <FormField
            ref={emailRef}
            wrapperClass="w-full"
            value={email}
            label="Email"
            placeholder="Email address"
            onChange={(e) => setEmail(e.target.value)}
            checkErrors={[
              (val: string) => isPresence(val, "This field is required"),
              (val: string) => isValidEmail(val, "Please enter a valid email"),
            ]}
          />
        </div>
        <Button
          onClick={onSubmit}
          isLoading={loadingSubmit}
          className="!flex !items-center !justify-center !text-white !font-bold !text-xs !bg-vlocator_purple mt-[18px] !w-full hover:opacity-90 !spinner-white"
        >
          Send Password Reset Link
        </Button>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
