"use client";

import { useEffect } from "react";
import { applyStoredCursor } from "@/lib/treasureBox";

export default function CursorRestorer() {
  useEffect(() => {
    applyStoredCursor();
  }, []);

  return null;
}
