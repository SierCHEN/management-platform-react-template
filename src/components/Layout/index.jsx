import React from 'react'
import { useLocation, useOutlet } from 'react-router-dom'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import { routes } from '../../route/routes'
import './style.css'

export const Layout = () => {
  const location = useLocation()
  const currentOutlet = useOutlet()
  const { nodeRef } = routes.find(route => route.path === location.pathname) ?? {}
  return (
    <>
      <div className="container">
        <SwitchTransition>
          <CSSTransition key={location.pathname} nodeRef={nodeRef} timeout={300} classNames="page" unmountOnExit>
            {state => (
              <div ref={nodeRef} className="page">
                {currentOutlet}
              </div>
            )}
          </CSSTransition>
        </SwitchTransition>
      </div>
    </>
  )
}
