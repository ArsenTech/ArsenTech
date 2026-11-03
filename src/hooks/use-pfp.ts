import { isChristmas as getIsChristmas } from "@/lib/utils";

export default function usePFP(){
     const isChristmas = getIsChristmas();
     const prefix = isChristmas ? "pfp-christmas" : "pfp";
     return {
          main: `/profile-pics/${prefix}.webp`,
          coding: `/profile-pics/coding/${prefix}.webp`,
          misc: `/profile-pics/misc/${prefix}.webp`,
          shorts: `/profile-pics/shorts/${prefix}.webp`,
     }
}