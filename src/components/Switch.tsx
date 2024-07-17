// ToggleSwitch.tsx
import React, { FC, useState } from 'react';

interface SwitchProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

export const Switch: FC<SwitchProps> = ({ checked = false, onChange }) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleToggle = () => {
    setIsChecked(!isChecked);
    if (onChange) {
      onChange(!isChecked);
    }
  };

  return (
    <div className={`toggle-switch ${isChecked ? 'checked' : ''}`} onClick={handleToggle}>
      <div className="toggle-switch-handle" />
    </div>
  );
};

