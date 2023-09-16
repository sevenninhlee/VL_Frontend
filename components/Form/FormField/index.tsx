/* eslint-disable react/display-name */
import {
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
  InputHTMLAttributes,
} from "react";
import { Spinner } from "evergreen-ui";
import { CloseIcon } from "assets/icons";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string; 
  type?: string;
  prefixIcon?: any;
  customClass?: string;
  onKeyPress?: () => void;
  placeholder?: string;
  inputWidth?: number;
  onChange?: (e: any) => void;
  checkErrors?: any;
  onFocus?: () => void;
  onBlur?: () => void;
  selectOnFocus?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  isTextarea?: boolean;
  refInput?: any;
  onRemoveText?: () => void;
  showRemove?: boolean;
  loading?: boolean;
  wrapperClass?: string;
}

const FormField = forwardRef(
  (
    {
      label = "",
      type = "text",
      prefixIcon,
      customClass = "",
      onKeyPress,
      placeholder,
      inputWidth,
      name,
      onChange,
      value,
      checkErrors = [],
      id,
      onFocus,
      onBlur,
      selectOnFocus = false,
      disabled,
      readOnly = false,
      min,
      maxLength,
      autoComplete,
      required,
      refInput = null,
      isTextarea = false,
      onRemoveText,
      showRemove = false,
      loading = false,
      wrapperClass = "",
      ...rest
    }: Props,
    ref
  ) => {
    const [touched, setTouched] = useState(false);
    const [error, setError] = useState("");

    const onFocusHandler = (e: any) => {
      if (selectOnFocus) e.target.select();
      if (onFocus) onFocus();
    };

    const onBlurHandler = () => {
      if (onBlur) {
        setTouched(true);
        onBlur();
      }
    };

    useImperativeHandle(ref, () => ({
      validate: () => {
        setTouched(true);
        return validateForm();
      },
    }));

    const onKeyUp = (event: any) => {
      if (event.charCode === 13) {
        onKeyPress && onKeyPress();
      }
    };

    useEffect(() => {
      validateForm();
    }, [value]);

    const validateForm = () => {
      if (checkErrors.length > 0) {
        for (let idx = 0; idx < checkErrors.length; idx++) {
          const checkErrorFn = checkErrors[idx];
          if (typeof checkErrorFn === "function") {
            const error = checkErrorFn(value);
            if (error) {
              setError(error);
              return error;
            }
          }
        }
        setError("");
      }
      return "";
    };

    return (
      <div className={`flex flex-col ${wrapperClass}`}>
        {label && (
          <p className="text-sm font-bold text-vlocator_black-1 mb-1">
            {label}
          </p>
        )}
        {isTextarea ? (
          <textarea
            className={`${customClass} border border-vlocator-black-1 !bg-white w-full rounded text-xs px-3 py-2`}
            id={id}
            autoComplete={autoComplete}
            value={value}
            disabled={disabled}
            placeholder={placeholder}
            readOnly={readOnly}
            required={required}
            onKeyPress={onKeyUp}
            onChange={onChange}
            onBlur={() => onBlurHandler()}
            onFocus={(e: any) => onFocusHandler(e)}
            maxLength={maxLength}
          />
        ) : (
          <div className="relative">
            {prefixIcon && (
              <div className="absolute left-2 top-3">{prefixIcon}</div>
            )}
            <input
              className={`${customClass} border-vlocator-black-1 !bg-white w-full border rounded-[5px] font-bold text-xs px-3 py-2 text-vlocator_black ${prefixIcon && "pl-5"}`}
              id={id}
              type={type}
              autoComplete={autoComplete}
              value={value}
              disabled={disabled}
              placeholder={placeholder}
              readOnly={readOnly}
              ref={refInput}
              required={required}
              onKeyPress={onKeyUp}
              onChange={onChange}
              onBlur={() => onBlurHandler()}
              onFocus={(e: any) => onFocusHandler(e)}
              min={min}
              maxLength={maxLength}
              {...rest}
            />
            {value && showRemove && !loading && (
              <div
                onClick={onRemoveText}
                className="absolute right-3 px-1 top-3 z-20 cursor-pointer"
              >
                <CloseIcon className=" text-vlocator_black" />
              </div>
            )}
            {loading && (
              <div className="absolute right-3 px-1 top-2 z-20 cursor-pointer">
                <Spinner width={18} height={18} />
              </div>
            )}
          </div>
        )}
        {touched && error && (
          <p className="text-xs mt-1 text-red-600">{error}</p>
        )}
      </div>
    );
  }
);

export default FormField;
