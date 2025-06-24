import { useState } from "react";

// * types
export type UseToggleReturn = [boolean, (value?: boolean) => void];

const useToggle = (initialValue: boolean = false): UseToggleReturn => {
  const [on, setOn] = useState<boolean>(initialValue);

  const toggle = (value?: boolean) => setOn((prev) => (value !== undefined ? value : !prev));

  return [on, toggle];
};

export default useToggle;
