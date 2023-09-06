"use client";
import {
  AvatarSignUpIcon,
  LocationIcon,
  LogoSmIcon,
  QuotationMarkLeft,
  QuotationMarkRight,
} from "assets/icons";
import Images from "assets/images";
import FormField from "components/Form/FormField";
import { initSignUpForm } from "constants/initForm";
import { Button } from "evergreen-ui";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { createRef, useState } from "react";
import { isPresence, isValidEmail } from "utils/validators.util";

const ADDRESS_FORM_INPUT_ID = "address_search_input";

const SignUpPage = () => {
  const router = useRouter();
  const emailRef = createRef<any>();
  const companyRef = createRef<any>();
  const addressRef = createRef<any>();
  const passwordRef = createRef<any>();

  const [signUpForm, setSignUpForm] = useState(initSignUpForm);
  const [checking, setChecking] = useState(false);
  const [loadingSubmit, setLoadingSubmit] = useState(false);

  const isFormValid = () => {
    setChecking(true);
    return (
      !!signUpForm.first_name &&
      !!signUpForm.last_name &&
      !companyRef.current?.validate() &&
      !addressRef.current?.validate() &&
      !emailRef.current?.validate() &&
      !passwordRef.current?.validate()
    );
  };

  const onSubmit = () => {
    if (isFormValid()) {
      setLoadingSubmit(true);
    }
  };

  const onChangeFormField = (value: string, fieldName: string) => {
    setSignUpForm({ ...signUpForm, [fieldName]: value });
  };

  return (
    <div className="flex flex-col w-full h-screen max-h-screen bg-vlocator_gray">
      <div className="flex items-center justify-between px-7 py-5">
        <div className="flex items-center justify-center">
          <LogoSmIcon />
        </div>
        <div className="flex items-center">
          <p className="text-right text-xs text-vlocator_black-1">
            Already have an account?{" "}
            <span
              className="text-vlocator_purple hover:underline hover:cursor-pointer"
              onClick={() => router.push("/login")}
            >
              Login
            </span>
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center pt-[74px] gap-x-[54px]">
        <div className="flex flex-col gap-y-6 max-w-[356px]">
          <p className="text-[15px] font-bold text-vlocator_black-1 text-center">
            Sign Up
          </p>
          <div className="flex flex-col py-8 px-6 gap-y-[18px] border-t-2 border-vlocator_black shadow-form bg-white">
            <div className="flex flex-col">
              <div className="flex items-center gap-x-8 w-full">
                <div className="flex items-center flex-1">
                  <FormField
                    id="first_name"
                    label="First Name"
                    placeholder="First Name"
                    wrapperClass="flex-1"
                    customClass="!flex-1"
                    onKeyPress={onSubmit}
                    onChange={(e) =>
                      onChangeFormField(e.target.value, "first_name")
                    }
                    value={signUpForm.first_name}
                  />
                </div>
                <div className="flex items-center flex-1">
                  <FormField
                    id="last_name"
                    label="Last Name"
                    placeholder="Last Name"
                    wrapperClass="flex-1"
                    customClass="!flex-1"
                    onKeyPress={onSubmit}
                    onChange={(e) =>
                      onChangeFormField(e.target.value, "last_name")
                    }
                    value={signUpForm.last_name}
                  />
                </div>
              </div>
              {checking && (
                <div className="flex items-center mt-1 justify-between w-full gap-x-8">
                  <div className="flex items-center flex-1">
                    {!signUpForm.first_name && (
                      <p className="text-xs text-red-600">
                        This field is required
                      </p>
                    )}
                  </div>
                  <div className="flex items-center flex-1">
                    {!signUpForm.last_name && (
                      <p className="text-xs text-red-600">
                        This field is required
                      </p>
                    )}
                  </div>
                </div>
              )}
            </div>

            <FormField
              id="company_name"
              label="Company Name"
              placeholder="Acme, Inc."
              ref={companyRef}
              value={signUpForm.company}
              onChange={(e) => onChangeFormField(e.target.value, "company")}
              checkErrors={[
                (val: string) => isPresence(val, "This field is required"),
              ]}
            />

            <FormField
              label="Looking for locations in and around..."
              placeholder="123 Smith Street New York, NY 10075"
              onChange={(e) => onChangeFormField(e.target.value, "address")}
              value={signUpForm.address}
              ref={addressRef}
              id={ADDRESS_FORM_INPUT_ID}
              prefixIcon={<LocationIcon />}
              checkErrors={[
                (val: string) => isPresence(val, "This field is required"),
              ]}
            />

            <FormField
              ref={emailRef}
              wrapperClass="w-full"
              value={signUpForm.email}
              label="Email"
              placeholder="Email address"
              onChange={(e) => onChangeFormField(e.target.value, "email")}
              checkErrors={[
                (val: string) => isPresence(val, "This field is required"),
                (val: string) =>
                  isValidEmail(val, "Please enter a valid email"),
              ]}
            />

            <FormField
              ref={passwordRef}
              wrapperClass="w-full"
              value={signUpForm.password}
              label="Password"
              placeholder="Your password"
              onChange={(e) => onChangeFormField(e.target.value, "password")}
              checkErrors={[
                (val: string) => isPresence(val, "This field is required"),
              ]}
            />
            <Button
              onClick={onSubmit}
              isLoading={loadingSubmit}
              className="!flex !items-center !justify-center !text-white !font-bold !text-xs !bg-vlocator_purple !w-full hover:opacity-90 !spinner-white"
            >
              Sign Up
            </Button>
          </div>
        </div>
        <div className="flex flex-col items-center relative">
          <QuotationMarkLeft className="absolute top-0 -left-2" />
          <QuotationMarkRight className="absolute top-0 -right-2" />
          <p className="text-sm font-bold text-center text-vlocator_purple">
            Vending Locator is our secret weapon in
          </p>
          <p className="text-sm text-center text-vlocator_black-1">
            <span className="font-bold  text-vlocator_purple">
              the vending business.{" "}
            </span>
            They give us the
          </p>
          <p className="text-sm text-center text-vlocator_black-1">
            leads we need so we can focus on landing
          </p>
          <p className="text-sm text-center text-vlocator_black-1">
            new locations
          </p>
          <div className="flex items-center gap-x-2">
            <Image
              src={Images.AvatarSignUp}
              className="object-contain"
              alt="img"
              width={20}
              height={20}
            />
            <p className="text-xs text-vlocator_black-1 font-satoshi">
              Bill - Austin, TX - Vending Operator
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
