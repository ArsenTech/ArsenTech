// hooks/useActiveHeading.ts
import { useEffect, useState } from "react";

export function useActiveHeading(ids: string[]) {
     const [activeId, setActiveId] = useState<string | null>(null);

     useEffect(() => {
          const observer = new IntersectionObserver(
               (entries) => {
                    const visible = entries.find((entry) => entry.isIntersecting);
                    if (visible) setActiveId(visible.target.id);
               },
               {
                    rootMargin: "0% 0% -70% 0%",
                    threshold: 0.1,
               }
          );
          ids.forEach((id) => {
               const el = document.getElementById(id);
               if (el) observer.observe(el);
          });
          return () => observer.disconnect();
     }, [ids]);
     return activeId;
}
