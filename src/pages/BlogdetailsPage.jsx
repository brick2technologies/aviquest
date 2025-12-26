import { useParams, Link } from "react-router-dom";
import { motion as Motion } from "framer-motion";
import { blogData } from "../data/blogData";

export default function BlogDetailPage() {
  const { blogId } = useParams();
  const blog = blogData[blogId];

  if (!blog) {
    return (
      <main className="pt-40 text-center">
        <h1 className="text-2xl font-semibold text-red-600">Blog not found</h1>
      </main>
    );
  }

  return (
    <main className="bg-white text-slate-800">
      {/* ================= HERO IMAGE ================= */}
      <section className="pt-32">
        <div className="max-w-5xl mx-auto px-6">
          <Motion.img
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            src={blog.img}
            alt={blog.title}
            className="w-full h-[360px] rounded-3xl object-cover"
          />
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6">
          <Motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className=" font-chillax text-3xl md:text-4xl font-semibold text-[#0071BC]"
          >
            {blog.title}
          </Motion.h1>

          <div className="mt-8 space-y-5 text-slate-700">
            {blog.content.split("\n").map((line, index) => {
              // Bullet heading
              if (line.trim().startsWith("🔹")) {
                return (
                  <p key={index} className="font-semibold text-slate-900 mt-6">
                    {line}
                  </p>
                );
              }

              // Normal text
              return (
                <p key={index} className="leading-relaxed">
                  {line}
                </p>
              );
            })}
          </div>

          {/* Back link */}
          <Link
            to="/blogs"
            className="inline-block mt-10 text-sm font-medium text-[#0071BC] hover:underline"
          >
            ← Back to Blogs
          </Link>
        </div>
      </section>
    </main>
  );
}
