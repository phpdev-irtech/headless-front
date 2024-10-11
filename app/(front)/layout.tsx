import { HeaderMenu } from "./_component/Header";

export default function Layout({ children }: { children: any }) {
  return (
    <>
      <HeaderMenu/>
      {children}
    </>
  )
}