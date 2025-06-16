import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export function sleep(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
export function convertForm(form: EventTarget & HTMLFormElement) {
  const data = new FormData(form);
  const object = Object.fromEntries(data);
  return object;
}
export const getHorarios = async (data: string) => {
  let response: number[] = [];
  await fetch("/api/horarios", {
    method: "POST",
    body: JSON.stringify({ data }),
  }).then(async (res) => {
    const data = await res.json();
    response = data;
  });
  console.log(response);
  return response;
};
