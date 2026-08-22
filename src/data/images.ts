/**
 * Central image registry. All photography comes from the supplied
 * Dream Kcreation portfolio and is served from the Lovable CDN.
 */
import coverHero from "@/assets/img/cover-hero.jpg.asset.json";
import commercialLounge from "@/assets/img/commercial-lounge.jpg.asset.json";
import sketchToRender from "@/assets/img/sketch-to-render.jpg.asset.json";
import livingWarm from "@/assets/img/living-warm.jpg.asset.json";
import craftTeam01 from "@/assets/img/craft-team-01.jpg.asset.json";
import craftTeam02 from "@/assets/img/craft-team-02.jpg.asset.json";
import craftTeam03 from "@/assets/img/craft-team-03.jpg.asset.json";
import livingDark from "@/assets/img/living-dark.jpg.asset.json";
import living01 from "@/assets/img/living-01.jpg.asset.json";
import living02 from "@/assets/img/living-02.jpg.asset.json";
import living03 from "@/assets/img/living-03.jpg.asset.json";
import living04 from "@/assets/img/living-04.jpg.asset.json";
import living05 from "@/assets/img/living-05.jpg.asset.json";
import kitchen01 from "@/assets/img/kitchen-01.jpg.asset.json";
import kitchen02 from "@/assets/img/kitchen-02.jpg.asset.json";
import kitchen03 from "@/assets/img/kitchen-03.jpg.asset.json";
import kitchen04 from "@/assets/img/kitchen-04.jpg.asset.json";
import kitchen05 from "@/assets/img/kitchen-05.jpg.asset.json";
import kitchen06 from "@/assets/img/kitchen-06.jpg.asset.json";
import bedroom01 from "@/assets/img/bedroom-01.jpg.asset.json";
import bedroom02 from "@/assets/img/bedroom-02.jpg.asset.json";
import bedroom03 from "@/assets/img/bedroom-03.jpg.asset.json";
import bedroom04 from "@/assets/img/bedroom-04.jpg.asset.json";
import bedroom05 from "@/assets/img/bedroom-05.jpg.asset.json";
import bedroom06 from "@/assets/img/bedroom-06.jpg.asset.json";
import kids01 from "@/assets/img/kids-01.jpg.asset.json";
import kids02 from "@/assets/img/kids-02.jpg.asset.json";
import kids03 from "@/assets/img/kids-03.jpg.asset.json";
import kids04 from "@/assets/img/kids-04.jpg.asset.json";
import kids05 from "@/assets/img/kids-05.jpg.asset.json";
import kids06 from "@/assets/img/kids-06.jpg.asset.json";
import master01 from "@/assets/img/master-01.jpg.asset.json";
import master02 from "@/assets/img/master-02.jpg.asset.json";
import master03 from "@/assets/img/master-03.jpg.asset.json";
import master04 from "@/assets/img/master-04.jpg.asset.json";
import master05 from "@/assets/img/master-05.jpg.asset.json";
import master06 from "@/assets/img/master-06.jpg.asset.json";
import dining01 from "@/assets/img/dining-01.jpg.asset.json";
import dining02 from "@/assets/img/dining-02.jpg.asset.json";
import dining03 from "@/assets/img/dining-03.jpg.asset.json";
import dining04 from "@/assets/img/dining-04.jpg.asset.json";
import logoLight from "@/assets/img/logo-light.jpg.asset.json";
import logoDark from "@/assets/img/logo-dark.jpg.asset.json";

export const images = {
  "cover-hero": coverHero.url,
  "commercial-lounge": commercialLounge.url,
  "sketch-to-render": sketchToRender.url,
  "living-warm": livingWarm.url,
  "craft-team-01": craftTeam01.url,
  "craft-team-02": craftTeam02.url,
  "craft-team-03": craftTeam03.url,
  "living-dark": livingDark.url,
  "living-01": living01.url,
  "living-02": living02.url,
  "living-03": living03.url,
  "living-04": living04.url,
  "living-05": living05.url,
  "kitchen-01": kitchen01.url,
  "kitchen-02": kitchen02.url,
  "kitchen-03": kitchen03.url,
  "kitchen-04": kitchen04.url,
  "kitchen-05": kitchen05.url,
  "kitchen-06": kitchen06.url,
  "bedroom-01": bedroom01.url,
  "bedroom-02": bedroom02.url,
  "bedroom-03": bedroom03.url,
  "bedroom-04": bedroom04.url,
  "bedroom-05": bedroom05.url,
  "bedroom-06": bedroom06.url,
  "kids-01": kids01.url,
  "kids-02": kids02.url,
  "kids-03": kids03.url,
  "kids-04": kids04.url,
  "kids-05": kids05.url,
  "kids-06": kids06.url,
  "master-01": master01.url,
  "master-02": master02.url,
  "master-03": master03.url,
  "master-04": master04.url,
  "master-05": master05.url,
  "master-06": master06.url,
  "dining-01": dining01.url,
  "dining-02": dining02.url,
  "dining-03": dining03.url,
  "dining-04": dining04.url,
} as const;

export type ImageKey = keyof typeof images;

export const logos = {
  /** Logo lockup on light backgrounds (dark wordmark) */
  onLight: logoLight.url,
  /** Logo lockup on dark backgrounds (white wordmark) */
  onDark: logoDark.url,
};

export const img = (key: string) => images[key as ImageKey] ?? images["cover-hero"];
