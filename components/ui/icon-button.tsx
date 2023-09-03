// resuable icon button


import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils";
import { MouseEventHandler } from "react";


interface IconButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  icon: React.ReactElement;
  className?: string
}


const IconButton: React.FC<IconButtonProps> = ({
  onClick,
  icon,
  className
}) => {
  return (
    <Button
      onClick={onClick}
      className={cn("bg-white aspect-square px-2 hover:scale-110 transition hover:bg-current", className)}
    >
      {icon}
    </Button>
  )
}


export default IconButton