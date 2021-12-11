import { Sizes, SwitchContainer, Switcher } from "./styles";

interface SwitchProps {
  size: 100 | 45;
  toggleSize: () => void;
}

export function Switch({ size, toggleSize }: SwitchProps) {
  return (
    <SwitchContainer>
      <Switcher>
        <input type="checkbox" checked={size === 45} onChange={toggleSize} />
        <span className="slider"></span>
        <Sizes isChecked={size === 45}>
          <span id="size-100">100g</span>
          <span id="size-45">45g</span>
        </Sizes>
      </Switcher>
    </SwitchContainer>
  );
}
