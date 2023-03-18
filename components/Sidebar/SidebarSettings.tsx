import {IconLogin, IconMoon, IconSun} from "@tabler/icons-react";
import { FC } from "react";
import { SidebarButton } from "./SidebarButton";
import {signOut} from "next-auth/react";

interface Props {
  lightMode: "light" | "dark";
  onToggleLightMode: (mode: "light" | "dark") => void;
}

export const SidebarSettings: FC<Props> = ({ lightMode, onToggleLightMode }) => {
  return (
    <div className="flex flex-col items-center border-t border-neutral-500 py-4">
      <SidebarButton
        text={lightMode === "light" ? "Dark mode" : "Light mode"}
        icon={lightMode === "light" ? <IconMoon /> : <IconSun />}
        onClick={() => onToggleLightMode(lightMode === "light" ? "dark" : "light")}
      />
        <SidebarButton text={"Logout"} icon={<IconLogin />} onClick={() => signOut()}
        />
    </div>
  );
};
