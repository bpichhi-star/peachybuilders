import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const folder = searchParams.get("folder");

  if (!folder || folder.includes("..")) {
    return NextResponse.json({ error: "Invalid folder" }, { status: 400 });
  }

  const dir = path.join(process.cwd(), "public", "images", "projects", folder);

  if (!fs.existsSync(dir)) {
    return NextResponse.json({ images: [] });
  }

  const ALLOWED = [".jpg", ".jpeg", ".png", ".webp", ".avif", ".gif"];

  const files = fs
    .readdirSync(dir)
    .filter((f) => ALLOWED.includes(path.extname(f).toLowerCase()))
    .sort()
    .map((f) => `/images/projects/${folder}/${f}`);

  return NextResponse.json({ images: files });
}
