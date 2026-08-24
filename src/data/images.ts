/**
 * Central image registry.
 *
 * All photography is stored locally in src/assets/img/.
 * Vite processes these images and returns the final
 * production asset URL.
 */

import coverHero from "@/assets/img/cover-hero.jpg";
import manufacturingCover from "@/assets/img/manufacturing-cover.jpg";
import commercialLounge from "@/assets/img/commercial-lounge.jpg";
import sketchToRender from "@/assets/img/sketch-to-render.jpg";
import livingWarm from "@/assets/img/living-warm.jpg";

import craftTeam01 from "@/assets/img/craft-team-01.jpg";
import craftTeam02 from "@/assets/img/craft-team-02.jpg";
import craftTeam03 from "@/assets/img/craft-team-03.jpg";

import livingDark from "@/assets/img/living-dark.jpg";
import living01 from "@/assets/img/living-01.jpg";
import living02 from "@/assets/img/living-02.jpg";
import living03 from "@/assets/img/living-03.jpg";
import living04 from "@/assets/img/living-04.jpg";
import living05 from "@/assets/img/living-05.jpg";

import kitchen01 from "@/assets/img/kitchen-01.jpg";
import kitchen02 from "@/assets/img/kitchen-02.jpg";
import kitchen03 from "@/assets/img/kitchen-03.jpg";
import kitchen04 from "@/assets/img/kitchen-04.jpg";
import kitchen05 from "@/assets/img/kitchen-05.jpg";
import kitchen06 from "@/assets/img/kitchen-06.jpg";

import bedroom01 from "@/assets/img/bedroom-01.jpg";
import bedroom02 from "@/assets/img/bedroom-02.jpg";
import bedroom03 from "@/assets/img/bedroom-03.jpg";
import bedroom04 from "@/assets/img/bedroom-04.jpg";
import bedroom05 from "@/assets/img/bedroom-05.jpg";
import bedroom06 from "@/assets/img/bedroom-06.jpg";

import kids01 from "@/assets/img/kids-01.jpg";
import kids02 from "@/assets/img/kids-02.jpg";
import kids03 from "@/assets/img/kids-03.jpg";
import kids04 from "@/assets/img/kids-04.jpg";
import kids05 from "@/assets/img/kids-05.jpg";
import kids06 from "@/assets/img/kids-06.jpg";

import master01 from "@/assets/img/master-01.jpg";
import master02 from "@/assets/img/master-02.jpg";
import master03 from "@/assets/img/master-03.jpg";
import master04 from "@/assets/img/master-04.jpg";
import master05 from "@/assets/img/master-05.jpg";
import master06 from "@/assets/img/master-06.jpg";

import dining01 from "@/assets/img/dining-01.jpg";
import dining02 from "@/assets/img/dining-02.jpg";
import dining03 from "@/assets/img/dining-03.jpg";
import dining04 from "@/assets/img/dining-04.jpg";

import logoLight from "@/assets/img/logo-light.jpg";
import logoDark from "@/assets/img/logo-dark.jpg";

export const images = {
  "cover-hero": coverHero,
  "manufacturing-cover": manufacturingCover,
  "commercial-lounge": commercialLounge,
  "sketch-to-render": sketchToRender,
  "living-warm": livingWarm,

  "craft-team-01": craftTeam01,
  "craft-team-02": craftTeam02,
  "craft-team-03": craftTeam03,

  "living-dark": livingDark,
  "living-01": living01,
  "living-02": living02,
  "living-03": living03,
  "living-04": living04,
  "living-05": living05,

  "kitchen-01": kitchen01,
  "kitchen-02": kitchen02,
  "kitchen-03": kitchen03,
  "kitchen-04": kitchen04,
  "kitchen-05": kitchen05,
  "kitchen-06": kitchen06,

  "bedroom-01": bedroom01,
  "bedroom-02": bedroom02,
  "bedroom-03": bedroom03,
  "bedroom-04": bedroom04,
  "bedroom-05": bedroom05,
  "bedroom-06": bedroom06,

  "kids-01": kids01,
  "kids-02": kids02,
  "kids-03": kids03,
  "kids-04": kids04,
  "kids-05": kids05,
  "kids-06": kids06,

  "master-01": master01,
  "master-02": master02,
  "master-03": master03,
  "master-04": master04,
  "master-05": master05,
  "master-06": master06,

  "dining-01": dining01,
  "dining-02": dining02,
  "dining-03": dining03,
  "dining-04": dining04,
} as const;

export type ImageKey = keyof typeof images;

export const logos = {
  onLight: logoLight,
  onDark: logoDark,
};

export const img = (key: string) => images[key as ImageKey] ?? images["cover-hero"];
