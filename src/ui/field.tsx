"use client";

import { ValidationResult } from "@react-types/shared";
import { cloneElement, ForwardedRef, forwardRef, ReactElement, ReactNode, useEffect, useMemo, useState } from "react";
import { FieldError, Group, Label, Text } from "react-aria-components";
import { tv } from "tailwind-variants";

import { isDisabledVariants, radiusVariants, smallRadiusVariants } from "./styles";
import { RadiusProps, Sizes } from "./types";
import { useObserveElementWidth } from "./utils";
import { twMerge } from "tailwind-merge";

// styles

export const fieldStyles = tv({
  slots: {
    base: "relative flex flex-col text-snow",
    labelStyles: "ml-[7px] cursor-default text-silver block",
    descriptionStyles: "ml-[7px] block",
    errorMessageStyles: "ml-[7px] text-fuzzy block",
  },
  variants: {
    size: {
      xs: {
        base: "gap-y-[4px]",
        labelStyles: "text-[12px] leading-[18px]",
        descriptionStyles: "text-[12px] leading-[18px]",
        errorMessageStyles: "text-[12px] leading-[18px]",
      },
      sm: {
        base: "gap-y-[4px]",
        labelStyles: "text-[12px] leading-[18px]",
        descriptionStyles: "text-[12px] leading-[18px]",
        errorMessageStyles: "text-[12px] leading-[18px]",
      },
      md: {
        base: "gap-y-[4px]",
        labelStyles: "text-[12px] leading-[19px]",
        descriptionStyles: "text-[12px] leading-[19px]",
        errorMessageStyles: "text-[12px] leading-[19px]",
      },
      lg: {
        base: "gap-y-[7px]",
        labelStyles: "text-[16px] leading-[26px] font-bold",
        descriptionStyles: "text-[12px] leading-[12px]",
        errorMessageStyles: "text-[12px] leading-[12px]",
      },
    },
  },
});

export const fieldInputStyles = tv({
  slots: {
    base: "relative flex items-center bg-woodsmoke border border-tuna overflow-hidden duration-200 transition-colors",
    self: "flex-1 h-full bg-transparent outline-none placeholder:text-platinum flex items-center",
    content: "text-platinum",
    button:
      "grid place-items-center bg-white/10 data-[hovered]:bg-white/20 data-[pressed]:bg-white/30 data-[disabled]:opacity-50 data-[disabled]:cursor-not-allowed outline-none",
  },
  variants: {
    size: {
      xs: { base: "h-[35px] text-xs leading-[18px] [&_svg]:size-[14px]", button: "size-5 [&_svg]:!size-3" },
      sm: { base: "h-[40px] text-xs leading-[18px] [&_svg]:size-[14px]", button: "size-5 [&_svg]:!size-3" },
      md: { base: "h-[44px] text-base leading-[26px] [&_svg]:size-[16px]", button: "size-7 [&_svg]:!size-3.5" },
      lg: { base: "h-[48px] text-base leading-[26px] [&_svg]:size-[20px]", button: "size-8 [&_svg]:!size-4" },
    },
    radius: {
      sm: { base: radiusVariants.radius.sm, button: smallRadiusVariants.radius.sm },
      md: { base: radiusVariants.radius.md, button: smallRadiusVariants.radius.md },
      lg: { base: radiusVariants.radius.lg, button: smallRadiusVariants.radius.lg },
      full: { base: radiusVariants.radius.full, button: smallRadiusVariants.radius.full },
      none: { base: radiusVariants.radius.none, button: smallRadiusVariants.radius.none },
    },
    isTextArea: { true: "h-auto items-start" },
    isHovered: { true: "bg-smoke" },
    isFocusWithin: { true: "bg-smoke border-platinum" },
    isInvalid: { true: "border-fuzzy" },
    // ...isFocusVisibleVariants,
    ...isDisabledVariants,
  },
  compoundVariants: [
    { isTextArea: true, size: "sm", className: { base: "py-[11px]" } },
    { isTextArea: true, size: "md", className: { base: "py-[11px]" } },
    { isTextArea: true, size: "lg", className: { base: "py-[11px]" } },
  ],
});

// props

interface PigmentFieldBaseProps {
  label?: ReactNode;
  description?: ReactNode;
  errorMessage?: ReactNode | ((validationResult: ValidationResult) => ReactNode);
  labelNecessityIndicator?: "symbol" | "text";
  reservedBottomText?: boolean;
  size?: Sizes | "xs";
}

interface PigmentFieldProps extends PigmentFieldBaseProps {
  isInvalid?: boolean;
  isRequired?: boolean;
  children?: ReactElement;
}

interface PigmentFieldInputBaseProps extends RadiusProps {
  startContent?: ReactElement;
  endContent?: ReactElement;
  size?: Sizes | "xs";
}

interface PigmentFieldInputProps extends PigmentFieldInputBaseProps {
  isTextArea?: boolean;
  isInvalid?: boolean;
  isDisabled?: boolean;
  children?: ReactElement;
  startButton?: ReactElement;
  endButton?: ReactElement;
}

