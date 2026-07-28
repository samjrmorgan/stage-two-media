import Image from "next/image";

export function Logo({
  variant = "offwhite",
  className = "",
}: {
  variant?: "offwhite" | "black" | "navy";
  className?: string;
}) {
  return (
    <Image
      src={`/brand/logo/primary-${variant}.svg`}
      alt="Stage Two"
      width={140}
      height={40}
      className={className}
      priority
    />
  );
}

export function Mark({
  variant = "offwhite",
  className = "",
}: {
  variant?: "offwhite" | "black" | "navy" | "warmnavy";
  className?: string;
}) {
  return (
    <Image
      src={`/brand/mark/mark-${variant}.svg`}
      alt=""
      aria-hidden
      width={32}
      height={32}
      className={className}
    />
  );
}
