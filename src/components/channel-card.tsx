import Image from "next/image";
import { ComponentProps, useRef } from "react";

type ChannelProps = {
  name: string;
};

export const ChannelCard = ({
  name,
  ...props
}: ChannelProps & ComponentProps<"div">) => {
  const logo =
    "/logos/" + name.toLocaleLowerCase().replaceAll(" ", "-").concat(`.webp`);
  const link = useRef<HTMLAnchorElement>(null);
  return (
    <div {...props}>
      <Image
        quality={100}
        className="anti-aliases"
        style={{ objectFit: "contain" }}
        sizes="8rem 8rem"
        fill
        src={logo}
        alt={name}
      />
    </div>
  );
};