// component

function _Field(props: PigmentFieldProps, ref: ForwardedRef<HTMLDivElement>) {
  const {
    label,
    description,
    errorMessage,
    isRequired,
    isInvalid,
    labelNecessityIndicator = "symbol",
    size = "md",
    reservedBottomText,
    children,
  } = props;

  const styleSlots = fieldStyles({ size });

  const bottomText = (
    <>
      {description && (
        <Text slot="description" className={styleSlots.descriptionStyles()}>
          {description}
        </Text>
      )}

      <FieldError className={styleSlots.errorMessageStyles()}>{errorMessage}</FieldError>
    </>
  );

  return (
    <div ref={ref} className={styleSlots.base()}>
      {label && (
        <Label className={styleSlots.labelStyles()} elementType="span">
          {label}
          {labelNecessityIndicator === "symbol" && isRequired && <span> *</span>}
          {labelNecessityIndicator === "text" && <span> {isRequired ? "(required)" : "(optional)"}</span>}
        </Label>
      )}

      {children}

      {reservedBottomText ? (
        <div className={twMerge({ xs: "min-h-[18px]", sm: "min-h-[18px]", md: "min-h-[19px]", lg: "min-h-[12px]" }[size])}>{bottomText}</div>
      ) : (
        bottomText
      )}
    </div>
  );
}

const Field = forwardRef(_Field);

function _FieldInput(props: PigmentFieldInputProps, ref: ForwardedRef<HTMLDivElement>) {
  const { size = "md", radius = "md", isInvalid, isDisabled, isTextArea = false, startContent, endContent, startButton, endButton, children } = props;

  const styleSlots = fieldInputStyles({ size, radius, isTextArea });

  const hasStartButton = !!startButton;
  const hasEndButton = !!endButton;
  const spacingSize = { xs: 8, sm: 10, md: 14, lg: 20 }[size];

  const [startButtonWidth, startButtonRef] = useObserveElementWidth<HTMLButtonElement>();
  const [startContentWidth, startContentRef] = useObserveElementWidth<HTMLDivElement>();
  const [endButtonWidth, endButtonRef] = useObserveElementWidth<HTMLButtonElement>();
  const [endContentWidth, endContentRef] = useObserveElementWidth<HTMLDivElement>();

  const paddingLeft = useMemo(
    () => (startButtonWidth ? startButtonWidth + spacingSize : 0) + (startContentWidth ? startContentWidth + spacingSize : 0) + spacingSize,
    [startButtonWidth, startContentWidth, spacingSize],
  );

  const paddingRight = useMemo(
    () => (endButtonWidth ? endButtonWidth + spacingSize : 0) + (endContentWidth ? endContentWidth + spacingSize : 0) + spacingSize,
    [endButtonWidth, endContentWidth, spacingSize],
  );

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <Group
      ref={ref}
      isInvalid={isInvalid}
      isDisabled={isDisabled}
      className={({ isHovered, isInvalid, isDisabled, isFocusVisible, isFocusWithin }) =>
        styleSlots.base({
          isHovered,
          isInvalid,
          isDisabled,
          // isFocusVisible,
          isFocusWithin,
        })
      }
      style={{
        paddingLeft: !isMounted ? spacingSize : undefined,
        paddingRight: !isMounted ? spacingSize : undefined,
        gap: !isMounted ? spacingSize : undefined,
      }}
    >
      {startButton &&
        cloneElement(startButton, {
          ref: startButtonRef,
          style: isMounted ? { position: "absolute", left: spacingSize, ...startButton.props?.style } : {},
          className: styleSlots.button({ className: startButton.props?.className }),
        })}

      {startContent &&
        cloneElement(startContent, {
          ref: startContentRef,
          style: isMounted
            ? { position: "absolute", left: hasStartButton ? spacingSize * 2 + startButtonWidth : spacingSize, ...startContent.props?.style }
            : {},
          className: styleSlots.content({ className: startContent.props?.className }),
        })}

      {children &&
        cloneElement(children, {
          style: isMounted ? { paddingLeft, paddingRight, ...children.props?.style } : {},
          className: styleSlots.self({ className: children.props?.className }),
        })}

      {endContent &&
        cloneElement(endContent, {
          ref: endContentRef,
          style: isMounted
            ? { position: "absolute", right: hasEndButton ? spacingSize * 2 + endButtonWidth : spacingSize, ...endContent.props?.style }
            : {},
          className: styleSlots.content({ className: endContent.props?.className }),
        })}

      {endButton &&
        cloneElement(endButton, {
          ref: endButtonRef,
          style: isMounted ? { position: "absolute", right: spacingSize, ...endButton.props?.style } : {},
          className: styleSlots.button({ className: endButton.props?.className }),
        })}
    </Group>
  );
}

const FieldInput = forwardRef(_FieldInput);

// exports

export { Field, FieldInput };
export type { PigmentFieldBaseProps, PigmentFieldProps, PigmentFieldInputBaseProps, PigmentFieldInputProps };
