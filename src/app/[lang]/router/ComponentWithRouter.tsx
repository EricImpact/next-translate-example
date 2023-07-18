"use client";

import { useRouter } from "next/navigation";

export default function ComponentWithRouter() {
  const { push } = useRouter();
  return <p>Router...</p>;
}
