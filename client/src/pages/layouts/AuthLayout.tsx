import { Outlet } from "react-router-dom"
import { FullScreenCard } from "../../components/FullScreenCard"

export function AuthLayout() {
  // 可以保证子路由共享父路由的界面而不会覆盖。为此React提供了Outlet组件，将其用于父组件中可以为子路由的元素占位，并最终渲染子路由的元素。
  // Outlet大概就是子組件路油的佔位符

  return (
    <FullScreenCard>
      <FullScreenCard.Body>
        <Outlet />
      </FullScreenCard.Body>
      <FullScreenCard.BelowCard>Hi</FullScreenCard.BelowCard>
    </FullScreenCard>
  )
}
