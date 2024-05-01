import { NextRequest, NextResponse } from "next/server";
import { getUrl } from "./lib/get-url";

export function middleware(request: NextRequest) {
  // Busca o token de autenticação direto nos cookies do usuario
  const token = request.cookies.get("authjs.session-token");
  // Busca o caminho da url, da pagina acessada
  const pathname = request.nextUrl.pathname;

  console.log({
    token: token?.value,
    pathname,
  });

  // Se a pagina for de autenticação e existir o token do usuario faz o redirecionamento para sessão autenticada
  if (pathname === "/auth" && token) {
    return NextResponse.redirect(new URL(getUrl("/app")));
  }

  // Se o caminho incluir o '/app' e não existir o token redireciona para pagina de autenticação
  if (pathname.includes("/app") && !token) {
    return NextResponse.redirect(new URL(getUrl("/auth")));
  }
}

// Config para pegar somente as paginas que forem acessadas e não os assets ou api do next
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
