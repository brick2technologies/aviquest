import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

type Blog = {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
};

const blogs: Blog[] = [
  {
    title: "The Role of Nutrition in Poultry Health: Key Insights",
    excerpt:
      "Discover how proper nutrition improves poultry immunity, growth, and overall farm productivity.",
    date: "Dec 2025",
    readTime: "4 min read",
    image:
      "https://res.cloudinary.com/di1bfo7ma/image/upload/v1766575750/blog1aviquest_kqyzqu.png",
  },
  {
    title: "Latest Advances in Poultry Vaccines and Immunization",
    excerpt:
      "Understand modern vaccination strategies that protect flocks from common poultry diseases.",
    date: "Dec 2025",
    readTime: "5 min read",
    image:
      "https://res.cloudinary.com/di1bfo7ma/image/upload/v1766575754/blog2aviquest_geosx0.png",
  },
  {
    title: "Sustainable Practices in Modern Poultry Farming",
    excerpt:
      "Explore eco-friendly poultry farming methods that reduce costs and improve long-term sustainability.",
    date: "Nov 2025",
    readTime: "3 min read",
    image:
      "https://res.cloudinary.com/di1bfo7ma/image/upload/v1766575749/blog3aviquest_nbciwi.png",
  },
];

export default function BlogSection() {
  const [index, setIndex] = useState<number>(0);

  const paginate = (dir: number) => {
    setIndex((prev) => (prev + dir + blogs.length) % blogs.length);
  };

  return (
    <section className="bg-white pt-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="font-chillax text-4xl sm:text-5xl font-semibold text-[#0071BC]">
            Aviquest Blogs
          </h2>

          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            Stay informed with expert insights on poultry nutrition, veterinary
            care, and sustainable poultry healthcare practices.
          </p>
        </motion.div>

        {/* ================= MOBILE CAROUSEL ================= */}
        <div className="md:hidden relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.article
              key={index}
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -80 }}
              transition={{ duration: 0.45 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.9}
              onDragEnd={(_, info) => {
                if (info.offset.x < -80) paginate(1);
                if (info.offset.x > 80) paginate(-1);
              }}
              className="
                group
                rounded-2xl
                bg-[radial-gradient(ellipse_at_top,_rgba(0,113,188,0.16),_rgba(16,185,129,0.22),_rgba(236,253,245,0.65))]
                backdrop-blur-xl
                border border-emerald-200/60
                shadow-[0_20px_60px_rgba(16,185,129,0.18)]
              "
            >
              {/* IMAGE */}
              <div className="h-52 overflow-hidden rounded-t-2xl">
                <img
                  src={blogs[index].image}
                  alt={blogs[index].title}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* CONTENT */}
              <div className="p-7 space-y-4 text-center">
                <div className="flex justify-center gap-3 text-xs text-slate-500">
                  <span>{blogs[index].date}</span>
                  <span>•</span>
                  <span>{blogs[index].readTime}</span>
                </div>

                <h3 className="text-lg font-semibold text-slate-900">
                  {blogs[index].title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {blogs[index].excerpt}
                </p>

                <button className="text-sm font-medium text-[#336600] hover:underline">
                  Read More →
                </button>
              </div>
            </motion.article>
          </AnimatePresence>

          {/* DOTS */}
          <div className="flex justify-center gap-2 mt-6">
            {blogs.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2.5 w-2.5 rounded-full transition ${
                  i === index ? "bg-[#0071BC]" : "bg-slate-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* ================= DESKTOP GRID ================= */}
        <div className="hidden md:grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="
                group
                rounded-2xl
                bg-[radial-gradient(ellipse_at_top,_rgba(0,113,188,0.16),_rgba(16,185,129,0.22),_rgba(236,253,245,0.65))]
                backdrop-blur-xl
                border border-emerald-200/60
                shadow-[0_20px_60px_rgba(16,185,129,0.18)]
                hover:shadow-xl
                transition
              "
            >
              <div className="h-52 overflow-hidden rounded-t-2xl">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="h-full w-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-7 space-y-4 text-center">
                <div className="flex justify-center gap-3 text-xs text-slate-500">
                  <span>{blog.date}</span>
                  <span>•</span>
                  <span>{blog.readTime}</span>
                </div>

                <h3 className="text-lg font-semibold text-slate-900">
                  {blog.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {blog.excerpt}
                </p>

                <button className="text-sm font-medium text-[#336600] hover:underline">
                  Read More →
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* ================= CTA ================= */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <a
            href="/blogs"
            className="
              inline-flex items-center justify-center
              rounded-full
              border border-[#0071BC]
              px-10 py-3
              text-sm font-medium
              text-[#0071BC]
              hover:bg-[#0071BC]
              hover:text-white
              transition
            "
          >
            View All Blogs
          </a>
        </motion.div>

      </div>
    </section>
  );
}
