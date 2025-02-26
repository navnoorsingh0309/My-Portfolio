"use client";

import type { ProjectSchema } from "@/models/schema";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Github,
  Globe,
  FileText,
  Download,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface ProjectDialogProps {
  project: ProjectSchema | null;
  onClose: () => void;
}

export function ProjectDialog({ project, onClose }: ProjectDialogProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!project) return null;

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === project.image.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? project.image.length - 1 : prev - 1
    );
  };

  return (
    <Dialog open={!!project} onOpenChange={() => onClose()}>
      <DialogContent className="max-w-[95vw] max-h-[95vh] overflow-y-auto bg-black/90 border border-white/10 p-0">
      <div className="relative h-[50vh] w-full group">
        <AnimatePresence mode="wait">
            <motion.img
            key={currentImageIndex}
            src={`https://utfs.io/f/${project.image[currentImageIndex]}`}
            className="w-full h-full object-contain"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            />
        </AnimatePresence>

        {project.image.length > 1 && (
            <>
            <Button
                variant="ghost"
                size="icon"
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={prevImage}
            >
                <ChevronLeft className="h-8 w-8" />
            </Button>
            <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={nextImage}
            >
                <ChevronRight className="h-8 w-8" />
            </Button>
            </>
        )}
        </div>


        <div className="p-6 space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">
              {project.title}
            </h2>
            <p className="text-zinc-400 text-sm">{project.brief}</p>
          </div>

          <div className="flex flex-wrap gap-4">
            {[
              { icon: Globe, label: "Website", link: project.website },
              { icon: Github, label: "GitHub", link: project.github },
              { icon: FileText, label: "Report", link: project.report },
              { icon: Download, label: "Download", link: project.download },
            ]
              .filter((item) => item.link)
              .map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <item.icon className="h-4 w-4" />
                  <span className="text-sm">{item.label}</span>
                </a>
              ))}
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Team Members
            </h3>
            <div className="flex flex-wrap gap-4">
              {project.team.map((member, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-white/5 rounded-full px-4 py-2"
                >
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={`https://avatar.vercel.sh/${member}`} />
                    <AvatarFallback>{member[0]}</AvatarFallback>
                  </Avatar>
                  <span className="text-sm text-white">{member}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Description
            </h3>
            <p className="text-zinc-400 leading-relaxed whitespace-pre-wrap text-justify">
              {project.description}
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
