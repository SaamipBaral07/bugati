import Image from "next/image";

export default function ImageBox({
  label = "Image",
  className = "",
  src,
  hover = true,
}: {
  label?: string;
  className?: string;
  src?: string;
  hover?: boolean;
}) {
  return (
    <div
      className={`group/img relative overflow-hidden rounded-3xl border border-black/10 bg-gradient-to-br from-black/5 to-black/0 ${className}`}
    >
      {src ? (
        <Image
          src={src}
          alt={label}
          fill
          className={`object-cover transition-transform duration-700 ease-out ${
            hover ? "group-hover/img:scale-105" : ""
          }`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-sm font-medium tracking-wide text-black/40">
            {label}
          </p>
        </div>
      )}
    </div>
  );
}
