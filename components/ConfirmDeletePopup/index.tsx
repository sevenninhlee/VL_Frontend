import { CloseIcon } from "assets/icons";
import { ReactNode } from "react";

interface Props {
  close?: () => void;
  children?: ReactNode;
  customClass?: string;
}

function DialogCustomHeader({ close, children, customClass }: Props) {
  return (
    <div
      className={`rounded-t-md flex justify-between items-center w-full bg-mailreef_black-1 z-10 py-2.5 px-5 border-b absolute top-0 left-0 right-0 ${customClass}`}
    >
      {children}
      <div
        onClick={close}
        className="px-2 cursor-pointer text-black hover:text-gray-200"
      >
        <CloseIcon />
      </div>
    </div>
  );
}

export default DialogCustomHeader;
