import { useParams, Link } from "react-router-dom";
import { motion as Motion } from "framer-motion";
import { useState } from "react";
import { productData } from "../data/productData";

export default function ProductDetailPage() {
  const { productId } = useParams();
  const product = productData[productId];

  const [activeSection, setActiveSection] = useState("benefits");

  if (!product) {
    return (
      <main className="pt-40 text-center">
        <h1 className="text-2xl font-semibold text-red-600">
          Product not found
        </h1>
      </main>
    );
  }

  return (
    <main className="bg-white text-slate-800">
      {/* ================= HERO ================= */}
      <section className="pt-36 pb-20">
        <div className="max-w-7xl mx-auto px-6 grid gap-14 md:grid-cols-2 items-center">
          {/* Image */}
          <Motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >
            <img
              src={product.img}
              alt={product.name}
              className="max-h-[380px] object-contain"
            />
          </Motion.div>

          {/* Info */}
          <Motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#0071BC] hover:text-[#005FA3] mb-4"
            >
              ← Back to Products
            </Link>

            <h1 className="font-chillax mt-3 text-4xl sm:text-5xl font-semibold text-[#0071BC]">
              {product.name}
            </h1>

            <p className="mt-6 text-slate-600 leading-relaxed text-lg">
              {product.description}
            </p>
          </Motion.div>
        </div>
      </section>

      {/* ================= CENTERED TABS ================= */}
      <div className="font-chillax sticky top-24 z-30 bg-white">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-center">
          <div className="flex gap-2 rounded-full bg-white border border-slate-200 shadow-sm px-2 py-2">
            {product.benefits && (
              <TabButton
                label="Benefits"
                active={activeSection === "benefits"}
                onClick={() => setActiveSection("benefits")}
              />
            )}

            {product.modeOfAction && (
              <TabButton
                label="Mode of Action"
                active={activeSection === "mode"}
                onClick={() => setActiveSection("mode")}
              />
            )}

            {product.administration && (
              <TabButton
                label="Recommendation"
                active={activeSection === "dosage"}
                onClick={() => setActiveSection("dosage")}
              />
            )}

            {product.presentation &&
              Object.values(product.presentation).some(Boolean) && (
                <TabButton
                  label="Presentation"
                  active={activeSection === "presentation"}
                  onClick={() => setActiveSection("presentation")}
                />
              )}
          </div>
        </div>
      </div>

      {/* ================= TAB CONTENT ================= */}
      <section className="pb-32 pt-20">
        <div className="max-w-5xl mx-auto px-6">
          {/* ===== BENEFITS ===== */}
          {activeSection === "benefits" && product.benefits && (
            <ContentSection title="Key Benefits">
              <ul className="space-y-3 list-disc pl-6 text-slate-700 leading-relaxed">
                {product.benefits.map((item, i) => {
                  const [title, description] = item.split(":");

                  return (
                    <li key={i}>
                      <strong className="text-slate-900">{title}:</strong>
                      {description && (
                        <span className="ml-1">{description}</span>
                      )}
                    </li>
                  );
                })}
              </ul>
            </ContentSection>
          )}

          {/* ===== MODE OF ACTION ===== */}
          {activeSection === "mode" && product.modeOfAction && (
            <ContentSection title="Mode of Action">
              <p className="text-slate-700 whitespace-pre-line leading-relaxed">
                {product.modeOfAction}
              </p>
            </ContentSection>
          )}

          {/* ===== Recommendation ===== */}
          {activeSection === "dosage" && product.administration && (
            <ContentSection title="Recommendation">
              <div className="space-y-4 text-slate-700 leading-relaxed">
                {product.administration
                  .split("\n")
                  .filter((line) => line.trim() !== "") // remove empty lines
                  .map((line, i) => {
                    // Handle lines like "1. Something:" or "Layers:" or just plain text
                    const trimmed = line.trim();

                    // Check if it's a numbered/main heading (e.g. "1. Maintenance of...")
                    const isSectionHeading = /^\d+\.\s/.test(trimmed);

                    // Try to split on first colon
                    const colonIndex = trimmed.indexOf(":");
                    const hasColon = colonIndex !== -1;

                    if (hasColon) {
                      const title = trimmed.substring(0, colonIndex + 1).trim(); // include colon
                      const description = trimmed
                        .substring(colonIndex + 1)
                        .trim();

                      return (
                        <div key={i} className={isSectionHeading ? "mt-6" : ""}>
                          {isSectionHeading ? (
                            <h4 className="font-semibold text-slate-900 mb-2">
                              {title}
                            </h4>
                          ) : (
                            <p>
                              <strong className="text-slate-900">
                                {title}
                              </strong>
                              {description && (
                                <span className="ml-1.5">{description}</span>
                              )}
                            </p>
                          )}
                        </div>
                      );
                    }

                    // Fallback: no colon → treat as regular line (e.g. "Or as recommended...")
                    return (
                      <p
                        key={i}
                        className={isSectionHeading ? "font-semibold mt-4" : ""}
                      >
                        {trimmed}
                      </p>
                    );
                  })}
              </div>
            </ContentSection>
          )}
          {/* ===== PRESENTATION (UPDATED) ===== */}
          {activeSection === "presentation" && product.presentation && (
            <ContentSection title="Presentation">
              <ul className="space-y-4 text-slate-700 leading-relaxed">

                {product.presentation.packSize && (
                  <li>
                    
                    <span className="ml-1">
                      {product.presentation.packSize}
                    </span>
                  </li>
                )}

                {product.presentation.storage && (
                  <li>
                    <strong className="text-slate-900">Storage Instruction:</strong>
                    <span className="ml-1">{product.presentation.storage}</span>
                  </li>
                )}
              </ul>
            </ContentSection>
          )}
        </div>
      </section>
    </main>
  );
}

/* ================= TAB BUTTON ================= */
function TabButton({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`
        rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-300
        ${
          active
            ? "bg-[#0071BC] text-white shadow-md"
            : "text-slate-600 hover:text-[#0071BC] hover:bg-slate-100"
        }
      `}
    >
      {label}
    </button>
  );
}

/* ================= CONTENT CARD ================= */
function ContentSection({ title, children }) {
  return (
    <Motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="rounded-3xl border border-slate-200 bg-slate-50 p-8 sm:p-10"
    >
      <h2 className="font-chillax mb-6 text-2xl sm:text-3xl font-semibold text-[#0071BC]">
        {title}
      </h2>
      {children}
    </Motion.section>
  );
}
