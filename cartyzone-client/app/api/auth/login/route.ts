import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  const nestRes = await fetch("http://localhost:3500/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
    credentials: "include",
  });

  const data = await nestRes.json();

  const response = NextResponse.json(data);

  const setCookie = nestRes.headers.get("set-cookie");

  if (setCookie) {
    response.headers.set("set-cookie", setCookie);
  }

  return response;
}
