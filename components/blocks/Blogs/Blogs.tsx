"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BlogsSchema } from "@/models/schema";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import React, { useEffect, useState } from "react";
import Link from "next/link";

interface props {
  loaded: boolean;
  setLoaded: (load: boolean) => void;
}

const Blogs: React.FC<props> = ({ loaded, setLoaded }) => {
  const [blogs, setBlogs] = useState<BlogsSchema[]>([]);
  const [hoveredBlog, setHoveredBlog] = useState<string | null>(null);
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(`/api/blogs`, { cache: "no-store" });
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setBlogs(data.blogs.reverse());
        setLoaded(true);
      } catch (err) {
        console.error("Error fetching Blogs:", err);
      }
    };
    fetchBlogs();
  }, []);
  if (!loaded) return <></>;

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <section className="w-full py-12  p-4 px-[30px] sm:px-[70px] text-foreground">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <motion.h2
            className="text-3xl font-bold tracking-tighter sm:text-5xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            My Blog Posts
          </motion.h2>
          <motion.p
            className="max-w-[700px] text-muted-foreground md:text-xl/relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Thoughts, stories, and ideas from my journey.
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {blogs.map((blog) => (
            <motion.div
              key={blog._id}
              variants={item}
              onMouseEnter={() => setHoveredBlog(blog._id)}
              onMouseLeave={() => setHoveredBlog(null)}
            >
              <Link
                href={blog.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
              >
                <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-lg dark:hover:shadow-primary/20 hover:translate-y-[-5px]">
                  <div className="aspect-video w-full overflow-hidden">
                    <img
                      src={`https://utfs.io/f/${blog.image}`}
                      alt={blog.title}
                      className="h-full w-full object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-muted-foreground">
                        {blog.date}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {blog.time} Read
                      </span>
                    </div>
                    <CardTitle className="line-clamp-2 transition-colors duration-300 hover:text-primary">
                      {blog.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="line-clamp-3 text-muted-foreground">
                      {blog.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {blog.stack.map((stack) => (
                        <Badge
                          key={stack}
                          variant="secondary"
                          className="text-xs"
                        >
                          {stack}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button
                      variant="ghost"
                      className="ml-auto group flex items-center gap-1"
                    >
                      Read more
                      <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </CardFooter>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Blogs;
