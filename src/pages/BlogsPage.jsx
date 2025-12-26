import { Link } from "react-router-dom";
import { motion as Motion } from "framer-motion";
import { blogData } from "../data/blogData";

export default function BlogsPage() {
  const blogs = Object.values(blogData);

  return (
    <main className="bg-white text-slate-800">
      {/* ================= HEADER ================= */}
      <section className="pt-36 pb-16 text-center">
        <Motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className=" font-chillax text-4xl md:text-5xl font-semibold text-[#0071BC]"
        >
          Aviquest Insights
        </Motion.h1>

        <p className="mt-5 max-w-2xl mx-auto text-slate-600">
          Expert articles on poultry nutrition, health management, vaccines,
          and sustainable farming practices.
        </p>
      </section>

      {/* ================= BLOG GRID ================= */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog, index) => (
            <Link
              key={blog.id}
              to={`/blogs/${blog.id}`}
              className="group"
            >
              <Motion.article
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="
                  rounded-3xl border border-slate-200
                  overflow-hidden bg-white
                  shadow-sm transition
                  group-hover:shadow-lg
                "
              >
                {/* Image */}
                <img
                  src={blog.img}
                  alt={blog.title}
                  className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-chillax text-xl font-semibold text-slate-900">
                    {blog.title}
                  </h3>

                  <p className="mt-3 text-sm text-slate-600 line-clamp-3">
                    {blog.content.replace(/🔹/g, "").slice(0, 140)}...
                  </p>

                  <span className="inline-block mt-5 text-sm font-medium text-[#0071BC]">
                    Read More →
                  </span>
                </div>
              </Motion.article>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
