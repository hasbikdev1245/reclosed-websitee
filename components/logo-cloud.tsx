import { Container } from "@/components/container";
import { INTEGRATIONS } from "@/data/integrations";

const LOOP = [...INTEGRATIONS, ...INTEGRATIONS];

export function LogoCloud() {
  return (
    <Container id="integrations" className="border-divide overflow-hidden border-x">
      <h2 className="py-8 text-center font-mono text-sm tracking-tight text-neutral-500 uppercase dark:text-gray-300">
        Your whole stack, connected
      </h2>
      <div className="logo-marquee-viewport border-divide border-t">
        <ul className="logo-marquee py-8 sm:py-10">
          {LOOP.map((logo, index) => {
            const clone = index >= INTEGRATIONS.length;
            return (
              <li
                key={`${logo.title}-${index}`}
                data-clone={clone ? "" : undefined}
                aria-hidden={clone || undefined}
                className="flex h-16 shrink-0 items-center justify-center px-8 sm:px-14"
              >
                {/* Native images keep each logo's intrinsic proportions. */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={logo.src}
                  alt={clone ? "" : logo.title}
                  className={`w-auto max-w-none object-contain grayscale dark:invert ${logo.className}`}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </Container>
  );
}
