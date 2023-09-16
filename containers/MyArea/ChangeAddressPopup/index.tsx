import DialogCustomHeader from "components/ConfirmDeletePopup";
import { Dialog } from "evergreen-ui";
import FormField from "components/Form/FormField";
import React from "react";

interface Props {
  open: boolean;
  onClose: () => void;
}

const ChangeAddressPopup = ({ open, onClose }: Props) => {
  return (
    <div>
      <Dialog
        isShown={open}
        width={450}
        onCloseComplete={onClose}
        shouldCloseOnOverlayClick={false}
        shouldCloseOnEscapePress={false}
        header={({ close }) => (
          <DialogCustomHeader close={close}>
            <p className="font-semibold text-black text-sm ml-[10px] py-1">
              Change Your Address
            </p>
          </DialogCustomHeader>
        )}
        hasFooter={false}
      >
        <div className="flex flex-col gap-y-3">
          <p className="text-xs text-vlocator_black-1 mt-[-2px] py-1">
            This will change where we start assigning you leads
          </p>
          <FormField
            id="last_name"
            label="Address"
            placeholder=""
            wrapperClass="flex-1"
            customClass="!flex-1"
          />
          <div className=" flex justify-end py-2">
            <button className=" rounded select-none text-white bg-vlocator_purple text-xs p-2 font-medium flex w-[70px] justify-center ">
              Save
            </button>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default ChangeAddressPopup;
