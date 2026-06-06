import { architectureClients } from "./social-architecture";
import { fashionClients } from "./social-fashion";
import { fnbClients } from "./social-fnb";
import { healthcareClients } from "./social-healthcare";
import { hospitalityClients } from "./social-hospitality";
import { lifestyleClients } from "./social-lifestyle";
import { pbClients } from "./social-pb";
import { teachingClients } from "./social-teaching";
import { realestateClients } from "./social-realestate";



export const SocialData = {

    ...architectureClients,
    ...fashionClients,
    ...fnbClients,
    ...healthcareClients,
    ...hospitalityClients,
    ...lifestyleClients,
    ...pbClients,
    ...teachingClients,
    ...realestateClients,

};

export function getSocialClient(clientId: string) {
  return SocialData[clientId];
}
