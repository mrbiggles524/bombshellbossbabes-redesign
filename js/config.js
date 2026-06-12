/**
 * Client setup — see SETUP.md
 * Snipcart: checkout + connect Printful for dropshipping
 * Stripe: membership package payment links
 */
window.BBB_CONFIG = {
  siteName: "Bombshell Boss Babes",
  contactEmail: "info@IAOTP.com",
  contactPhone: "+1 (212) 634-4427",
  contactAddress: "276 5th Ave Suite 704-1446, New York, NY 10001",

  /** Snipcart public TEST key — safe on website; switch to Live key when ready */
  snipcartApiKey: "ODZmYTc1NWUtMjYwNC00YWZmLTg5MDUtMjNmMTAxMjMxZDg3NjM5MTY3OTQ3OTU4MDA0ODI0",

  /** Stripe Payment Links for membership (create in Stripe Dashboard) */
  stripeMembershipLinks: {
    diamond: "",
    gold: "",
    crystal: "",
  },

  logo: "https://www.bombshellbossbabes.com/wp-content/uploads/2025/10/Bombshell_Boss_BabesLogobasic.png",
  logoWhite: "https://www.bombshellbossbabes.com/wp-content/uploads/2025/10/Bombshell_Boss_BabesLogobasicWhite-2.png",
};
