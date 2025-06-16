import { AlertTriangle } from "lucide-react";
import { Alert as AlertBox, AlertDescription, AlertTitle } from "./ui/alert";
interface AlertProps {
  message: string;
  type: "alert" | "error";
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export function Alert({ message, type, setOpen }: AlertProps) {
  return (
    <div
      className="w-screen h-screen fixed bg-black/50 top-0 left-0 flex justify-center items-center"
      onClick={() => {
        setOpen(false);
      }}
    >
      <AlertBox className="w-full max-w-[700px] p-6">
        <AlertTitle className="flex justify-center pb-2">
          <AlertTriangle
            className={`${
              type === "alert"
                ? "stroke-yellow-500"
                : type === "error"
                ? "stroke-red-500"
                : ""
            }`}
          />
        </AlertTitle>
        <AlertDescription className="flex justify-center pt-4 border-t-2">
          <h2 className="text-2xl text-center">{message}</h2>
        </AlertDescription>
      </AlertBox>
    </div>
  );
}
