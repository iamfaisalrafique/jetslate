import AuthorsArchivePage from "@/app/authors/page";
import { metadata as baseMetadata } from "@/app/authors/page";
import type { Metadata } from "next";

export const revalidate = 3600;

export async function generateStaticParams() {
  return [
    { slug: "jetslate-team" },
    { slug: "jetslate" },
  ];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return {
    ...baseMetadata,
    alternates: {
      canonical: "https://jetslate.com/authors/jetslate-team",
    },
  };
}

export default async function DynamicAuthorsSubPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  return <AuthorsArchivePage searchParams={searchParams} />;
}
