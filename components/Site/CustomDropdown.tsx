import React, { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import css from "./CustomDropdown.module.css";

interface Option {
  value: string;
  label: string;
}

interface CustomDropdownProps {
  value: string;
  onChange: (value: string) => void;
  options: Option[];
  placeholder?: string;
  id?: string;
}

export default function CustomDropdown({
  value,
  onChange,
  options,
  placeholder = "Select an option",
  id,
}: CustomDropdownProps) {
  const selectedOption = options.find((opt) => opt.value === value);

  return (
    <Listbox value={value} onChange={onChange}>
      <div className={css.container}>
        <Listbox.Button id={id} className={css.button}>
          <span className={value ? css.buttonText : css.buttonPlaceholder}>
            {selectedOption?.label || placeholder}
          </span>
          <svg
            className={css.icon}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </Listbox.Button>

        <Transition
          as={Fragment}
          leave={css.transition}
          leaveFrom={css.transitionFrom}
          leaveTo={css.transitionTo}
        >
          <Listbox.Options className={css.options}>
            {options.map((option) => (
              <Listbox.Option
                key={option.value}
                value={option.value}
                as={Fragment}
              >
                {({ active, selected }) => (
                  <li
                    className={`${css.option} ${active ? css.optionActive : ""} ${selected ? css.optionSelected : ""}`}
                  >
                    {option.label}
                  </li>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
}
