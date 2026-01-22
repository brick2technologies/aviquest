import Prod1 from "../assets/products/calcipro-granules.png";
import Prod2 from "../assets/products/bioshield.png";
import Prod3 from "../assets/products/shellguard.png";
import Prod4 from "../assets/products/mintrust.png";
import Prod5 from "../assets/products/enzyplus.png";
import Prod7 from "../assets/products/phytacare.png";
import Prod9 from "../assets/products/calcipro-liquid.png";
import Prod10 from "../assets/products/preciliv.png";
import Prod11 from "../assets/products/mintrust-l.png";

export const productData = {
  "mintrust-l": {
    id: "mintrust-l",
    name: "Mintrust-L",
    img: Prod11,
    category: "Nutrition",

    description:
      "Mintrust-L is a well-balanced trace mineral formulation designed to support the fundamental physiological needs of birds. It provides essential trace minerals in stable and consistently available forms, ensuring reliable absorption and efficient utilization. By sustaining critical metabolic functions, Mintrust-L supports steady growth and efficient feed utilization. It enhances immune competence, helping birds maintain health under routine production challenges. Mintrust-L promotes skeletal integrity and robust structural development while supporting proper egg formation and shell quality. Through consistent mineral availability, Mintrust-L helps maintain uniform flock performance and overall production stability throughout the bird’s life cycle.",

    benefits: [
      "Improves Growth & Feed Conversion Ratio: Supports efficient nutrient absorption and utilization, promoting steady growth and better feed conversion.",
      "Stronger Immunity & Disease Resistance: Enhances immune competence, helping birds withstand routine disease challenges.",
      "Better Bone Strength & Skeletal Integrity: Supports skeletal development and reduces the risk of leg weakness and structural problems.",
      "Enhanced Egg Production & Shell Quality: Supports proper egg formation and shell strength for consistent production.",
      "Higher Stress Tolerance: Helps birds cope effectively with environmental, nutritional, and production-related stress.",
      "Improved Fertility & Hatchability: Supports reproductive performance, improving fertility and chick output.",
      "Improved Gut Health & Nutrient Absorption: Enhances digestive efficiency, supporting stable performance and overall vitality."
    ],

    administration:
      "Layers: 1 Kg per ton of feed\nBreeders: 2 Kg per ton of feed\nBroilers: 1 Kg per ton of feed\n\n" +
      "Disclaimer: The dosage and usage suggested are based on research and field experience and may be adjusted according to flock conditions or the advice of the visiting veterinarian.",

    presentation: {
      packSize: "Mintrust-L is available as 25 Kg Bag.",
      storage: "Store in a cool & dry place."
    }
  },

  "mintrust-p": {
    id: "mintrust-p",
    name: "Mintrust-P",
    img: Prod4,
    category: "Nutrition",

    description:
      "Mintrust-P is a premium organic trace mineral solution developed to support optimal physiological performance in modern poultry. It provides essential trace minerals in highly bioavailable organic forms, ensuring efficient absorption and precise utilization within body tissues. This targeted mineral delivery supports immune competence, skeletal integrity, eggshell quality, and reproductive efficiency. By maintaining adequate mineral availability throughout the production cycle, Mintrust-P helps birds sustain consistent performance and resilience under varying production conditions.",

    benefits: [
      "Superior Growth & Feed Efficiency: Delivers highly absorbable organic minerals, enabling birds to convert feed into growth more efficiently.",
      "Stronger Immunity & Better Disease Protection: Strengthens natural immunity, helping birds fight infections effectively, especially during stress.",
      "Excellent Bone Strength & Structural Development: Supports optimal bone and joint development, ensuring stronger, healthier, and more uniform birds.",
      "Better Egg Production & Stronger Shells: Improves mineral availability for egg formation, resulting in stronger shells and consistent egg output.",
      "Higher Stress Resistance & Performance Stability: Helps birds maintain performance during heat stress and production challenges.",
      "Improved Fertility, Hatchability & Chick Quality: Supports embryo development, leading to higher hatchability and stronger, more viable chicks.",
      "Superior Gut Health & Nutrient Utilization: Supports gut integrity and nutrient absorption, maximizing performance from every kilogram of feed."
    ],

    administration:
      "Layers: 0.5 Kg per ton of feed\nBreeders: 1 Kg per ton of feed\nBroilers: 0.5 Kg per ton of feed\n\n" +
      "Disclaimer: The dosage and usage suggested are based on research and field experience and may be adjusted according to flock conditions or the advice of the visiting veterinarian.",

    presentation: {
      packSize: "Mintrust-P is available as 25 Kg Bag.",
      storage: "Store in a cool & dry place."
    }
  },

  "calcipro-liquid": {
    id: "calcipro-liquid",
    name: "Calcipro Liquid",
    img: Prod9,
    category: "Nutrition",

    description:
      "Calcipro Liquid is a specialized calcium liquid supplement enriched with carefully selected herbal components developed to support skeletal strength, eggshell quality, and consistent production performance in poultry. It is formulated to meet elevated calcium requirements during rapid growth, peak egg production, and periods of physiological stress. By supporting efficient mineral utilization and maintaining metabolic balance, Calcipro helps sustain feed intake, vitality, and flock uniformity. Its dependable calcium availability contributes to strong bone integrity and improved shell strength, reducing losses associated with calcium imbalance. Suitable for both routine supplementation and targeted use during high-demand phases, Calcipro integrates seamlessly into poultry nutrition programs and provides reliable support for production stability, flock health, and long-term profitability.",

    benefits: [
      "Builds Strong Bones and Skeletal Stability: Supplies bioavailable calcium supported by Vitamin D₃, enabling efficient absorption and deposition into bone tissue during rapid growth.",
      "Improves Eggshell Strength and Shell Uniformity: Ensures consistent calcium availability during shell formation, producing thicker, stronger shells and reducing breakage during peak lay.",
      "Enhances Mineral Utilization Efficiency: Vitamin D₃ optimizes intestinal calcium uptake and metabolic utilization, preventing mineral loss during high-demand physiological phases.",
      "Supports Metabolic Vitality and Oxygen Transport: Iron supported by Vitamin B₁₂ promotes red blood cell formation, improving oxygen delivery, energy metabolism, and appetite.",
      "Improves Stress Adaptation and Production Consistency: Herbal components support resilience during production and environmental stress, maintaining feed intake, mineral balance, and consistent performance."
    ],

    administration:
      "Chicks: 2 ml per 100 birds\nLayers & Breeders: 10–20 ml per 100 birds\nBroilers: 5 ml per 100 birds\n\n" +
      "Disclaimer: The dosage and usage suggested are based on research and field experience and may be adjusted according to flock conditions or the advice of the visiting veterinarian.",

    presentation: {
      packSize: "Calcipro Liquid is available as 1 Ltr, 5 Ltr, 20 Ltr jars",
      storage: "Store in a cool & dry place."
    }
  },

  "calcipro-granules": {
    id: "calcipro-granules",
    name: "Calcipro Granules",
    img: Prod1,
    category: "Nutrition",

    description:
      "Calcipro Granules is a specialized calcium feed supplement enriched with carefully selected herbal components developed to support skeletal strength, eggshell quality, and consistent production performance in poultry. It is formulated to meet elevated calcium requirements during rapid growth, peak egg production, and periods of physiological stress. By supporting efficient mineral utilization and maintaining metabolic balance, Calcipro helps sustain feed intake, vitality, and flock uniformity. Its dependable calcium availability contributes to strong bone integrity and improved shell strength, reducing losses associated with calcium imbalance. Suitable for both routine supplementation and targeted use during high-demand phases, Calcipro integrates seamlessly into poultry nutrition programs and provides reliable support for production stability, flock health, and long-term profitability.",

    benefits: [
      "Builds Strong Bones and Skeletal Stability: Supplies bioavailable calcium supported by Vitamin D₃, enabling efficient absorption and deposition into bone tissue during rapid growth.",
      "Improves Eggshell Strength and Shell Uniformity: Ensures consistent calcium availability during shell formation, producing thicker, stronger shells and reducing breakage during peak lay.",
      "Enhances Mineral Utilization Efficiency: Vitamin D₃ optimizes intestinal calcium uptake and metabolic utilization, preventing mineral loss during high-demand physiological phases.",
      "Supports Metabolic Vitality and Oxygen Transport: Supports red blood cell formation and oxygen delivery to tissues, improving energy metabolism and appetite.",
      "Improves Stress Adaptation and Production Consistency: Herbal components support resilience during production and environmental stress, maintaining feed intake, mineral balance, and consistent performance."
    ],

    administration:
      "500–1000 gm per ton of feed\n\n" +
      "Disclaimer: The dosage and usage suggested are based on research and field experience and may be adjusted according to flock conditions or the advice of the visiting veterinarian.",

    presentation: {
      packSize: "Calcipro Granules is available as 25 Kg Bag",
      storage: "Store in a cool & dry place."
    }
  },

  "bioshield-x": {
    id: "bioshield-x",
    name: "Bioshield-X",
    img: Prod2,
    category: "Nutrition",

    description:
      "Bioshield-X is a specialty poultry health supplement containing Alphamonolaurin, a scientifically proven bioactive compound with precise antimicrobial action. It targets harmful bacteria and lipid-enveloped viruses while maintaining the balance of beneficial gut microflora. By supporting intestinal health and strengthening natural immunity, Bioshield-X helps maintain consistent flock health and performance under routine and challenging production conditions. Fully non-antibiotic and residue-free, it integrates seamlessly into modern poultry health programs. Designed as a science-driven solution, Bioshield-X provides reliable protection, supporting stable growth and predictable production outcomes across the flock. Regular use helps maintain a stable gut environment, reduces health setbacks, and supports consistent feed efficiency and long-term flock stability.",

    benefits: [
      "Maintains Intestinal Health & Gut Stability: Promotes a stable gut environment by controlling harmful microbial pressure, supporting intestinal integrity, nutrient utilization, and flock uniformity.",
      "Supports Pathogen Load Management: Helps reduce bacterial and lipid-enveloped viral load, supporting faster flock stabilization and limiting secondary complications.",
      "Maintains Innate Immune Homeostasis: Enhances first-line immune readiness while preventing excessive inflammatory or metabolic stress.",
      "Enables Antibiotic-Free Production: Provides non-antibiotic microbial control, reducing antibiotic dependency and supporting residue-free poultry systems.",
      "Supports Vaccination & Dietary Transitions: Maintains gut and immune stability during vaccination and feed changes, minimizing performance setbacks.",
      "Enhances Stress Adaptation & Performance: Improves tolerance to physiological, environmental, and management stress, supporting performance continuity."
    ],

    administration:
      "1. Maintenance of intestinal health and functional gut stability:\nPowder: 250–500 gm per ton of feed\nLiquid: 5–10 ml per 100 birds per day or 0.5–1 ml per litre of drinking water\nUsage: Routine, long-term inclusion to maintain gut balance and performance.\n\n2. Adjunct support during bacterial infections and lipid-enveloped viral challenges:\nPowder: 2–5 Kg per ton of feed\nLiquid: 20–30 ml per 100 birds per day or 2–3 ml per litre of drinking water\nDuration: 5–7 days or as advised by the veterinarian\n\n3. Support of innate immune competence:\nPowder: 500–750 gm per ton of feed\nLiquid: 10 ml per 100 birds per day or 1 ml per litre of drinking water\nUsage: During immune stress or recovery periods\n\n4. Antibiotic-reduction & residue-free production programs:\nPowder: 500–1000 gm per ton of feed\nLiquid: 10–20 ml per 100 birds per day or 1–2 ml per litre of drinking water\nUsage: Continuous or cyclic\n\n5. During vaccination and dietary transitions:\nPowder: 500 gm per ton of feed\nLiquid: 10–20 ml per 100 birds per day or 1–2 ml per litre of drinking water\nUsage: 3–5 days before and after vaccination or feed change\n\n6. During physiological, environmental, and management stress:\nPowder: 1000 gm per ton of feed\nLiquid: 10–20 ml per 100 birds per day or 1–2 ml per litre of drinking water\n\n" +
      "Disclaimer: The dosage and usage suggested are based on research and field experience and may be adjusted according to flock conditions or the advice of the visiting veterinarian.",

    presentation: {
  packSize: `Bioshield-X is available as:
• Powder: 25 Kg Bag (25 × 1 Kg)
• Liquid: 1 Ltr, 5 Ltr & 20 Ltr Jars`,
  storage: "Store in a cool & dry place."
}

  },

  "shellguard": {
    id: "shellguard",
    name: "Shellguard",
    img: Prod3,
    category: "Nutrition",

    description:
      "Shellguard is a specialized poultry supplement formulated to provide essential trace minerals and Vitamin D₃ required for the formation of strong, healthy eggshells. Its unique blend supports organized mineral deposition and structural matrix development, enabling eggshells to withstand handling, transportation, and the rigors of commercial egg production. Trace minerals such as zinc, copper, and manganese play critical roles in collagen synthesis, matrix vesicle formation, and glycosaminoglycan production, all of which contribute to eggshell integrity. Vitamin D₃ enhances calcium absorption and utilization, ensuring adequate calcium availability in the shell gland for consistent eggshell mineralization and quality.",

    benefits: [
      "Prevents Shell Fragility: Promotes uniform calcium carbonate deposition, reducing micro-cracks and improving resistance to breakage during laying, handling, and transport.",
      "Enhances Shell Strength: Supports organized mineral deposition and collagen-based matrix formation, resulting in robust, high-density shells.",
      "Optimizes Calcium Metabolism: Enhances absorption, transport, and deposition of calcium in the shell gland, ensuring consistent shell quality.",
      "Supports Collagen Formation: Stimulates collagen synthesis, creating a strong protein scaffold that integrates with minerals for improved shell strength and elasticity.",
      "Facilitates Matrix Vesiculation: Promotes matrix vesicle formation that regulates calcium crystallization and ensures uniform mineral deposition.",
      "Enhances Shell Matrix Integrity: Boosts synthesis of glycosaminoglycans and organic matrix components, strengthening the internal framework of the eggshell."
    ],

    administration:
      "Liquid:\nLayers: 20–25 ml per 100 birds for 5–7 days\nBreeders: 40–50 ml per 100 birds for 5–7 days\n\n" +
      "Powder:\nLayers: 250 gm per ton of feed\nBreeders: 500 gm per ton of feed\n\n" +
      "Disclaimer: The dosage and usage suggested are based on research and field experience and may be adjusted according to flock conditions or the advice of the visiting veterinarian.",

    presentation: {
      packSize: "Powder: 25 Kg bag (5 × 5 Kg).\n\nLiquid: 1 Ltr, 5 Ltr, and 20 Ltr jars.",
      storage: "Store in a cool & dry place."
    }
  },

  "enzyplus-p": {
    id: "enzyplus-p",
    name: "Enzyplus-P",
    img: Prod5,
    category: "Nutrition",

    description:
      "Enzyplus-P is a synergistic blend of prebiotics, probiotics, and cocktail enzymes, reflecting Aviquest Healthcare’s commitment to innovative poultry nutrition solutions. This advanced formulation empowers poultry producers to achieve superior flock health, performance, and profitability. Prebiotics support probiotic growth, while probiotics maintain a healthy gut microbiome and enhance immune function. The cocktail enzymes unlock the full nutritional potential of feed ingredients by improving nutrient breakdown and absorption. This harmonious interaction among prebiotics, probiotics, and enzymes results in enhanced digestion, nutrient utilization, and overall production efficiency.",

    benefits: [
      "Enhances Gut Health & Nutrient Absorption: Promotes a healthy gut environment, supporting optimal digestion and nutrient uptake.",
      "Strengthens Immune Defence: Enhances immune response, reducing the risk of infections and disease challenges.",
      "Improves Digestive Efficiency: Supports efficient digestion and helps reduce the incidence of diarrhea and digestive disturbances.",
      "Optimizes Feed Efficiency & Reduces Costs: Improves feed utilization, lowering feed costs and enhancing profitability.",
      "Reduces Antibiotic Dependency: Supports gut health and immunity, reducing reliance on antibiotics and helping minimize resistance.",
      "Balances the Gut Microbiome: Maintains a stable and beneficial microbial population essential for digestion and immunity.",
      "Enhances Nutrient Utilization & Growth Performance: Maximizes nutrient availability, supporting improved growth and performance.",
      "Reduces Enteric Disorders: Helps lower the occurrence of diarrhea and other gut-related issues.",
      "Improves Overall Poultry Performance: Supports better health, productivity, and flock uniformity.",
      "Enhances Antibiotic Effectiveness When Used: Supports improved response to antibiotics when therapeutic use is required."
    ],

    administration:
      "Enzyplus-P can be easily incorporated into poultry feed at recommended dosage of 250 grams per ton of feed.The exact dosage may vary depending on the specific feed formulation and phosphorus content. or As suggested by veterinarian.\n\n" +
      "Disclaimer: The dosage and usage suggested are based on research and field experience and may be adjusted according to flock conditions or the advice of the visiting veterinarian.",

    presentation: {
      packSize: "Enzyplus-P is available as 25x1 Kg pouches in 25 Kg bag.",
      storage: "Store in a cool & dry place."
    }
  },

  "preci-liv": {
    id: "preci-liv",
    name: "Preciliv",
    img: Prod10,
    category: "Nutrition",

    description:
      "Preciliv is an advanced liver tonic formulated to meet the metabolic demands of high-performing poultry. It supports comprehensive hepatic protection by enhancing detoxification pathways, lipid metabolism, and bile secretion. By preserving hepatocellular integrity under nutritional, metabolic, and environmental stress, Preciliv ensures uninterrupted liver functionality. Its precision-balanced formulation improves nutrient assimilation and feed conversion efficiency. Preciliv plays a pivotal role in controlling fatty liver changes and metabolic overload commonly seen in intensive production. Sustained liver efficiency translates into improved growth uniformity and production consistency. Preciliv delivers dependable liver resilience, forming the foundation for long-term flock performance.",

    benefits: [
      "Revitalizes Hepatic Function: Restores and maintains normal liver physiology, supporting efficient metabolic, digestive, and detoxification processes.",
      "Enhances Detoxification Efficiency: Supports hepatic detox pathways, enabling effective neutralization and elimination of feed- and environment-derived toxins.",
      "Improves Nutrient Metabolism & Utilization: Optimizes liver enzyme activity, enhancing carbohydrate, protein, and lipid metabolism for better nutrient conversion.",
      "Strengthens Immunity & Disease Resistance: Supports immune competence by maintaining metabolic and antioxidant balance through healthy liver function.",
      "Promotes Optimal Growth & Weight Gain: Ensures consistent nutrient supply for tissue growth, supporting uniform body weight development.",
      "Provides Protection Against Toxins & Stress: Protects hepatocytes from oxidative and metabolic stress associated with intensive production systems.",
      "Enhances Energy Metabolism & Vitality: Supports gluconeogenesis and fat mobilization, ensuring sustained energy availability and improved vitality.",
      "Stimulates Appetite & Feed Intake: Improves bile secretion and digestion, helping restore appetite and steady feed consumption.",
      "Accelerates Recovery & Liver Regeneration: Supports hepatocyte repair following toxic, nutritional, or disease-related liver challenges.",
      "Ensures Peak Flock Performance & Profitability: Sustained liver efficiency improves nutrient conversion and reduces metabolic wastage, enhancing economic returns."
    ],

    administration:
      "Liquid:\nBroilers & Layers: 20–25 ml per 100 birds\nBreeders: 40–50 ml per 100 birds\n\n" +
      "Powder:\nBroilers & Layers: 500–1000 gm per ton of feed\nBreeders: 1000–2000 gm per ton of feed\n\n" +
      "Or as recommended by the visiting veterinarian.\n\n" +
      "Disclaimer: The dosage and usage suggested are based on research and field experience and may be adjusted according to flock conditions or the advice of the visiting veterinarian.",

    presentation: {
      packSize: "Liquid: 1 Ltr, 5 Ltr, and 25 Ltr jars. Powder: 25 Kg bags.",
      storage: "Store in a cool & dry place."
    }
  },

  "phytacare": {
    id: "phytacare",
    name: "Phytacare",
    img: Prod7,
    category: "Nutrition",

    description:
      "Phytacare is a specialized poultry nutritional supplement containing 5000 FTU of phytase, designed to enhance phosphorus availability in feed. By breaking down phytate, Phytacare improves nutrient absorption and overall feed efficiency, leading to better growth and performance in poultry. This innovative formulation supports sustainable poultry farming by reducing phosphorus excretion and minimizing environmental impact.",

    benefits: [
      "Improves Phosphorus Utilization: Enhances phosphorus bioavailability, allowing birds to absorb and utilize phosphorus more effectively.",
      "Reduces Feed Costs: Improves phosphorus utilization, reducing the need for expensive inorganic phosphorus supplements.",
      "Enhances Growth Performance: Improves phosphorus availability, contributing to faster growth rates, improved feed efficiency, and better flock performance.",
      "Improves Bone Health: Ensures adequate phosphorus intake for strong bone development and reduced incidence of bone disorders.",
      "Reduces Environmental Impact: Minimizes phosphorus excretion, helping protect the environment from phosphorus pollution."
    ],

    administration:
      "Phytacare can be easily incorporated into poultry feed at recommended dosage of 100-200 grams per ton of feed. The exact dosage may vary depending on the specific feed formulation and phosphorus content. or As suggested by veterinarian.\n\n" +
      "Disclaimer: The dosage and usage suggested are based on research and field experience and may be adjusted according to flock conditions or the advice of the visiting veterinarian.",

    presentation: {
      packSize: "Phytacare is available as 25x1 Kg pouches in 25 Kg bag.",
      storage: "Store in a cool & dry place."
    }
  }
};