import { useTheme } from "next-themes";

export function useCurrentTheme(){
     const { theme, systemTheme } = useTheme();
     return theme === "system" ? systemTheme : theme;
}