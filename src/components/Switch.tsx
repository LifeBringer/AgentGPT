import * as SwitchPrimitive from "@radix-ui/react-switch";
import { clsx } from "clsx";
import React from "react";

interface SwitchProps {
  value: boolean;
  onChange: (checked: boolean) => void;
}

const Switch = ({ value, onChange }: SwitchProps) => {
  const handleChange = (checked: boolean) => {
    onChange(checked);
  };

  return (
    <SwitchPrimitive.Root
      className={clsx(
        "group",
        "radix-state-checked:bg-sky-600",
        "radix-state-unchecked:bg-zinc-500 dark:radix-state-unchecked:bg-zinc-800",
        "relative inline-flex h-4 w-7 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out",
        "focus:outline-none focus-visible:ring focus-visible:ring-sky-500 focus-visible:ring-opacity-75"
      )}
      onCheckedChange={handleChange}
      checked={value}
    >
      <SwitchPrimitive.Thumb
        className={clsx(
          "group-radix-state-checked:translate-x-3",
          "group-radix-state-unchecked:translate-x-0",
          "pointer-events-none inline-block h-3 w-3 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out"
        )}
      />
    </SwitchPrimitive.Root>
  );
};

export { Switch };
