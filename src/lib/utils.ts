export {cn} from "cn"

export function isChristmas() {
  const today = new Date();
  const month = today.getMonth() + 1,day = today.getDate();
  return (month === 12 && day >= 1) || (month === 1 && day <= 8);
}

export const getBackgroundImage = (suffix: "app" | "footer" = "app"): React.CSSProperties => {
  const gradient = suffix === "app" ? "linear-gradient(#20482945,#1dd1a188)" : "linear-gradient(#20482945,#20482945)"
  const backgroundImage = isChristmas() ? `${gradient},url("/backgrounds/bg-christmas.webp")` : `${gradient},url("/backgrounds/bg.webp")`
  return {
    backgroundImage,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    backgroundSize: "cover"
  }
}

export const getInitialLogo = (theme: string | undefined) => theme==="dark" ? "/arsentech-dark.svg" : "/arsentech-light.svg"