import { useState, useDebugValue } from "react";
export default function useStateDisplayName(initialValue, displayName) {
  const [value, setValue] = useState(initialValue);
  useDebugValue(`${displayName} for ${initialValue}`);
  return [value, setValue];
}
