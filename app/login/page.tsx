"use client";
import { createRef, useState } from "react";
import { LogoLgIcon } from "assets/icons";
import { initFormLogin } from "constants/initForm";
import FormField from "components/Form/FormField";
import { Button } from "evergreen-ui";
import { isPresence, isValidEmail } from "utils/validators.util";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const emailRef = createRef<any>();
  const passwordRef = createRef<any>();
  const router = useRouter();
  const [loginForm, setLoginForm] = useState(initFormLogin);
  const [loadingSubmit, setLoadingSubmit] = useState(false);

  const isFormValid = () => {
    return !emailRef.current?.validate() || !passwordRef.current?.validate();
  };

  const onChangeFormField = (value: string, fieldName: string) => {
    setLoginForm({
      ...loginForm,
      [fieldName]: value,
    });
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
        Login to Vending Locator
      </p>
      <div className="flex flex-col items-center border-t-2 border-vlocator_black-1 shadow-form bg-white pt-6 pb-7 px-8 w-[356px] max-w-[356px]">
        <div className="flex items-center w-full">
          <FormField
            ref={emailRef}
            wrapperClass="w-full"
            value={loginForm.email}
            label="Email"
            placeholder="Email address"
            onChange={(e) => onChangeFormField(e.target.value, "email")}
            checkErrors={[
              (val: string) => isPresence(val, "This field is required"),
              (val: string) => isValidEmail(val, "Please enter a valid email"),
            ]}
          />
        </div>
        <div className="flex items-center mt-[22px] w-full">
          <FormField
            ref={passwordRef}
            wrapperClass="w-full"
            value={loginForm.password}
            label="Password"
            placeholder="Your password"
            onChange={(e) => onChangeFormField(e.target.value, "password")}
            checkErrors={[
              (val: string) => isPresence(val, "This field is required"),
            ]}
          />
        </div>
        <Button
          onClick={onSubmit}
          isLoading={loadingSubmit}
          className="!flex !items-center !justify-center !text-white !font-bold !text-xs !bg-vlocator_purple mt-6 !w-full hover:opacity-90 !spinner-white"
        >
          Sign In
        </Button>
      </div>
      <p className="text-center text-xs text-vlocator_black-1 mt-[18px]">
        Forgot your password?{" "}
        <span
          className="text-vlocator_purple hover:underline hover:cursor-pointer"
          onClick={() => router.push("/forgot-password")}
        >
          Reset It
        </span>
      </p>
    </div>
  );
};

export default LoginPage;
