export type Option = {
  label: string;
  value: string;
};

export type DropdownProps = {
  options: Option[];
  onChangeValue?: (value: string) => void;
  placeHolder?: string;
};
