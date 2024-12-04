import React, { createRef } from 'react'
import { HomePage, GuidePage, AiDialogPage } from '../pages'

export const routes = [
  { path: '/', name: 'Home', element: <HomePage />, nodeRef: createRef() },
  { path: '/guide', name: 'Guide', element: <GuidePage />, nodeRef: createRef() },
  { path: '/aiDialog', name: 'AiDialog', element: <AiDialogPage />, nodeRef: createRef() }
]
